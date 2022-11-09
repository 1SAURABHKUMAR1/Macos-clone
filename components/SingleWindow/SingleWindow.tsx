import type { NextPage } from 'next';
import { RefObject } from 'react';
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
import { apps } from 'types/index';

const SingleWindow: NextPage<
    { fullScreen: boolean; zIndex: number; appKey: apps },
    RefObject<HTMLDivElement>
> = ({ appKey }, windowRef) => {
    const containerMinimize = useAnimationControls();
    const { apps, closeApp, toggleFullScreenApp } = useAppStore(
        (state) => state,
    );
    const [windowTransform, setWindowTransform] = useState<string>(
        () =>
            containerRef?.current?.resizable?.style?.transform ??
            'translate(0px, 0px)',
    );
    const containerRef = useRef<Resizable>(null);

    // const focusApp = (appId : number) => {
    //     //FIXME: activeapp = appId
    // };

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
                // FIXME:
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
                // onStart={() => focusApp()} //FIXME:
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
                >
                    <Container
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.6, ease: 'anticipate' }}
                    >
                        <AppContainer
                            style={{
                                //    TODO: background color based on appConfig
                                backgroundColor: '#fff',
                                // zIndex: TODO:
                            }}
                            // onClick={() => focusApp()} //FIXME:

                            animate={containerMinimize}
                            transition={{ duration: 0.6, ease: 'anticipate' }}
                        >
                            <AppHeader className="app-handle">
                                <AppControlContainer>
                                    <ControlButton
                                        buttonType="close"
                                        onClick={closeAppWindow}
                                    >
                                        <IoClose />
                                    </ControlButton>

                                    <ControlButton
                                        buttonType="minmize"
                                        onClick={minimizeApp}
                                    >
                                        <HiMinus />
                                    </ControlButton>

                                    <ControlButton
                                        buttonType="maximize"
                                        onClick={maximizeApp}
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
