import { useState } from 'react';
import {
    calculatorValues,
    handleClickType,
    OperationKeys,
    useCalculatorType,
} from 'types/index';
import { calculatorOperations } from 'helper/calculate-operation';

const useCalculator: useCalculatorType = () => {
    const [calculatorValues, setCalculatorValues] = useState<calculatorValues>({
        value: 0,
        display: '0',
        operator: null,
        waitingForOperand: false,
    });

    const handleClick = (type: handleClickType, payload?: string) => {
        switch (type) {
            case 'inputDigit':
                if (calculatorValues.waitingForOperand) {
                    setCalculatorValues((state) => ({
                        ...state,
                        display: payload as string,
                        waitingForOperand: false,
                    }));
                    break;
                }

                setCalculatorValues((state) => ({
                    ...state,
                    display:
                        state.display === '0'
                            ? (payload as string)
                            : `${state.display}${payload}`,
                }));
                break;

            case 'clearAll':
                setCalculatorValues({
                    value: 0,
                    display: '0',
                    operator: null,
                    waitingForOperand: false,
                });
                break;

            case 'inputDot':
                if (calculatorValues.waitingForOperand) {
                    setCalculatorValues((state) => ({
                        ...state,
                        display: '0.',
                        waitingForOperand: false,
                    }));
                    break;
                }

                setCalculatorValues((state) => ({
                    ...state,
                    display: `${state.display}.`,
                    waitingForOperand: false,
                }));
                break;

            case 'inputPercent':
                if (calculatorValues.display !== '0') {
                    const fixedDigits: string =
                        calculatorValues.display.replace(/^-?\d*\.?/, '');
                    const newValue: number =
                        parseFloat(calculatorValues.display) / 100;

                    setCalculatorValues((state) => ({
                        ...state,
                        display: `${newValue.toFixed(fixedDigits.length + 2)}`,
                    }));
                    break;
                }

                break;

            case 'toggleSign':
                setCalculatorValues((state) => ({
                    ...state,
                    display: `${parseFloat(calculatorValues.display) * -1}`,
                }));
                break;

            case 'clearDisplay':
                setCalculatorValues((state) => ({
                    ...state,
                    display: '0',
                }));
                break;

            case 'performOperation':
                // eslint-disable-next-line no-case-declarations
                const inputValue = parseFloat(calculatorValues.display);

                if (calculatorValues.operator) {
                    const currentValue = calculatorValues.value || 0;
                    const newValue = calculatorOperations[
                        calculatorValues.operator as OperationKeys
                    ].func(currentValue, inputValue);

                    setCalculatorValues((state) => ({
                        ...state,
                        value: newValue,
                        display: `${newValue}`,
                        operator: payload as string,
                        waitingForOperand: true,
                    }));
                    break;
                }

                setCalculatorValues((state) => ({
                    ...state,
                    value: inputValue,
                    operator: payload as string,
                    waitingForOperand: true,
                }));
                break;

            default:
                break;
        }
    };

    return { calculatorValues, handleClick };
};

export default useCalculator;
