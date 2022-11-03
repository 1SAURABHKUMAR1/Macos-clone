import type { NextPage } from 'next';
import { AppWindow } from '@components/index';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import {
    WindowArea,
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

const MainWindowArea: NextPage = () => {
    const windowRef = useRef<HTMLDivElement>(null);

    // const focusApp = (appId : number) => {
    //     //FIXME: put focused app with appId
    // };

    const closeApp = () => {
        //
    };

    const minimizeApp = () => {
        //
    };

    const maximizeApp = () => {
        //
    };

    return (
        <>
            <WindowArea ref={windowRef}>
                {/* TODO: open apps based on state using Object.keys */}
                <Draggable
                    defaultPosition={{
                        x:
                            ((windowRef.current?.clientWidth ?? 1000) -
                                37.15 * 12) /
                            //TODO: according to app width
                            2,
                        y:
                            ((windowRef.current?.clientHeight ?? 599) -
                                37.5 * 12) /
                            //TODO: according to app height
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
                >
                    <AppContainer
                        style={{
                            //   TODO: width and height changes based on height and based on appConfig with minWidth and minHeight */}
                            width: '37.5rem',
                            height: '31.25rem',
                            //    TODO: background color based on appConfig
                            backgroundColor: '#fff',
                            // zIndex: TODO:
                        }}

                        // onClick={() => focusApp()} //FIXME:

                        // closeAnimation scale to 0 TODO:
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
                </Draggable>
            </WindowArea>
        </>
    );
};

export default MainWindowArea;
