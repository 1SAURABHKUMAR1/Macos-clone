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
import { useAppStore } from '@store/index';

const MainWindowArea: NextPage = () => {
    const windowRef = useRef<HTMLDivElement>(null);
    const [rightClickPosition, setRightClickPosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const { apps } = useAppStore((state) => state);

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
                    {Object.entries(apps).map(([key, value]) => (
                        <React.Fragment key={key}>
                            {/* TODO: differnet app for launch */}
                            {/* TODO: pass value as props */}
                            {value.open && <SingleWindow ref={windowRef} />}
                        </React.Fragment>
                    ))}
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
                                        {/* FIXME: onCLick make new folder file and open apps*/}
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
