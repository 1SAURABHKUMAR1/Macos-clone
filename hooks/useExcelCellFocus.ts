import { useState, useEffect } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';
import { useExcelStore } from '@store/index';
import { findRowAndCol, columnTotal, rowTotal } from '@helper/excel.config';

const UseExcelCellFocus = () => {
    const { cell_data, column_index, row_index, changeColumnRowIndex } =
        useExcelStore((state) => state);

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

    useEffect(() => {
        setCellAddress(
            () => `${String.fromCharCode(65 + column_index)}${row_index + 1}`,
        );

        cell_data[row_index][column_index].current?.click();
        cell_data[row_index][column_index].current?.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [row_index, column_index]);

    return { cellAddress, focusCellChangeAddress, changeCellAddress };
};

export default UseExcelCellFocus;
