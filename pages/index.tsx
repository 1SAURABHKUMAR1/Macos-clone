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
import { useSystemStore, useExcelStore } from '@store/index';
import { cellProperties, systemPrimaryCss } from 'types';
import { colorsConfig } from 'helper/action-colors.config';
import screenfull from 'screenfull';
import localforage from 'localforage';
import { useDebounce } from '@hooks/index';

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

const excelCellData = localforage.createInstance({
    name: 'excel-cell-data',
});

const Home: NextPage = () => {
    const [isBootupLoading, setIsBootupLoading] = useState<boolean>(true);
    const { brightness, systemColor, fullScreen } = useSystemStore(
        (state) => state,
    );
    const { cell_data, updateWholeCellData } = useExcelStore((state) => state);
    const debouncedCellValue = useDebounce<cellProperties[][]>(cell_data, 500);

    useEffect(() => {
        const retrieveCellData = async () => {
            const cellData = await excelCellData.getItem<cellProperties[][]>(
                'excel-cell-data',
            );
            if (cellData) updateWholeCellData(cellData);
        };

        retrieveCellData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (screenfull.isEnabled) {
            if (fullScreen && !screenfull.isFullscreen) {
                screenfull.request();
                return;
            }

            screenfull.exit();
        }
    }, [fullScreen]);

    useEffect(() => {
        const saveCellData = async () => {
            const cellData = debouncedCellValue;
            cellData.forEach((row) =>
                row.forEach((cell) => (cell.current = null)),
            );
            await excelCellData.setItem('excel-cell-data', cellData);
        };

        saveCellData();
    }, [debouncedCellValue]);

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
