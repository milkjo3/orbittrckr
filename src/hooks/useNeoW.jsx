import { useState, useEffect } from "react";
import { fetchNeos } from "../api/nasaNeoW";

/*
 * Custom hook to fetch NEOs from NASA API.
 * Handles loading, error, and state management internally.
 * @param {number} page - Page number for pagination (default 0)
 * @param {number} size - Number of items per page (default 20)
 * @returns {Object} { neos, loading, error }
*/
const useNeoW = (page = 0, size = 20) => {
    const [neos, setNeos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchNeos(page, size)
            .then(setNeos)
            .catch(setError)
            .finally(() => setLoading(false));

    }, [page, size]);

    return {neos, loading, error};
};

export default useNeoW;