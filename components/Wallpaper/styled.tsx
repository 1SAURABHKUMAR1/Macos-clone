import styled from 'styled-components';

const WallpaperDiv = styled.div`
    z-index: var(--system-z-index-wallpaper);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: background-image;
    transition: background-image 150ms ease;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
`;

export { WallpaperDiv };
