import styled from 'styled-components';

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

const MenuContainer = styled.div<{ menuType: string }>`
    position: absolute;
    margin-top: 0.4rem;

    ${({ menuType }) => menuType === 'apple' && 'left : 0.8rem;'}
`;

const Menu = styled.div`
    min-width: 14rem;
    display: flex;
    flex-direction: column;
    width: max-content;
    padding: 0.55rem;
    position: relative;
    user-select: none;
    background-color: hsla(var(--system-header-hsl), 0.3);
    backdrop-filter: blur(12px);
    border-radius: 0.5rem;
    box-shadow: hsla(0, 0%, 0%, 0.3) 0px 0px 11px 0px,
        var(--additional-box-shadow);
`;

const MenuItem = styled.button`
    display: flex;
    justify-content: flex-start;
    width: auto;
    padding: 0.3rem 0.4rem;
    letter-spacing: 0.4px;
    margin: 0.1rem;
    font-weight: 500 !important;
    font-size: 0.9rem !important;
    border-radius: 0.3rem;
    color: hsla(var(--system-color-dark-hsl), 1);

    :disabled {
        color: hsla(var(--system-color-dark-hsl), 0.5);
    }

    :not(:disabled) {
        :hover,
        :focus-visible {
            background-color: var(--system-color-primary);
            color: var(--system-color-primary-contrast);
        }
    }
`;

const MenuDivider = styled.div`
    width: 100%;
    height: 0.1rem;
    background-color: hsla(var(--system-color-dark-hsl), 0.55);
    margin: 0.13rem 0;
`;

export {
    MenuContainer,
    IconButton,
    FullDiv,
    Container,
    Menu,
    MenuItem,
    MenuDivider,
};
