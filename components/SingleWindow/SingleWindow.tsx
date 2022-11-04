import type { NextPage } from 'next';
import type { RefObject } from 'react';
import { forwardRef } from 'react';
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
} from './styled';
import { IoClose } from 'react-icons/io5';
import { HiMinus } from 'react-icons/hi';
import { GrFormAdd } from 'react-icons/gr';

const SingleWindow: NextPage<{}, RefObject<HTMLDivElement>> = (
    _props,
    windowRef,
) => {
    const containerMinimize = useAnimationControls();

    // const focusApp = (appId : number) => {
    //     //FIXME: put focused app with appId
    // };

    const closeApp = () => {
        //TODO:
    };

    const minimizeApp = () => {
        //TODO:
        containerMinimize.start({
            transform: 'translateY(100vh)',
            width: '0px',
        });
    };

    const maximizeApp = () => {
        //
    };

    return (
        <>
            <Draggable
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
                >
                    <AppContainer
                        style={{
                            //    TODO: background color based on appConfig
                            backgroundColor: '#fff',
                            // zIndex: TODO:
                        }}
                        // onClick={() => focusApp()} //FIXME:

                        animate={containerMinimize}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.6, ease: 'anticipate' }}

                        // minmize App move down TODO:
                    >
                        <AppHeader className="app-handle">
                            <AppControlContainer>
                                <ControlButton
                                    buttonType="close"
                                    onClick={closeApp}
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
                                {/* FIXME: */}
                            </AppName>
                        </AppHeader>

                        <MainAppArea>
                            <AppWindow />
                        </MainAppArea>
                    </AppContainer>
                </Resizable>
            </Draggable>
        </>
    );
};

// @ts-ignore
export default forwardRef(SingleWindow);
