import type { NextPage } from 'next';
import type { RefObject } from 'react';
import { Variants } from 'framer-motion';
import { useRef, useState, forwardRef, useEffect } from 'react';
import { SwitchApps } from '@components/index';
import {
    AppContainer,
    AppHeader,
    MainAppArea,
    AppControlContainer,
    ControlButton,
} from './styled';
import { IoClose } from 'react-icons/io5';
import { HiMinus } from 'react-icons/hi';
import { GrFormAdd } from 'react-icons/gr';
import { useAppStore } from '@store/index';
import { appControlsCss, singleWindowProps } from 'types/index';
import { Rnd } from 'react-rnd';

const SingleWindow: NextPage<singleWindowProps, RefObject<HTMLDivElement>> = (
    { appKey, fullScreen, zIndex, minimized, backgroundColor, height, width },
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
            containerRef?.current?.resizable?.resizable?.style?.transform ??
            'translate(0px, 0px)',
    );
    const containerRef = useRef<Rnd>(null);

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

        if (containerRef?.current?.resizable?.resizable) {
            containerRef.current.resizable.resizable.style.transition =
                'height 0.3s ease, width 0.3s ease, transform 0.3s ease';

            if (isMaximized) {
                setWindowTransform(
                    containerRef.current.resizable.resizable.style.transform,
                );

                containerRef.current.resizable.resizable.style.transform =
                    'translate(0px, 0px)';
                containerRef.current.resizable.resizable.style.width = '100%';
                containerRef.current.resizable.resizable.style.height = '100%';
            } else {
                containerRef.current.resizable.resizable.style.transform =
                    windowTransform;
                containerRef.current.resizable.resizable.style.width = `${
                    width * 16
                }px`;
                containerRef.current.resizable.resizable.style.height = `${
                    height * 16
                }px`;
            }

            setTimeout(() => {
                containerRef.current?.resizable?.resizable &&
                    (containerRef.current.resizable.resizable.style.transition =
                        '');
            }, 400);
        }

        toggleFullScreenApp(appKey);
    };

    useEffect(() => {
        activeApp === appKey && changeZIndex(appKey, activeAppZIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeApp]);

    const zIndexMinimize = () => {
        if (containerRef?.current?.resizable?.resizable?.style && minimized) {
            containerRef.current.resizable.resizable.style.zIndex = '-1';
        }
    };

    const zIndexNormal = () => {
        if (containerRef?.current?.resizable?.resizable?.style && !minimized) {
            containerRef.current.resizable.resizable.style.zIndex =
                zIndex.toString();
        }
    };

    return (
        <>
            <Rnd
                default={{
                    y: (windowRef.current?.clientHeight - height * 16) / 2,
                    x: (windowRef.current?.clientWidth - width * 16) / 2,
                    width: width * 16,
                    height: height * 16,
                }}
                style={{ zIndex, cursor: 'inherit', borderRadius: '0.75rem' }}
                minWidth="250"
                minHeight="400"
                dragHandleClassName="app-handle"
                disableDragging={fullScreen}
                onResizeStart={focusApp}
                onDragStart={focusApp}
                bounds=".windows"
                enableResizing={!fullScreen}
                ref={containerRef}
            >
                <AppContainer
                    style={{
                        backgroundColor,
                        boxShadow:
                            activeApp === appKey
                                ? 'var(--shadow-app)'
                                : 'unset',
                    }}
                    initial="inital"
                    animate={minimized ? 'minimize' : 'normal'}
                    exit="close"
                    onClick={focusApp}
                    variants={itemVariants}
                    onAnimationComplete={zIndexMinimize}
                    onAnimationStart={zIndexNormal}
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
                    </AppHeader>

                    <MainAppArea>
                        <SwitchApps appId={appKey} />
                    </MainAppArea>
                </AppContainer>
            </Rnd>
        </>
    );
};

// @ts-ignore
export default forwardRef(SingleWindow);
