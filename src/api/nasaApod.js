/*
 * fetchApod: Calls NASA APOD (Astronomy Picture of the Day) API.
 * @param {Object} [options] - Optional query parameters
 * @param {string} [options.date] - Date of the APOD (YYYY-MM-DD)
 * @param {string} [options.start_date] - Start date for a range of APODs
 * @param {string} [options.end_date] - End date for a range of APODs
 * @param {number} [options.count] - Number of random APODs to fetch
 * @param {boolean} [options.thumbs] - Return thumbnails for videos
 * @returns {Promise<Object|Array>} APOD object or array of APOD objects
 * @throws Error if the network request fails
 */
export const fetchApod = async (options = {}) => {
    const API_KEY = import.meta.env.VITE_NASA_SECRET;

    const params = new URLSearchParams({apI_key: API_KEY, ...options});

    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok){
        throw new Error('Failed to fetch APOD.');
    }
    
    const data = await response.json();
    return data;
};