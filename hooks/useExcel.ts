import { findRowAndCol, evaluteFormula } from '@helper/excel.config';
import { useExcelStore } from '@store/index';
import type { changeChildrenValueType } from 'types/index';
import type { KeyboardEvent } from 'react';

const useExcel = () => {
    const {
        cell_data,
        column_index,
        row_index,
        updateChildrenParentArray,
        updateCellValue,
        updateCellValueIndex,
    } = useExcelStore((state) => state);

    const removeChildrenParent = () => {
        cell_data[row_index][column_index].parent?.forEach(
            ({ parent_row_index, parent_column_index }) => {
                const parentCellChildren =
                    cell_data[parent_row_index][parent_column_index].children;
                const childrenIndex = parentCellChildren?.findIndex(
                    (child) =>
                        child.child_row_index === row_index &&
                        child.child_column_index === column_index,
                );

                childrenIndex > -1 &&
                    parentCellChildren.splice(childrenIndex, 1);

                childrenIndex > -1 &&
                    updateChildrenParentArray(
                        'children',
                        parentCellChildren,
                        parent_row_index,
                        parent_column_index,
                    );
            },
        );

        updateChildrenParentArray('parent', [], row_index, column_index);
    };

    const addChildrenAndParent = () => {
        const currentCell = cell_data[row_index][column_index];
        const formula = currentCell.formula
            .slice(1)
            .toUpperCase()
            .split(/[-+/*]/);

        formula?.forEach((element) => {
            if (!/^[A-Z]+[0-9]+$/.test(element)) return;

            const [columnIndex, rowIndex] = findRowAndCol(element);
            const singleFormulaCell = cell_data[rowIndex][columnIndex].children;

            if (
                !singleFormulaCell?.some(
                    (element) =>
                        element.child_row_index === row_index &&
                        element.child_column_index === column_index,
                )
            ) {
                updateChildrenParentArray(
                    'children',
                    [
                        ...singleFormulaCell,
                        {
                            child_row_index: row_index,
                            child_column_index: column_index,
                        },
                    ],
                    rowIndex,
                    columnIndex,
                );
            }

            if (
                !currentCell.parent?.some(
                    (element) =>
                        element.parent_row_index === rowIndex &&
                        element.parent_column_index === columnIndex,
                )
            ) {
                updateChildrenParentArray(
                    'parent',
                    [
                        ...currentCell.parent,
                        {
                            parent_row_index: rowIndex,
                            parent_column_index: columnIndex,
                        },
                    ],
                    row_index,
                    column_index,
                );
            }
        });
    };

    const changeChildrenValue = ({
        rowIndex,
        columnIndex,
    }: changeChildrenValueType) => {
        cell_data[rowIndex][columnIndex].children?.forEach((element) => {
            if (
                rowIndex === element.child_row_index &&
                columnIndex === element.child_column_index
            )
                return;

            const childrenNewValue = evaluteFormula(
                cell_data[element.child_row_index][element.child_column_index]
                    .formula ?? '',
                cell_data,
            );

            updateCellValueIndex(
                childrenNewValue,
                element.child_row_index,
                element.child_column_index,
            );
            changeChildrenValue({
                rowIndex: element.child_row_index,
                columnIndex: element.child_column_index,
            });
        });
    };

    const computeFormula = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;

        const currentCell = cell_data[row_index][column_index];
        if (!currentCell.formula) return;
        if (currentCell.formula.slice(0, 1) !== '=') return;

        const value = evaluteFormula(currentCell.formula, cell_data);
        if (!value) return;

        removeChildrenParent();
        addChildrenAndParent();
        updateCellValue('value', value);
        changeChildrenValue({
            rowIndex: row_index,
            columnIndex: column_index,
        });
    };

    return { computeFormula, removeChildrenParent, changeChildrenValue };
};

export default useExcel;
