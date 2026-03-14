/**
 * Spotify API Utility
 * This utility handles fetching recently played tracks.
 * Note: To go live, the user needs to provide a Refresh Token.
 */

// Placeholder for user credentials
const CLIENT_ID = 'd41fcf655daf426f98f211839ede9c32';
const REFRESH_TOKEN = ''; // User needs to provide this

export const getRecentlyPlayed = async () => {
  // If no refresh token, return mock data to keep the site looking premium
  if (!REFRESH_TOKEN) {
    return [
      {
        id: '1',
        title: 'Starboy',
        artist: 'The Weeknd',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2734718e2d7e3ba058498616175',
        url: 'https://open.spotify.com/track/7MXVkk9YM3Z0uS4vSvmS3z'
      },
      {
        id: '2',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273c51ed57826cf544d67373f15',
        url: 'https://open.spotify.com/track/0VjIj6pS6o95S9S06u9Y8k'
      },
      {
        id: '3',
        title: 'Save Your Tears',
        artist: 'The Weeknd, Ariana Grande',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b27382b6831d1b820a2336214A3',
        url: 'https://open.spotify.com/track/37799049448374'
      },
      {
        id: '4',
        title: 'Double Fantasy',
        artist: 'The Weeknd, Future',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2739343e49e0f31498C08A375',
        url: 'https://open.spotify.com/track/4MXYkS0v16U8939'
      },
      {
        id: '5',
        title: 'Creepin\'',
        artist: 'Metro Boomin, The Weeknd, 21 Savage',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b27318e2a393939393',
        url: 'https://open.spotify.com/track/2S7T1D'
      }
    ];
  }

  // Real implementation would go here once REFRESH_TOKEN is provided
  return [];
};

export const getNowPlaying = async () => {
  // Mocking "Now Playing" for the premium experience
  if (!REFRESH_TOKEN) {
    return {
      isPlaying: true,
      title: 'Starboy',
      artist: 'The Weeknd',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2734718e2d7e3ba058498616175',
      url: 'https://open.spotify.com/track/7MXVkk9YM3Z0uS4vSvmS3z'
    };
  }

  // Real implementation would go here
  return null;
};
