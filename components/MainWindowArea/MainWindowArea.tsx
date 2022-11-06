import type { NextPage } from 'next';
import { MouseEvent, useState } from 'react';
import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SingleWindow } from '@components/index';
import {
    RightClickContextMenuContainer,
    WindowArea,
    RightClickMenuItem,
    RightClickMenuDivider,
} from './styled';
import { contextMenuConfigItems } from 'helper/context-menu.config';

const MainWindowArea: NextPage = () => {
    const windowRef = useRef<HTMLDivElement>(null);
    const [rightClickPosition, setRightClickPosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (!windowRef.current?.contains(event.target as HTMLElement))
            return setIsMenuActive(() => false);

        windowRef.current?.clientHeight - event.pageY < 250 &&
        windowRef.current?.clientWidth - event.pageX < 300
            ? setRightClickPosition(() => ({
                  x: event.pageX - 250,
                  y: event.pageY - 250,
              }))
            : setRightClickPosition(() => ({
                  x: event.pageX,
                  y: event.pageY,
              }));

        setIsMenuActive(() => true);
    };

    const hideContextMenu = () => setIsMenuActive(() => false);

    return (
        <>
            <WindowArea
                ref={windowRef}
                onClick={hideContextMenu}
                onContextMenu={handleRightClick}
            >
                <AnimatePresence>
                    {/* TODO: open apps based on state using Object.keys */}
                    <SingleWindow ref={windowRef} />
                </AnimatePresence>
            </WindowArea>

            {/* Right click context menu */}
            <AnimatePresence>
                {isMenuActive && (
                    <RightClickContextMenuContainer
                        style={{
                            transform: `translate(${rightClickPosition.x}px, ${rightClickPosition.y}px)`,
                        }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'backOut' }}
                    >
                        {Object.entries(contextMenuConfigItems).map(
                            ([key, value]) => (
                                <React.Fragment key={key}>
                                    <RightClickMenuItem>
                                        {/* FIXME: */}
                                        {value.title}
                                    </RightClickMenuItem>

                                    {value.breakAfter && (
                                        <RightClickMenuDivider />
                                    )}
                                </React.Fragment>
                            ),
                        )}
                    </RightClickContextMenuContainer>
                )}
            </AnimatePresence>
        </>
    );
};

export default MainWindowArea;
