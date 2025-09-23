/*
 * fetchNeoInfo: Fetches detailed information about a specific Near-Earth Object (NEO) from NASA's NEO Feed API.
 * @param {number|string} asteroid_id - The unique NASA NEO ID of the asteroid.
 * @returns {Promise<Object>} A promise that resolves to a NEO object containing detailed asteroid information.
 * @throws {Error} Throws an error if the network request fails or the response is not OK.
*/
export const fetchNeoInfo = async (asteroid_id) => {
    const API_KEY = import.meta.env.VITE_NASA_SECRET;
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroid_id}?api_key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok){
        throw new Error('Failed to fetch NEO information.');
    }
    const data = await response.json();

    return data
};