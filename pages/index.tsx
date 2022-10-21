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

const Main = styled.div`
    height: 100%;
    width: 100%;
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Home: NextPage = () => {
    return (
        <Main>
            <Head>
                <title>Home</title>
                <meta name="description" content="Macos clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <Container>
                    <TopBarArea />
                    <MainWindowArea />
                    <DockArea />
                </Container>

                <Wallpaper />
                <BootupScreen />
            </Main>
        </Main>
    );
};

export default Home;
