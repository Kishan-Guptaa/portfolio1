const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const getAccessToken = async () => {
    try {
        const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
        const response = await axios.post(TOKEN_ENDPOINT, new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,
        }), {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.response?.data || error.message);
        throw error;
    }
};

app.get('/now-playing', async (req, res) => {
    try {
        if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
            return res.status(200).json({ isPlaying: false, message: 'Missing credentials' });
        }

        const access_token = await getAccessToken();
        const response = await axios.get(NOW_PLAYING_ENDPOINT, {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        if (response.status === 204 || response.status > 400) {
            return res.status(200).json({ isPlaying: false });
        }

        const song = response.data;
        if (!song.item) {
             return res.status(200).json({ isPlaying: false });
        }

        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
        const album = song.item.album.name;
        const albumArt = song.item.album.images[0].url;
        const songUrl = song.item.external_urls.spotify;

        res.status(200).json({
            isPlaying,
            title,
            artist,
            album,
            albumArt,
            songUrl,
        });
    } catch (error) {
        console.error('Now Playing Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch now playing' });
    }
});

app.get('/recently-played', async (req, res) => {
    try {
        if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
             return res.status(200).json([]);
        }

        const access_token = await getAccessToken();
        const response = await axios.get(`${RECENTLY_PLAYED_ENDPOINT}?limit=5`, {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const tracks = response.data.items.map((item) => ({
            title: item.track.name,
            artist: item.track.artists.map((_artist) => _artist.name).join(', '),
            albumArt: item.track.album.images[0].url,
            songUrl: item.track.external_urls.spotify,
            played_at: item.played_at
        }));

        res.status(200).json(tracks);
    } catch (error) {
        console.error('Recently Played Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch recently played' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
