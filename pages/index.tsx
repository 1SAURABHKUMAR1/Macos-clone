import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import {
    BootupScreen,
    DockArea,
    TopBarArea,
    Wallpaper,
    MainWindowArea,
} from '@components/index';
import { AnimatePresence } from 'framer-motion';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useSystemStore } from '@store/index';

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

const Home: NextPage = () => {
    const [isBootupLoading, setIsBootupLoading] = useState<boolean>(true);
    const fullScreenHandle = useFullScreenHandle();
    const { brightness } = useSystemStore((state) => state);

    // const toggleFullScreen = () => {
    //     if (fullScreenHandle.active) {
    //         fullScreenHandle.exit();
    //         return;
    //     }
    //     fullScreenHandle.enter();
    // }; //FIXME:

    return (
        <>
            <Head>
                <title>Mac-OS</title>
                <meta name="description" content="Macos clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container style={{ filter: `brightness(${brightness}%)` }}>
                {!isBootupLoading && (
                    <FullScreen handle={fullScreenHandle}>
                        <Main>
                            <TopBarArea />

                            <MainWindowArea />

                            <DockArea />
                        </Main>

                        <Wallpaper />
                    </FullScreen>
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
