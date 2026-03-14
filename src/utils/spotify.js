/**
 * Spotify API Utility
 * This utility fetches data from the custom Node.js backend.
 */

// Replace this with your hosted backend URL on Render
const BACKEND_URL = 'http://localhost:3001'; 

export const getNowPlaying = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/now-playing`);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return { isPlaying: false, error: true, message: errorData.error || 'Backend error' };
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching now playing:', error);
        return { isPlaying: false, error: true, message: 'Connection failed' };
    }
};

export const getRecentlyPlayed = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/recently-played`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching recently played:', error);
        return [];
    }
};
