import styled from 'styled-components';

const DisplaySliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0.75rem 0 0 0;

    .rangeslider {
        margin: 0 !important;
        width: 100%;
        height: 1.75rem;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 9999px;
        box-shadow: none;
    }

    .rangeslider .rangeslider__fill {
        background-color: var(--svg-color);
        box-shadow: none;
        border-radius: 0;
    }

    .rangeslider .rangeslider__handle {
        background-color: var(--svg-color);
        color: var(--svg-color);
        box-shadow: -5px 0px 10px 0px rgba(17, 17, 17, 0.2);
        border: none;
        outline: none;
        height: 1.75rem;
        width: 1.75rem;
        cursor: var(--system-cursor-default), auto;
    }

    .rangeslider .rangeslider__handle::after {
        display: none;
    }
`;

const DisplaySliderIcon = styled.span`
    height: 1.75rem;
    padding: 0.5rem;
    background-color: var(--svg-color);
    border-radius: 50% 0% 0% 50%;
    display: flex;
    align-items: center;
`;

export { DisplaySliderContainer, DisplaySliderIcon };
