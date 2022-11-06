import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.65rem;
    background-color: hsla(var(--system-header-hsl), 0.27);
    color: var(--system-text-white);
    font-weight: 500;

    button {
        font-size: 0.85rem;
        height: 100%;
    }

    svg {
        font-size: 1rem;
    }

    ::before {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        backdrop-filter: blur(12px);
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
    padding: 0 0.4rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    :hover {
        background-color: hsla(var(--system-color-dark-hsl), 0.2);
    }
`;

const IconText = styled.span`
    font-size: 0.75rem;
`;

const IconImage = styled.img<{ height: number }>`
    ${({ height }) => `height:${height}%`}
`;

export { Header, GroupTimeAction, IconImage, IconButton, IconText };
