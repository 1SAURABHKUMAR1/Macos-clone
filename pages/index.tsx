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
import { useState } from 'react';

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

    return (
        <>
            <Head>
                <title>Macos</title>
                <meta name="description" content="Macos clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                {isBootupOver ? (
                    <>
                        <Main>
                            <TopBarArea />
                            <MainWindowArea />
                            <DockArea />
                        </Main>
                        <Wallpaper />
                    </>
                ) : (
                    <BootupScreen setIsBootupOver={setIsBootupOver} />
                    //  TODO: fade out while going
                )}
            </Container>
        </>
    );
};

export default Home;
