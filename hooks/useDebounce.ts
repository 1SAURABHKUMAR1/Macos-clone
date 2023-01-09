import { useState, useEffect } from 'react';

const useDebounce = <T extends unknown>(value: T, delay: number): T => {
    const [debouncedValue, setSetDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSetDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
