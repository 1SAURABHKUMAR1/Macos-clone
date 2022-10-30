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
    padding: 0.75rem;
    min-width: 20rem;
    width: auto;
    display: grid;
    gap: 0.55rem;
    grid-auto-rows: minmax(1.55rem, auto);
`;

const ActionMenuItemCard = styled.section<{
    cardType: 'wifi' | 'animation' | 'system-color' | 'wallpaper' | 'display';
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
        cardType === 'wifi'
            ? `
                grid-column: 1 / span 6;
                grid-row: 1 / span 2;
                display: flex;
                gap: 0.5rem;
                align-items: center;
                justify-content: center;
            `
            : cardType === 'animation'
            ? `
                grid-column: 7 / span 6;
                grid-row: 1 / span 2;
                display: flex;
                gap: 0.5rem;
                align-items: center;
                justify-content: center;
            `
            : cardType === 'system-color'
            ? `
                grid-column: 1 / span 12;
                grid-row: 3 / span 2;
                padding : 0.75rem;
                `
            : cardType === 'wallpaper'
            ? `
                grid-column: 1 / span 12;
                grid-row: 5 / span 3;
                padding : 0.75rem;
            `
            : cardType === 'display'
            ? `
                grid-column: 1 / span 12;
                grid-row: 8 / span 2;
                padding : 0.75rem;
            `
            : ''}
`;

const ActionMenuItemSvg = styled.span`
    --svg-background-color: 0%, 1%, 11%;
    --span-background-color: 240, 3%, 11%;
    --span-aplha: 0.1;

    /* --svg-background-color: 240, 24%, 100%;
    --span-aplha: 1;
    --span-background-color: 211, 100%, 50%; */

    height: 1.7rem !important;
    width: 1.7rem !important;
    display: flex;
    justify-content: center;
    background-color: hsla(var(--span-background-color), 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
    align-items: center;

    svg {
        color: hsl(var(--svg-background-color));
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
        width: 4.75rem !important;
        height: 4.75rem !important;
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

export {
    ActionMenuContainer,
    ActionMenuItemCard,
    ActionMenuItemSvg,
    ActionMenuColorsContainer,
    ActionMenuColorItem,
    ActionMenuWallpaperContainer,
};
