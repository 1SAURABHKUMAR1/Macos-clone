import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    BootupScreen,
    DockArea,
    TopBarArea,
    Wallpaper,
    MainWindowArea,
} from '@components/index';
import { AnimatePresence } from 'framer-motion';
import { useSystemStore } from '@store/index';
import { systemPrimaryCss } from 'types';
import { colorsConfig } from 'helper/action-colors.config';
import screenfull from 'screenfull';

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const GroupContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Home: NextPage = () => {
    const [isBootupLoading, setIsBootupLoading] = useState<boolean>(true);
    const { brightness, systemColor, fullScreen } = useSystemStore(
        (state) => state,
    );

    useEffect(() => {
        if (screenfull.isEnabled) {
            if (fullScreen && !screenfull.isFullscreen) {
                screenfull.request();
                return;
            }

            screenfull.exit();
        }
    }, [fullScreen]);

    return (
        <>
            <Head>
                <title>Mac-OS</title>
                <meta name="description" content="Macos clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container
                style={
                    {
                        filter: `brightness(${brightness}%)`,
                        '--system-color-primary': `hsl(${colorsConfig[systemColor]?.hsl})`,
                    } as systemPrimaryCss
                }
            >
                {!isBootupLoading && (
                    <>
                        <Main>
                            <TopBarArea />

                            <GroupContainer className="windows">
                                <MainWindowArea />
                                <DockArea />
                            </GroupContainer>
                        </Main>

                        <Wallpaper />
                    </>
                )}

                <AnimatePresence>
                    {isBootupLoading && (
                        <BootupScreen setIsBootupLoading={setIsBootupLoading} />
                    )}
                </AnimatePresence>
            </Container>
        </>
    );
};

export default Home;
