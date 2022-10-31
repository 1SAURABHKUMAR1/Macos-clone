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
import { useDelayUnmount } from '@hooks/index';

const Container = styled.div`
    height: 100%;
    width: 100%;
    /* filter: brightness(40%); */
    /* FIXME: */
`;

const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Home: NextPage = () => {
    const [isBootupOver, setIsBootupOver] = useState<boolean>(false);
    const showBootupContainer = useDelayUnmount(!isBootupOver, 700);

    return (
        <>
            <Head>
                <title>Mac-OS</title>
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

                {showBootupContainer && (
                    <BootupScreen
                        isBootupOver={isBootupOver}
                        setIsBootupOver={setIsBootupOver}
                    />
                )}
            </Container>
        </>
    );
};

export default Home;
