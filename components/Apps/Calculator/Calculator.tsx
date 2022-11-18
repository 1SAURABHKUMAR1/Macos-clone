import type { NextPage } from 'next';
import {
    MainContainer,
    ResultContainer,
    ButtonContainer,
    CalculatorButton,
    ResultAutoScale,
} from './styled';
import {
    RiDivideFill,
    RiSubtractFill,
    RiAddFill,
    RiCloseFill,
} from 'react-icons/ri';
import { useCalculator } from '@hooks/index';
import { useRef, useLayoutEffect, useState } from 'react';
import { getFormattedValue } from 'helper/format-calculator-value';

const Calculator: NextPage = () => {
    const { calculatorValues, handleClick } = useCalculator();
    const [scale, setScale] = useState<number>(1);
    const parentRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (parentRef?.current && innerRef?.current) {
            const availableWidth = parentRef.current.offsetWidth;
            const actualWidth = innerRef.current.offsetWidth;
            const actualScale =
                availableWidth && actualWidth
                    ? availableWidth / actualWidth
                    : 1;

            actualScale < 1
                ? setScale(actualScale)
                : scale < 1
                ? setScale(1)
                : null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calculatorValues]);

    return (
        <MainContainer>
            <ResultContainer ref={parentRef}>
                <ResultAutoScale
                    ref={innerRef}
                    style={{ transform: `scale(${scale},${scale})` }}
                >
                    {getFormattedValue(calculatorValues.display)}
                </ResultAutoScale>
            </ResultContainer>

            <ButtonContainer>
                <CalculatorButton
                    buttonType="top-row"
                    onClick={() =>
                        handleClick(
                            calculatorValues.display !== '0'
                                ? 'clearDisplay'
                                : 'clearAll',
                        )
                    }
                >
                    {calculatorValues.display !== '0' ? 'C' : 'AC'}
                </CalculatorButton>
                <CalculatorButton
                    buttonType="top-row"
                    onClick={() => handleClick('toggleSign')}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="1.2em"
                        height="1.2em"
                        style={{ fontSize: '1.3rem' }}
                    >
                        <path
                            fill="currentColor"
                            d="M19 10.998h-6v6h-2v-6H5v-2h6v-6h2v6h6zm0 10H5v-2h14z"
                        ></path>
                    </svg>
                </CalculatorButton>
                <CalculatorButton
                    buttonType="top-row"
                    onClick={() => handleClick('inputPercent')}
                >
                    <svg
                        viewBox="0 0 48 48"
                        width="1.2em"
                        height="1.2em"
                        style={{ fontSize: '1rem' }}
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                        >
                            <circle cx="11" cy="11" r="5"></circle>
                            <circle cx="37" cy="37" r="5"></circle>
                            <path d="M42 6L6 42"></path>
                        </g>
                    </svg>
                </CalculatorButton>
                <CalculatorButton
                    buttonType="operator"
                    onClick={() => handleClick('performOperation', '/')}
                >
                    <RiDivideFill />
                </CalculatorButton>

                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '7')}
                >
                    7
                </CalculatorButton>
                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '8')}
                >
                    8
                </CalculatorButton>
                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '9')}
                >
                    9
                </CalculatorButton>
                <CalculatorButton
                    buttonType="operator"
                    onClick={() => handleClick('performOperation', '*')}
                >
                    <RiCloseFill />
                </CalculatorButton>

                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '4')}
                >
                    4
                </CalculatorButton>
                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '5')}
                >
                    5
                </CalculatorButton>
                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '6')}
                >
                    6
                </CalculatorButton>
                <CalculatorButton
                    buttonType="operator"
                    onClick={() => handleClick('performOperation', '-')}
                >
                    <RiSubtractFill />
                </CalculatorButton>

                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '1')}
                >
                    1
                </CalculatorButton>
                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '2')}
                >
                    2
                </CalculatorButton>
                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '3')}
                >
                    3
                </CalculatorButton>
                <CalculatorButton
                    buttonType="operator"
                    onClick={() => handleClick('performOperation', '+')}
                >
                    <RiAddFill />
                </CalculatorButton>

                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDigit', '0')}
                    buttonNumber={'0'}
                >
                    0
                </CalculatorButton>
                <CalculatorButton
                    buttonType="number"
                    onClick={() => handleClick('inputDot')}
                    disabled={calculatorValues.display.includes('.')}
                >
                    .
                </CalculatorButton>
                <CalculatorButton
                    buttonType="operator"
                    buttonNumber="="
                    onClick={() => handleClick('performOperation', '=')}
                >
                    =
                </CalculatorButton>
            </ButtonContainer>
        </MainContainer>
    );
};

export default Calculator;
