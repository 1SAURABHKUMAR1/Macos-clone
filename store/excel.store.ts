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

        changeRefCell(columnIndex, rowIndex, ref) {
            set((state) => ({
                ...state,
                cell_data: Object.assign([...state.cell_data], {
                    [rowIndex]: Object.assign([...state.cell_data[rowIndex]], {
                        [columnIndex]: {
                            ...state.cell_data[rowIndex][columnIndex],
                            current: ref,
                        },
                    }),
                }),
            }));
        },

        resetCellData: () => {
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
    })),
);

export default useExcelStore;
