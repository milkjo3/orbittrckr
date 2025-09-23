import React from "react";
import useNeoFeed from "../hooks/useNeoFeed";

/*
 * React component to call useNeoW hook and display NEO objects.
 * Handles loading and error messages.
 * @returns {div} {List of NEOs and respective information}
*/
const NeoFeedList = () => {
    const {neos, loading, error} = useNeoFeed();

    if (!neos?.length) return <p>No NEOs found.</p>;
    if (loading) return <p>Loading NEOS...</p>
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Near-Earth Objects</h2>
            <ul>
                {neos.map(neo => (
                    <li key={neo.id}>
                        {neo.name} = {neo.is_potentially_hazardous_asteroid ? 'Hazardous' : 'Safe'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NeoFeedList;