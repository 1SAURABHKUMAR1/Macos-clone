import type { NextPage } from 'next';
import { MdPostAdd } from 'react-icons/md';
import {} from 'helper/excel.config';
import { CellContainer, Formula, Toolbar } from '@components/index';
import {
    MainContainer,
    NavigationBar,
    NavigationBarItem,
    SheetContainer,
    SheetIcon,
    SheetList,
} from './styled';
import { useEffect } from 'react';
import useExcelStore from '@store/excel.store';

const Excel: NextPage = () => {
    const { resetCellData } = useExcelStore((state) => state);

    useEffect(() => {
        return () => {
            resetCellData();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // FIXME:

    return (
        <>
            <MainContainer>
                <NavigationBar>
                    <NavigationBarItem>Home</NavigationBarItem>
                    <NavigationBarItem>File</NavigationBarItem>
                    <NavigationBarItem>Insert</NavigationBarItem>
                    <NavigationBarItem>Layout</NavigationBarItem>
                    <NavigationBarItem>Help</NavigationBarItem>
                </NavigationBar>

                <Toolbar />

                <Formula />

                <CellContainer />

                <SheetContainer>
                    <SheetIcon>
                        <MdPostAdd />
                    </SheetIcon>
                    <SheetList active>Sheet 1</SheetList>
                </SheetContainer>
            </MainContainer>
        </>
    );
};

export default Excel;
