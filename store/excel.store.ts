import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { excelStore } from 'types';
import { columnTotal, rowTotal } from 'helper/excel.config';

const useExcelStore = create<excelStore>()(
    devtools((set) => ({
        cellValue: 'A1',
        cellData: Array.from(Array(rowTotal), () =>
            Array(columnTotal).fill(null),
        ),

        changeCellValue: (columnIndex, rowIndex) => {
            set((state) => ({
                ...state,
                cellValue: `${String.fromCharCode(65 + columnIndex)}${
                    rowIndex + 1
                }`,
            }));
        },
    })),
);

export default useExcelStore;
