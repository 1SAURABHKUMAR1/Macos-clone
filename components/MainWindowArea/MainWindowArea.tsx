import type { NextPage } from 'next';
import { AppWindow } from '@components/index';
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
    const focusApp = () => {
        //FIXME: put focused app with appId
    };

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
            <WindowArea>
                {/* TODO: open apps based on state using Object.keys */}
                <AppContainer
                    style={{
                        //   TODO: width and height changes based on height and based on appConfig with minWidth and minHeight */}
                        width: '37.5rem',
                        height: '31.25rem',
                        //    TODO: background color based on appConfig
                        backgroundColor: '#fff',
                        // zIndex: TODO:
                    }}
                    onClick={focusApp}
                    // closeAnimation scale to 0 TODO:
                    // minmize App move down TODO:
                >
                    <AppHeader>
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
            </WindowArea>
        </>
    );
};

export default MainWindowArea;
