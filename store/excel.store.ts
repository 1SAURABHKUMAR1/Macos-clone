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

        resetCellData: () => {
            set((state) => ({
                ...state,
                column_index: 0,
                row_index: 0,
            }));
        },
    })),
);

export default useExcelStore;
