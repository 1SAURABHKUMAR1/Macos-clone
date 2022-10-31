import { useEffect, useState } from 'react';

const useDelayUnmount = (isMounted: boolean, delay: number): boolean => {
    const [showDiv, setShowDiv] = useState<boolean>(true);

    useEffect(() => {
        let timeoutId: any;

        if (isMounted && !showDiv) {
            setShowDiv(true);
        } else if (!isMounted && showDiv) {
            timeoutId = setTimeout(() => setShowDiv(false), delay);
        }

        return () => clearTimeout(timeoutId);
    }, [isMounted, delay, showDiv]);

    return showDiv;
};

export default useDelayUnmount;
