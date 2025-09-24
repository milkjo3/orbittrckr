/*
 * fetchNeos: Calls NASA NEO API.
 * @param {number} page - Zero-based page number
 * @param {number} size - Number of NEOs per page (max 50)
 * @returns {Promise<Array>} Array of NEO objects
 * @throws Error if network request fails
*/
export const fetchNeos = async (page = 0, size =20) => {
    const API_KEY = import.meta.env.VITE_NASA_SECRET;
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=${size}&api_key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok){
        throw new Error('Failed to fetch NEOs.');
    }
    const data = await response.json();
    
    return data.near_earth_objects;
};