import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import {
    BootupScreen,
    DockArea,
    TopBarArea,
    Wallpaper,
    MainWindowArea,
} from '@components/index';

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
    return (
        <>
            <Head>
                <title>Macos</title>
                <meta name="description" content="Macos clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <Main>
                    <TopBarArea />
                    <MainWindowArea />
                    <DockArea />
                </Main>

                <Wallpaper />
                <BootupScreen />
            </Container>
        </>
    );
};

export default Home;
