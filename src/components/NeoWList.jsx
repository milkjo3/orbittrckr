import React from "react";
import useNeoW from "../hooks/useNeoW";



const NeoWList = () => {
    const {neos, loading, error} = useNeoW();

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

export default NeoWList;