import styled from 'styled-components';

const FullDiv = styled.div`
    height: 100%;
`;

const Container = styled.button`
    position: relative;
    border-radius: 0.25rem;
    height: 100%;
    transform-origin: center center;
    transition: all 100ms ease;
    padding: 0 0.5rem;
    width: max-content;
    height: 100%;

    :hover {
        background-color: hsla(var(--system-color-dark-hsl), 0.2);
    }

    svg {
        font-size: 1rem;
        height: 0.85rem;
        width: 1rem;
        fill: hsl(240, 24%, 100%) !important;
        position: relative;
    }

    path {
        font-size: 1rem;
        height: 1rem;
        width: 1rem;
        fill: hsl(240, 24%, 100%) !important;
        position: relative;
    }
`;

export { FullDiv, Container };
