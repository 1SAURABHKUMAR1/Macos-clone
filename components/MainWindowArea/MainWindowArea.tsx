import type { NextPage } from 'next';
import { SingleWindow } from '@components/index';
import { useRef } from 'react';
import { WindowArea } from './styled';

const MainWindowArea: NextPage = () => {
    const windowRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <WindowArea ref={windowRef}>
                {/* TODO: open apps based on state using Object.keys */}

                <SingleWindow ref={windowRef} />
            </WindowArea>
        </>
    );
};

export default MainWindowArea;
