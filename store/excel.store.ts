import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { excelStore } from 'types';
import { columnTotal, rowTotal } from 'helper/excel.config';

const useExcelStore = create<excelStore>()(
    devtools((set) => ({
        cell_data: Array.from(Array(rowTotal), () =>
            Array(columnTotal).fill({
                bold: false,
                italic: false,
                underline: false,
                textAlign: 'left',
                fontFamily: 'Inter',
                fontSize: '16',
                fontColor: '#000000',
                backgroundColor: '#f9fafb',
                value: '',
                formula: '',
                current: null,
            }),
        ),
        column_index: 0,
        row_index: 0,

        changeColumnRowIndex: (columnIndex, rowIndex) => {
            set((state) => ({
                ...state,
                row_index: rowIndex,
                column_index: columnIndex,
            }));
        },

        changeRefCell: (columnIndex, rowIndex, ref) => {
            set((state) => {
                const cellData = state.cell_data;
                cellData[rowIndex][columnIndex] = {
                    ...cellData[rowIndex][columnIndex],
                    current: ref,
                };

                return {
                    ...state,
                    cell_data: cellData,
                };
            });
        },

        updateWholeCellData: (cell_data) => {
            set((state) => ({
                ...state,
                cell_data,
            }));
        },

        updateCellValue: (key, value) => {
            console.log(key, value);
            set((state) => {
                const cellData = state.cell_data;
                const row_index = state.row_index;
                const column_index = state.column_index;
                cellData[row_index][column_index] = {
                    ...cellData[row_index][column_index],
                    [key]: value,
                };
                return {
                    ...state,
                    cell_data: cellData,
                };
            });
        },

        updateCellFormula: (formula) => {
            set((state) => {
                const cellData = state.cell_data;
                const row_index = state.row_index;
                const column_index = state.column_index;
                cellData[row_index][column_index] = {
                    ...cellData[row_index][column_index],
                    formula,
                };
                return {
                    ...state,
                    cell_data: cellData,
                };
            });
        },

        resetWholeExcel: () => {
            set((state) => ({
                ...state,
                cell_data: Array.from(Array(rowTotal), () =>
                    Array(columnTotal).fill({
                        bold: false,
                        italic: false,
                        underline: false,
                        textAlign: 'left',
                        fontFamily: 'Inter',
                        fontSize: '16',
                        fontColor: '#000000',
                        backgroundColor: '#f9fafb',
                        value: '',
                        formula: '',
                        current: null,
                    }),
                ),
                column_index: 0,
                row_index: 0,
            }));
        },

        resetRowColumnIndex: () => {
            set((state) => ({
                ...state,
                column_index: 0,
                row_index: 0,
            }));
        },
    })),
);

export default useExcelStore;
