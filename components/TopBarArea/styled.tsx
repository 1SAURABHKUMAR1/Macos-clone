import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.65rem;
    background-color: hsla(var(--system-header-hsl), 0.3);
    color: var(--system-text-white);
    backdrop-filter: blur(12px);
    font-weight: 500;

    button {
        font-size: 0.85rem;
        height: 100%;
    }

    svg {
        font-size: 1rem;
    }
`;

const GroupTimeAction = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 0.5rem 0 0;
    transition: all 100ms ease;
    gap: 0.15rem;
`;

const IconButton = styled.button`
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    height: 100%;

    :hover {
        background-color: hsla(var(--system-color-dark-hsl), 0.2);
    }
`;

const IconImage = styled.img`
    height: 55%;
`;

export { Header, GroupTimeAction, IconImage, IconButton };
