import { useEffect, useRef } from "react";

function useIntervalHooks(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        if (delay !== null) {
            const tick = () => {
                savedCallback.current();
            };

            const intervalId = setInterval(tick, delay);
            return () => clearInterval(intervalId);
        }
    }, [delay]);
}

export { useIntervalHooks };