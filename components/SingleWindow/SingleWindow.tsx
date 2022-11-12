import type { NextPage } from 'next';
import { RefObject, useEffect } from 'react';
import type { Variants } from 'framer-motion';
import { useRef, useState, forwardRef } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { SwitchApps } from '@components/index';
import {
    AppContainer,
    AppHeader,
    MainAppArea,
    AppName,
    AppControlContainer,
    ControlButton,
} from './styled';
import { IoClose } from 'react-icons/io5';
import { HiMinus } from 'react-icons/hi';
import { GrFormAdd } from 'react-icons/gr';
import { useAppStore } from '@store/index';
import { appControlsCss, singleWindowProps } from 'types/index';

const SingleWindow: NextPage<singleWindowProps, RefObject<HTMLDivElement>> = (
    {
        appKey,
        fullScreen,
        zIndex,
        minimized,
        backgroundColor,
        height,
        title,
        width,
    },
    windowRef,
) => {
    const {
        closeApp,
        toggleFullScreenApp,
        activeApp,
        toggleActiveApp,
        changeZIndex,
        activeAppZIndex,
        toggleMinimizeApp,
    } = useAppStore((state) => state);
    const [windowTransform, setWindowTransform] = useState<string>(
        () =>
            containerRef?.current?.resizable?.style?.transform ??
            'translate(0px, 0px)',
    );
    const containerRef = useRef<Resizable>(null);

    const itemVariants: Variants = {
        inital: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.7, ease: 'anticipate' },
        },
        minimize: {
            y: '100vh',
            opacity: 1,
            scale: 0,
            transition: { duration: 0.8, ease: 'anticipate' },
        },
        normal: {
            y: '0vh',
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'anticipate' },
        },
        close: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.7, ease: 'anticipate' },
        },
    };

    const focusApp = () => toggleActiveApp(appKey);

    const closeAppWindow = () => closeApp(appKey);

    const minimizeApp = () => {
        toggleMinimizeApp(appKey);
        fullScreen && toggleFullScreenApp(appKey);
    };

    const maximizeApp = () => {
        const isMaximized = !fullScreen;

        if (containerRef?.current?.resizable) {
            containerRef.current.resizable.style.transition =
                'height 0.3s ease, width 0.3s ease, transform 0.3s ease';

            if (isMaximized) {
                setWindowTransform(
                    // @ts-ignore
                    () => containerRef.current.resizable.style.transform,
                );

                containerRef.current.resizable.style.transform =
                    'translate(0px, 0px)';
                containerRef.current.resizable.style.width = '100%';
                containerRef.current.resizable.style.height = '100%';
            } else {
                containerRef.current.resizable.style.transform =
                    windowTransform;
                containerRef.current.resizable.style.width = `${width * 16}px`;
                containerRef.current.resizable.style.height = `${
                    height * 16
                }px`;
            }

            setTimeout(() => {
                containerRef.current?.resizable &&
                    (containerRef.current.resizable.style.transition = '');
            }, 400);
        }

        toggleFullScreenApp(appKey);
    };

    useEffect(() => {
        activeApp === appKey && changeZIndex(appKey, activeAppZIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeApp]);

    return (
        <>
            <Draggable
                disabled={fullScreen}
                defaultPosition={{
                    y: (windowRef.current?.clientHeight - height * 16) / 2,
                    x: (windowRef.current?.clientWidth - width * 16) / 2,
                }}
                bounds={{
                    left: 0,
                    right: windowRef.current?.clientWidth,
                    top: windowRef.current?.clientTop,
                    bottom: windowRef.current?.clientHeight,
                }}
                onStart={focusApp}
                handle=".app-handle"
                defaultClassName="absolute"
            >
                <Resizable
                    bounds="window"
                    defaultSize={{
                        width: `${width * 16}px`,
                        height: `${height * 16}px`,
                    }}
                    minWidth="500"
                    minHeight="250"
                    ref={containerRef}
                    onResizeStart={focusApp}
                    style={{ zIndex }}
                >
                    <AppContainer
                        style={
                            activeApp === appKey
                                ? {
                                      backgroundColor,
                                      boxShadow: 'var(--shadow-app)',
                                  }
                                : {
                                      backgroundColor,
                                  }
                        }
                        initial="inital"
                        animate={minimized ? 'minimize' : 'normal'}
                        exit="close"
                        onClick={focusApp}
                        variants={itemVariants}
                    >
                        <AppHeader className="app-handle">
                            <AppControlContainer>
                                <ControlButton
                                    buttonType="close"
                                    onClick={closeAppWindow}
                                    style={
                                        {
                                            '--close-bg-color':
                                                activeApp === appKey
                                                    ? '#ff5f56'
                                                    : '#b6b6b7',
                                            '--close-box-shadow':
                                                activeApp === appKey
                                                    ? '#e0443e'
                                                    : '#1b1b1d80',
                                        } as appControlsCss
                                    }
                                >
                                    <IoClose />
                                </ControlButton>

                                <ControlButton
                                    buttonType="minmize"
                                    onClick={minimizeApp}
                                    style={
                                        {
                                            '--minimize-bg-color':
                                                activeApp === appKey
                                                    ? '#ffbd2e'
                                                    : '#b6b6b7',
                                            '--minimize-box-shodow':
                                                activeApp === appKey
                                                    ? '#dea123'
                                                    : '#1b1b1d80',
                                        } as appControlsCss
                                    }
                                >
                                    <HiMinus />
                                </ControlButton>

                                <ControlButton
                                    buttonType="maximize"
                                    onClick={maximizeApp}
                                    style={
                                        {
                                            '--maximize-bg-color':
                                                activeApp === appKey
                                                    ? '#27c93f'
                                                    : '#b6b6b7',
                                            '--maximize-box-shadow':
                                                activeApp === appKey
                                                    ? '#1aab29'
                                                    : '#1b1b1d80',
                                        } as appControlsCss
                                    }
                                >
                                    <GrFormAdd />
                                </ControlButton>
                            </AppControlContainer>

                            <AppName>{title}</AppName>
                        </AppHeader>

                        <MainAppArea>
                            <SwitchApps />
                        </MainAppArea>
                    </AppContainer>
                </Resizable>
            </Draggable>
        </>
    );
};

// @ts-ignore
export default forwardRef(SingleWindow);
