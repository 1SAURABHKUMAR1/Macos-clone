import type { NextPage } from 'next';
import { MouseEvent, useState } from 'react';
import React, { useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SingleWindow } from '@components/index';
import {
    RightClickContextMenuContainer,
    WindowArea,
    RightClickMenuItem,
    RightClickMenuDivider,
} from './styled';
import { contextMenuConfigItems } from 'helper/context-menu.config';
import { appConfig } from 'helper/app.config';
import { useAppStore } from '@store/index';
import { apps as AppType } from 'types/index';

const MainWindowArea: NextPage = () => {
    const windowRef = useRef<HTMLDivElement>(null);
    const [rightClickPosition, setRightClickPosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const {
        apps,
        activeApp,
        activeAppZIndex,
        changeActiveAppZIndex,
        changeZIndex,
    } = useAppStore((state) => state);

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

    useEffect(() => {
        const sanitizeZIndex = async () => {
            if (
                !Object.values(apps)
                    .filter((apps) => apps.zIndex > 0)
                    .some((apps) => apps.zIndex >= 40)
            )
                return;

            const lowest = Math.min(
                ...Object.values(apps)
                    .map((apps) => apps.zIndex)
                    .filter((zindex) => zindex > 0)
                    .filter((item, pos, self) => self.indexOf(item) == pos),
            );

            changeActiveAppZIndex(activeAppZIndex - lowest);

            Object.entries(apps).forEach(([key, value]) => {
                value.zIndex > lowest &&
                    changeZIndex(key as AppType, value.zIndex - lowest);
            });
        };

        sanitizeZIndex();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apps]);

    useEffect(() => {
        changeActiveAppZIndex(activeAppZIndex + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeApp]);

    return (
        <>
            <WindowArea
                ref={windowRef}
                onClick={hideContextMenu}
                onContextMenu={handleRightClick}
            >
                <AnimatePresence>
                    {Object.entries(apps)
                        .filter(([, value]) => value.open)
                        .map(([key, value]) => (
                            <SingleWindow
                                ref={windowRef}
                                fullScreen={value.fullScreen}
                                zIndex={value.zIndex}
                                appKey={key as AppType}
                                minimized={value.minimized}
                                width={appConfig[key as AppType].width}
                                backgroundColor={
                                    appConfig[key as AppType].backgroundColor
                                }
                                height={appConfig[key as AppType].height}
                                title={appConfig[key as AppType].title}
                                key={key}
                            />
                        ))}
                    {/* TODO: differnet app for launch */}
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
