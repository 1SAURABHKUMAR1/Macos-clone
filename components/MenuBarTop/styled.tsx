import styled from 'styled-components';

const MenuContainer = styled.div`
    position: absolute;
    margin-top: 0.2rem;

    display: none; //FIXME:
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
`;

const FullDiv = styled.div`
    height: 100%;
`;

const IconButton = styled.button<{ IconType: 'apple' | 'text' | 'Finder' }>`
    border-radius: 0.25rem;
    position: relative;
    z-index: 1;
    padding: 0 0.5rem;
    height: 100%;
    transform-origin: center center;
    transition: all 100ms ease;

    ${({ IconType }) =>
        IconType === 'apple'
            ? `
                margin: 0 0rem 0 0.5rem;
                padding: 0 0.7rem;
              `
            : IconType === 'Finder'
            ? `
                font-weight: 600 !important;
                margin: 0 6px;
             `
            : ''}

    :hover {
        background-color: hsla(var(--system-color-dark-hsl), 0.2);
    }
`;

export { MenuContainer, IconButton, FullDiv, Container };
