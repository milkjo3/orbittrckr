import { useState, useEffect } from "react";

function Clock () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

    
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="font-mono text-lg text-gray-300 ml-4">
            {time.toLocaleTimeString("en-US", { timeZone: "UTC"})} UTC
        </span>
    );
};

export default Clock;