import { useEffect } from "react";

function useRotatingTitle(title, speed = 200) {
    useEffect(() => {
    let i = 0;
    let interval;

    function start() {
        interval = setInterval(() => {
        document.title = title.slice(i) + " | " + title.slice(0, i);
        i = (i + 1) % title.length;
        }, speed);
    }

    function stop() {
        clearInterval(interval);
        document.title = title; 
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) start();
        else stop();
    });

    return () => stop();
    }, [title, speed]);
}

export default useRotatingTitle;