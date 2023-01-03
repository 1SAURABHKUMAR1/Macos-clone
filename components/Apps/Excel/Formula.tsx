import type { NextPage } from 'next';
import type { KeyboardEvent, ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import useExcelStore from '@store/excel.store';
import {
    FormulaAndCellContainer,
    FormulaBarCellAddress,
    FormulaBarIcon,
    FormulaBarInput,
} from './styled';
import { findRowAndCol, columnTotal, rowTotal } from '@helper/excel.config';

const Formula: NextPage = () => {
    const { cellValue, changeCellValue } = useExcelStore((state) => state);
    const [cellAddress, setCellAddress] = useState<string>(() => cellValue);

    const focusCellChangeAddress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && cellAddress !== '') {
            const [columnIndex, rowIndex] = findRowAndCol(cellAddress);

            if (
                rowIndex + 1 > rowTotal ||
                columnIndex + 1 > columnTotal ||
                rowIndex <= -1 ||
                columnIndex < 0
            ) {
                setCellAddress(() => cellValue);
                return;
            }

            changeCellValue(columnIndex, rowIndex);
        }
    };

    const changeFormualaInput = (event: ChangeEvent<HTMLInputElement>) =>
        setCellAddress(event.target.value);

    useEffect(() => {
        cellAddress !== cellValue && setCellAddress(() => cellValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cellValue]);

    return (
        <>
            <FormulaAndCellContainer>
                <FormulaBarCellAddress
                    spellCheck={false}
                    value={cellAddress}
                    onChange={changeFormualaInput}
                    onKeyDown={focusCellChangeAddress}
                />

                <FormulaBarIcon>
                    <Image
                        src="https://img.icons8.com/ios-glyphs/50/000000/formula-fx.png"
                        alt="formula icon"
                        layout="fixed"
                        height="100%"
                        width="100%"
                        unoptimized
                    />
                </FormulaBarIcon>

                <FormulaBarInput spellCheck={false} />
            </FormulaAndCellContainer>
        </>
    );
};

export default Formula;
