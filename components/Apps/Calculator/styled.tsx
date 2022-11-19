import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #fefefe;
    fill: #fefefe;
`;

const ResultContainer = styled.div`
    font-size: 2.6rem;
    text-align: end;
    font-weight: 400;
    min-height: 4rem;
    position: relative;
`;

const ResultAutoScale = styled.div`
    padding: 0.5rem 1rem;
    display: inline-block;
    position: absolute;
    right: 0;
    -webkit-transform-origin: right;
    transform-origin: right;
    height: 100%;
`;

const ButtonContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.07rem;
    margin: 0.125rem;
    flex: 1;
`;

const CalculatorButton = styled.button<{
    buttonType: 'top-row' | 'number' | 'operator';
    buttonNumber?: string;
}>`
    font-size: 1.55rem;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${({ buttonType }) =>
        buttonType === 'number'
            ? 'background-color: hsla(0, 0%, 45%, 0.6);'
            : buttonType === 'operator'
            ? 'background-color: hsla(33, 87%, 59%, 1);'
            : buttonType === 'top-row'
            ? 'background-color: hsla(0, 0%, 35%, 0.6);'
            : ''}

    ${({ buttonNumber }) =>
        buttonNumber === '0'
            ? `
                grid-column: 1 / span 2;
                border-radius :  0 0 0 0.75rem;
                `
            : buttonNumber === '='
            ? `    
                border-radius :  0 0 0.75rem 0;
            `
            : ''}


    :active {
        box-shadow: inset 0 0 80px 0 rgba(0, 0, 0, 0.25);
    }
`;

export {
    MainContainer,
    ResultContainer,
    ButtonContainer,
    ResultAutoScale,
    CalculatorButton,
};
