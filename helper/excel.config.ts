import { findRowColumn, evaluteFormulaType } from 'types/index';
import { evaluate } from 'mathjs';

const rowTotal = 100;
const columnTotal = 26;

const findRowAndCol: findRowColumn = (address: string) => {
    const columnIndex = Number(address.charCodeAt(0) - 65);
    const rowIndex = Number(address.slice(1)) - 1;

    return [columnIndex, rowIndex];
};

const fontSizeOptions = [12, 13, 14, 15, 16, 17, 18];

const fontFamilyOptions = [
    'Inter',
    'Roboto',
    'Montserrat',
    'Sans',
    'Oswald',
    'Poppins',
];

const evaluteFormula: evaluteFormulaType = (formula, cell_data) => {
    formula = formula.slice(1).toUpperCase();

    /[A-Z]/.test(formula) &&
        formula.split(/[-+*/]/)?.forEach((formulaSingleCell) => {
            if (/^[A-Z]+[0-9]+$/.test(formulaSingleCell)) {
                const [columnIndex, rowIndex] =
                    findRowAndCol(formulaSingleCell);
                const cellValue =
                    cell_data?.[rowIndex]?.[columnIndex].value ?? 0;

                formula = formula.replaceAll(
                    formulaSingleCell,
                    cellValue ? cellValue : '0',
                );
            } else if (!/^\d+$/.test(formulaSingleCell)) {
                formula = formula.replaceAll(formulaSingleCell, '0');
            }
        });

    return evaluate(formula);
};

export {
    findRowAndCol,
    rowTotal,
    columnTotal,
    fontSizeOptions,
    fontFamilyOptions,
    evaluteFormula,
};
