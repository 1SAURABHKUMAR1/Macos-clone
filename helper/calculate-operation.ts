import { CalculatorOperations } from 'types/index';

export const calculatorOperations: CalculatorOperations = {
    '/': {
        func: (prevValue: number, nextValue: number) => prevValue / nextValue,
    },
    '*': {
        func: (prevValue: number, nextValue: number) => prevValue * nextValue,
    },
    '-': {
        func: (prevValue: number, nextValue: number) => prevValue - nextValue,
    },
    '+': {
        func: (prevValue: number, nextValue: number) => prevValue + nextValue,
    },
    '=': {
        func: (_prevValue: number, nextValue: number) => nextValue,
    },
};
