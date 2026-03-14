import React, { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa6';
import { FiExternalLink, FiClock, FiMusic } from 'react-icons/fi';
import { getNowPlaying, getRecentlyPlayed } from '../utils/spotify';

const MOCK_RECENTS = [
    {
        title: 'Starboy',
        artist: 'The Weeknd',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2734718e2d7e3ba058498616175',
        songUrl: 'https://open.spotify.com/track/7MXVkk9YM3Z0uS4vSvmS3z'
    },
    {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273c51ed57826cf544d67373f15',
        songUrl: 'https://open.spotify.com/track/0VjIj6pS6o95S9S06u9Y8k'
    },
    {
        title: 'Creepin\'',
        artist: 'Metro Boomin, The Weeknd, 21 Savage',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2731d1b820a2336214A3',
        songUrl: 'https://open.spotify.com/track/2S7T1D'
    }
];

const SpotifyActivity = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isConfigured, setIsConfigured] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const now = await getNowPlaying();
                
                // If backend returns credentials error or fails, we use mock
                if (now && !now.error && now.message !== 'Missing credentials') {
                    setNowPlaying(now);
                    setIsConfigured(true);
                    
                    if (!now.isPlaying) {
                        const recent = await getRecentlyPlayed();
                        if (recent && recent.length > 0) {
                            setRecentlyPlayed(recent);
                        } else {
                            // Fallback to mock if configured but empty
                            setRecentlyPlayed(MOCK_RECENTS);
                        }
                    }
                } else {
                    // Not configured yet, show mock data
                    setNowPlaying({ isPlaying: false });
                    setRecentlyPlayed(MOCK_RECENTS);
                    setIsConfigured(false);
                }
            } catch (error) {
                console.error('Error fetching Spotify data:', error);
                setRecentlyPlayed(MOCK_RECENTS);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div style={{
                padding: '1.5rem',
                border: '1px dashed var(--navbar-border)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                opacity: 0.6
            }}>
                <div className="spotify-icon-spin" style={{ color: '#1DB954' }}>
                    <FaSpotify size={24} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <div style={{ height: '1rem', width: '60%', backgroundColor: 'var(--hover-alpha)', borderRadius: '4px' }}></div>
                    <div style={{ height: '0.8rem', width: '40%', backgroundColor: 'var(--hover-alpha)', borderRadius: '4px' }}></div>
                </div>
            </div>
        );
    }

    const currentTrack = nowPlaying?.isPlaying ? nowPlaying : null;

    return (
        <div style={{
            padding: '1.5rem',
            border: '1px dashed var(--navbar-border)',
            borderRadius: '16px',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        }} className="spotify-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FaSpotify size={20} style={{ color: '#1DB954' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>
                        {currentTrack ? 'Currently Playing' : 'Recently Played'}
                    </h3>
                </div>
                {currentTrack && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#1DB954',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        <span className="playing-bars">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        Live
                    </div>
                )}
                {!currentTrack && !isConfigured && (
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', opacity: 0.5 }}>Preview Mode</span>
                )}
            </div>

            {currentTrack ? (
                <a 
                    href={currentTrack.songUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        textDecoration: 'none',
                        color: 'inherit'
                    }}
                >
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                    }}>
                        <img 
                            src={currentTrack.albumArt} 
                            alt={currentTrack.album} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ 
                            fontSize: '1.1rem', 
                            fontWeight: '700', 
                            margin: '0 0 0.25rem 0',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {currentTrack.title}
                        </h4>
                        <p style={{ 
                            fontSize: '0.95rem', 
                            color: 'var(--text-secondary)', 
                            margin: 0,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {currentTrack.artist}
                        </p>
                    </div>
                </a>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {recentlyPlayed.slice(0, 3).map((track, idx) => (
                        <a 
                            key={idx}
                            href={track.songUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                padding: '0.5rem',
                                borderRadius: '12px',
                                transition: 'background-color 0.2s ease'
                            }}
                            className="recent-track-row"
                        >
                            <img 
                                src={track.albumArt} 
                                alt={track.title} 
                                style={{ width: '48px', height: '48px', borderRadius: '8px', flexShrink: 0 }} 
                            />
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <h4 style={{ 
                                    fontSize: '0.95rem', 
                                    fontWeight: '600', 
                                    margin: '0 0 0.15rem 0',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {track.title}
                                </h4>
                                <p style={{ 
                                    fontSize: '0.85rem', 
                                    color: 'var(--text-secondary)', 
                                    margin: 0,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {track.artist}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            )}

            <style>{`
                .spotify-card:hover {
                    border-color: #1DB954;
                    background-color: rgba(29, 185, 84, 0.02);
                }
                .recent-track-row:hover {
                    background-color: var(--hover-alpha);
                }
                .playing-bars {
                    display: flex;
                    align-items: flex-end;
                    gap: 2px;
                    height: 12px;
                }
                .playing-bars span {
                    width: 3px;
                    background-color: #1DB954;
                    border-radius: 1px;
                    animation: bounce 1s ease-in-out infinite;
                }
                .playing-bars span:nth-child(2) { animation-delay: 0.2s; }
                .playing-bars span:nth-child(3) { animation-delay: 0.4s; }
                
                @keyframes bounce {
                    0%, 100% { height: 4px; }
                    50% { height: 12px; }
                }
                
                .spotify-icon-spin {
                    animation: spin 4s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default SpotifyActivity;
