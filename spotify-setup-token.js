/**
 * Spotify Refresh Token Setup Script
 * 
 * This script helps you get a REFRESH_TOKEN for your Spotify integration.
 * 
 * 1. Go to https://developer.spotify.com/dashboard and open your app.
 * 2. Copy your Client ID and Client Secret.
 * 3. Add 'http://localhost:8888/callback' to your Redirect URIs in settings.
 * 4. Run this script locally: node spotify-setup-token.js
 * 
 * Usage:
 * node spotify-setup-token.js <YOUR_CLIENT_ID> <YOUR_CLIENT_SECRET>
 */

const express = require('express');
const axios = require('axios');
const app = express();
const port = 8888;

const clientId = process.argv[2];
const clientSecret = process.argv[3];

if (!clientId || !clientSecret) {
  console.log('Usage: node spotify-setup-token.js <CLIENT_ID> <CLIENT_SECRET>');
  process.exit(1);
}

const redirectUri = `http://localhost:${port}/callback`;
const scopes = 'user-read-currently-playing user-read-recently-played';

app.get('/login', (req, res) => {
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirectUri));
});

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;
  
  try {
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
      code: code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }), {
      headers: {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const refreshToken = response.data.refresh_token;
    res.send(`
      <h1>Success!</h1>
      <p>Your Refresh Token is:</p>
      <code style="background: #eee; padding: 10px; display: block;">${refreshToken}</code>
      <p>Copy this token and add it to your environment variables on Render (SPOTIFY_REFRESH_TOKEN).</p>
      <p>You can close this window and stop the script now.</p>
    `);
    
    console.log('\n======================================');
    console.log('SUCCESS! Refresh Token retrieved:');
    console.log(refreshToken);
    console.log('======================================\n');
  } catch (error) {
    console.error('Error getting token:', error.response?.data || error.message);
    res.send('Error getting token. Check console.');
  }
});

app.listen(port, () => {
  console.log(`\n1. Open your browser and go to: http://localhost:${port}/login`);
  console.log('2. Log in and authorize the app.');
  console.log('3. Your Refresh Token will be displayed in the browser and console.\n');
});
