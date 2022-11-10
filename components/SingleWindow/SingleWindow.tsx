import type { NextPage } from 'next';
import { RefObject, useEffect } from 'react';
import { useRef, useState, forwardRef } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { AppWindow } from '@components/index';
import { useAnimationControls } from 'framer-motion';
import {
    AppContainer,
    AppHeader,
    MainAppArea,
    AppName,
    AppControlContainer,
    ControlButton,
    Container,
} from './styled';
import { IoClose } from 'react-icons/io5';
import { HiMinus } from 'react-icons/hi';
import { GrFormAdd } from 'react-icons/gr';
import { useAppStore } from '@store/index';
import { appControlsCss, apps } from 'types/index';

const SingleWindow: NextPage<
    { fullScreen: boolean; zIndex: number; appKey: apps },
    RefObject<HTMLDivElement>
> = ({ appKey }, windowRef) => {
    const containerMinimize = useAnimationControls();
    const {
        apps,
        closeApp,
        toggleFullScreenApp,
        activeApp,
        toggleActiveApp,
        changeZIndex,
        activeAppZIndex,
    } = useAppStore((state) => state);
    const [windowTransform, setWindowTransform] = useState<string>(
        () =>
            containerRef?.current?.resizable?.style?.transform ??
            'translate(0px, 0px)',
    );
    const containerRef = useRef<Resizable>(null);

    const focusApp = () => toggleActiveApp(appKey);

    const closeAppWindow = () => closeApp(appKey);

    const minimizeApp = () => {
        //TODO:
        containerMinimize.start({
            transform: 'translateY(100vh)',
            width: '0px',
        });
    };

    const maximizeApp = () => {
        const isMaximized = !apps[appKey].fullScreen;

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
                // TODO:
                containerRef.current.resizable.style.width = `${37.5 * 16}px`;
                containerRef.current.resizable.style.height = `${31.25 * 16}px`;
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
                disabled={apps[appKey].fullScreen}
                defaultPosition={{
                    y:
                        ((windowRef.current?.clientHeight ?? 599) - 37.5 * 16) /
                        //TODO: according to app height
                        2,
                    x:
                        ((windowRef.current?.clientWidth ?? 1000) -
                            37.15 * 16) /
                        //TODO: according to app width
                        2,
                }}
                bounds={{
                    left: 0,
                    right: windowRef.current?.clientWidth,
                    top: windowRef.current?.clientTop,
                    bottom: windowRef.current?.clientHeight,
                }}
                handle=".app-handle"
                defaultClassName="absolute"
            >
                <Resizable
                    bounds="window"
                    //   TODO: width and height changes based on height and based on appConfig with minWidth and minHeight
                    defaultSize={{
                        width: `${37.5 * 16}px`,
                        height: `${31.25 * 16}px`,
                    }}
                    minWidth="500"
                    minHeight="250"
                    ref={containerRef}
                    style={{ zIndex: apps[appKey].zIndex }}
                >
                    <Container
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.6, ease: 'anticipate' }}
                        onClick={focusApp}
                    >
                        <AppContainer
                            //     //    TODO: background color based on appConfig
                            style={
                                activeApp === appKey
                                    ? {
                                          backgroundColor: '#fff',
                                          boxShadow: 'var(--shadow-app)',
                                      }
                                    : {
                                          backgroundColor: '#fff',
                                      }
                            }
                            animate={containerMinimize}
                            transition={{ duration: 0.6, ease: 'anticipate' }}
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

                                <AppName>
                                    System Prefernc
                                    {/* FIXME: via app config */}
                                </AppName>
                            </AppHeader>

                            <MainAppArea>
                                <AppWindow />
                                {/* FIXME: via appNexus */}
                            </MainAppArea>
                        </AppContainer>
                    </Container>
                </Resizable>
            </Draggable>
        </>
    );
};

// @ts-ignore
export default forwardRef(SingleWindow);
