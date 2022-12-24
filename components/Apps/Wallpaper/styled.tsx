import styled from 'styled-components';

const MainContainer = styled.section`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    color: #fff;
    fill: #fff;
    user-select: none;
    padding: 1rem 1.5rem;
    gap: 3rem;
`;

const HeaderArea = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

const HeaderImage = styled.div`
    height: auto;
    width: 20rem;
    border-radius: 1rem;
    aspect-ratio: 3/2;
    will-change: background-image;
    transition: background-image 150ms ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const HeaderText = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 1.4rem;
`;

const WallpaperArea = styled.section`
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 1.5rem;
`;

const WallpaperAreaText = styled.h2`
    font-weight: 400;
    font-size: 1.35rem;
`;

const WallpaperImagesContainer = styled.div<{ type: 'dynamic' | 'desktop' }>`
    display: grid;
    row-gap: 1.25rem;
    column-gap: 1rem;

    ${({ type }) =>
        type === 'dynamic'
            ? `
                grid-template-columns: repeat(auto-fit, minmax(9.5rem, 1fr));
            `
            : type === 'desktop'
            ? `
                grid-template-columns: repeat(auto-fit, minmax(14.5rem, 1fr));
            `
            : ''}
`;

const SingleWallpaper = styled.div<{ type: 'dynamic' | 'desktop' }>`
    height: auto;
    width: 100%;
    border-radius: 0.5rem;

    ${({ type }) =>
        type === 'dynamic'
            ? `
                aspect-ratio: 1 / 1;
            `
            : type === 'desktop'
            ? `
                aspect-ratio: 16 / 9;
            `
            : ''}

    span:first-child {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 0.5rem;
        aspect-ratio: 1/1;
        transition: box-shadow 100ms ease-in;
    }

    &:hover,
    &:focus-visible {
        box-shadow: 0 0 0 0.17rem hsla(var(--system-color-primary-hsl), 0.7);
    }
`;

export {
    MainContainer,
    HeaderText,
    HeaderArea,
    HeaderImage,
    WallpaperArea,
    WallpaperAreaText,
    WallpaperImagesContainer,
    SingleWallpaper,
};
