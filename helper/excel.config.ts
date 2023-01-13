import { findRowColumn } from 'types/index';

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

export {
    findRowAndCol,
    rowTotal,
    columnTotal,
    fontSizeOptions,
    fontFamilyOptions,
};
