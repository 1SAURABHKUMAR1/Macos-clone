import { findRowColumn } from 'types/index';

export const rowTotal = 100;
export const columnTotal = 26;

const findRowAndCol: findRowColumn = (address: string) => {
    const columnIndex = Number(address.charCodeAt(0) - 65);
    const rowIndex = Number(address.slice(1)) - 1;

    return [columnIndex, rowIndex];
};

export { findRowAndCol };
