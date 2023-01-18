import type { NextPage } from 'next';
import { MdPostAdd } from 'react-icons/md';
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
import useExcel from '@hooks/useExcel';

const Excel: NextPage = () => {
    const { resetRowColumnIndex } = useExcelStore((state) => state);
    const { changeChildrenValue, computeFormula, removeChildrenParent } =
        useExcel();

    useEffect(() => {
        return () => {
            resetRowColumnIndex();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

                <Formula computeFormula={computeFormula} />

                <CellContainer
                    changeChildrenValue={changeChildrenValue}
                    removeChildrenAndParent={removeChildrenParent}
                />

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
