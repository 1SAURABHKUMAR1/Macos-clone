import type { NextPage } from 'next';
import type { KeyboardEvent, ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useExcelStore } from '@store/index';
import {
    FormulaAndCellContainer,
    FormulaBarCellAddress,
    FormulaBarIcon,
    FormulaBarInput,
} from './styled';
import { findRowAndCol, columnTotal, rowTotal } from '@helper/excel.config';

const Formula: NextPage = () => {
    const {
        cell_data,
        column_index,
        row_index,
        changeColumnRowIndex,
        updateCellFormula,
    } = useExcelStore((state) => state);

    const [cellAddress, setCellAddress] = useState<string>(
        () => `${String.fromCharCode(65 + column_index)}${row_index + 1}`,
    );

    const focusCellChangeAddress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && cellAddress !== '') {
            const [columnIndex, rowIndex] = findRowAndCol(cellAddress);

            if (
                rowIndex + 1 > rowTotal ||
                columnIndex + 1 > columnTotal ||
                rowIndex < 0 ||
                columnIndex < 0
            ) {
                setCellAddress(
                    () =>
                        `${String.fromCharCode(65 + column_index)}${
                            row_index + 1
                        }`,
                );
                return;
            }

            changeColumnRowIndex(columnIndex, rowIndex);
        }
    };

    const changeCellAddress = (event: ChangeEvent<HTMLInputElement>) =>
        setCellAddress(event.target.value);

    const changeFormulaInput = (event: ChangeEvent<HTMLInputElement>) =>
        updateCellFormula(event.target.value);

    useEffect(() => {
        setCellAddress(
            () => `${String.fromCharCode(65 + column_index)}${row_index + 1}`,
        );

        cell_data[row_index][column_index].current?.click();
        cell_data[row_index][column_index].current?.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [row_index, column_index]);

    return (
        <>
            <FormulaAndCellContainer>
                <FormulaBarCellAddress
                    spellCheck={false}
                    value={cellAddress}
                    onChange={changeCellAddress}
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

                <FormulaBarInput
                    spellCheck={false}
                    value={cell_data[row_index][column_index].formula}
                    onChange={changeFormulaInput}
                />
            </FormulaAndCellContainer>
        </>
    );
};

export default Formula;
