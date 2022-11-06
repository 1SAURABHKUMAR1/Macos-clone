import styled from 'styled-components';

const ActionMenuContainer = styled.div`
    z-index: 5000;
    position: absolute;
    margin: 0.4rem 0rem 0rem 0rem;
    right: 1rem;
    color: var(--system-color-grey-900);
    background-color: hsla(var(--system-header-hsl), 0.35);
    border-radius: 1rem;
    box-shadow: hsla(0, 0%, 0%, 0.3) 0px 0px 11px 0px,
        var(--additional-box-shadow);
    backdrop-filter: blur(12px);
    user-select: none;
    padding: 0.7rem;
    min-width: 20rem;
    width: auto;
    display: grid;
    gap: 0.55rem;
    grid-template-columns: repeat(4, 5rem);
    grid-template-rows: repeat(5, 5rem);
`;

const ActionMenuItemCard = styled.section<{
    cardType:
        | 'wifi_bluetooth_airdrop'
        | 'animation'
        | 'keyboard_brightness'
        | 'full_screen'
        | 'display'
        | 'system-color'
        | 'wallpaper';
}>`
    width: 100%;
    background-color: hsla(var(--system-color-light-hsl), 0.6);
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: #0000004d 0 1px 4px -1px,
        inset 0 0 0 0.5px hsla(var(--system-color-dark-hsl), 0.3),
        0 0 0 0.5px hsla(var(--system-color-light-hsl), 0.3);
    font-weight: 700;
    font-size: 0.87rem;

    ${({ cardType }) =>
        cardType === 'wifi_bluetooth_airdrop'
            ? `
                grid-column: span 2 / span 2;
                grid-row:span 2 / span 2;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 0.5rem 0.75rem;

            `
            : cardType === 'animation'
            ? `
                grid-column: span 2/span 2;
                grid-row: span 1 / span 1;
                display: flex;
                gap: 0.5rem;
                align-items: center;
                justify-content: center;
                `
            : cardType === 'display'
            ? `
                grid-column: span 4/span 4;
                grid-row: span 1 / span 1;
                padding : 0.75rem;
                `
            : cardType === 'system-color'
            ? `
                grid-column: span 4/span 4;
                grid-row: span 1 / span 1;
                padding : 0.75rem;
                `
            : cardType === 'wallpaper'
            ? `
                grid-column: span 4/span 4;
                grid-row: span 1 / span 1;
                padding : 0.75rem;
            `
            : cardType === 'keyboard_brightness' || cardType === 'full_screen'
            ? `
                padding : 0.75rem;
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 0.5rem;
                justify-content: center;
                text-align: center;
                font-weight:600;
                padding : 0.7rem 0.75rem;
            `
            : ''}
`;

const ActionMenuItemSvg = styled.span<{
    icon: 'small' | 'medium';
    buttonActive: boolean;
}>`
    ${({ buttonActive }) =>
        buttonActive
            ? `
            --svg-background-color: 240, 24%, 100%;
            --svg-aplha: 1;
            background-color: var(--system-primary-color);
            `
            : `
            --svg-background-color: 0%, 1%, 11%;
            --svg-aplha: 0.1;
            background-color: hsla(240, 3%, 11% , 0.1 );
            `}

    display: flex;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    align-items: center;

    ${({ icon }) =>
        icon === 'small'
            ? `
                height: 1.7rem !important;
                width: 1.7rem !important;
                `
            : icon === 'medium'
            ? `
                height: 2.2rem !important;
                width: 2.2rem !important;
            `
            : ''}
    svg {
        color: hsla(var(--svg-background-color), var(--svg-aplha));
        font-size: 0.82rem;
    }
`;

const ActionMenuColorsContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1.25rem 0 0 0;
`;

const ActionMenuColorItem = styled.span<{ backgroundHsl: string }>`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ backgroundHsl }) => `background-color: hsl(${backgroundHsl});`}

    :hover {
        ${({ backgroundHsl }) =>
            `box-shadow: 0 0 0 0.25rem hsla(${backgroundHsl},0.25);`}
    }

    svg {
        color: var(--svg-color);
        font-size: 0.8rem;
    }
`;

const ActionMenuWallpaperContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    span:first-child {
        width: 4rem !important;
        height: 4rem !important;
        object-fit: contain;
        border-radius: 0.5rem;
        aspect-ratio: 1/1;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
    }
`;

const ActionMenuItemCardSmall = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export {
    ActionMenuContainer,
    ActionMenuItemCard,
    ActionMenuItemSvg,
    ActionMenuColorsContainer,
    ActionMenuColorItem,
    ActionMenuWallpaperContainer,
    ActionMenuItemCardSmall,
};
