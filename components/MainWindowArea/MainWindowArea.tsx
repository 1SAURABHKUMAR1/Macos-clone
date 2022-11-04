import type { NextPage } from 'next';
import { SingleWindow } from '@components/index';
import { useRef } from 'react';
import { WindowArea } from './styled';
import { AnimatePresence } from 'framer-motion';

const MainWindowArea: NextPage = () => {
    const windowRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <WindowArea ref={windowRef}>
                {/* TODO: open apps based on state using Object.keys */}

                <AnimatePresence>
                    <SingleWindow ref={windowRef} />
                </AnimatePresence>
            </WindowArea>
        </>
    );
};

export default MainWindowArea;
