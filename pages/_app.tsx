import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        cursor: var(--system-cursor-default), auto;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
    }

    ol,
    ul {
        list-style: none;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        font-weight: bold;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    button:focus,
    button:focus-within,
    button:visited,
    button:focus-visible,
    button:active {
        outline: none;
        box-shadow: none;
    }
    
    input:focus,
    input:focus-within,
    input:visited,
    input:focus-visible,
    input:active {
        outline: none;
        box-shadow: none;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: .75rem;
        width: 5px;
        transition-duration: .4s
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: .75rem;
        width: 5px;
        transition-duration: .4s;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #666;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: #444;
    }

    /* variables */
    :root {
        --system-text-white: hsl(240, 24%, 100%);
        --system-header-hsl:240, 0.4%, 49.2%;
        --system-color-dark-hsl: 240, 24%, 100%;
        --system-color-primary: hsl(199deg, 78%, 55%);
        --system-color-primary-hsl: 211, 100%, 50%;
        --system-color-primary-contrast: hsl(240, 24%, 100%);
        --system-color-primary-contrast-hsl: 240, 24%, 100%;
        --system-color-light: hsl(240, 24%, 100%);
        --system-color-light-hsl: 240, 24%, 100%;
        --system-color-light-contrast: hsl(0, 0%, 11%);
        --system-color-light-contrast-hsl: 0, 0%, 11%;
        --system-focus-outline: 0 0 0 3px hsla(var(--system-color-primary-hsl), .5);
        --system-color-grey-50: #fafafa;
        --system-color-grey-50-hsl: 0, 0%, 98%;
        --system-color-grey-100: #f5f5f5;
        --system-color-grey-100-hsl: 0, 0%, 96%;
        --system-color-grey-200: #eeeeee;
        --system-color-grey-200-hsl: 0, 0%, 93%;
        --system-color-grey-300: #e0e0e0;
        --system-color-grey-300-hsl: 0, 0%, 88%;
        --system-color-grey-400: #bdbdbd;
        --system-color-grey-400-hsl: 0, 0%, 74%;
        --system-color-grey-500: #9e9e9e;
        --system-color-grey-500-hsl: 0, 0%, 62%;
        --system-color-grey-600: #757575;
        --system-color-grey-600-hsl: 0, 0%, 46%;
        --system-color-grey-700: #616161;
        --system-color-grey-700-hsl: 0, 0%, 38%;
        --system-color-grey-800: #424242;
        --system-color-grey-800-hsl: 0, 0%, 26%;
        --system-color-grey-900: #212121;
        --system-color-grey-900-hsl: 0, 0%, 13%;
        --system-color-grey-A100: #d5d5d5;
        --system-color-grey-A100-hsl: 0, 0%, 84%;
        --system-color-grey-A200: #aaa;
        --system-color-grey-A200-hsl: 0, 0%, 67%;
        --system-color-grey-A400: #303030;
        --system-color-grey-A400-hsl: 0, 0%, 19%;
        --system-color-grey-A700: #616161;
        --system-color-grey-A700-hsl: 0, 0%, 38%;
        --system-cursor-default: url('/cursor/cursor-default.svg');
        --system-cursor-pointer: url('/cursor/cursor-pointer.svg');
        --system-cursor-move: url('/cursor/cursor-move.svg');
        --system-cursor-resize: url('/cursor/cursor-resize.svg');
        --system-z-index-wallpaper: -1;
        --system-z-index-bootup-screen: 110;
        --system-z-index-context-menu: 100;
        --system-z-index-window-traffic-lights: 10;
        --system-z-index-dock: 80;
        --system-z-index-dock-tooltip: 70;
        --system-z-index-system-updates-available: 60;
        --system-z-index-system-dialog: 90;
        --system-z-index-menubar-menu-parent: 160;
        --additional-box-shadow: inset 0 0 0 .9px hsla(var(--system-color-dark-hsl), .3), 0 0 0 1.2px hsla(var(--system-color-light-hsl), .3);
        --svg-color: #ffff;
        --shadow-action-menu: 0 0 0 0.2px #f5f5f5b3,
            0 0 0 0.2px #212121b3,
            #0000004d 2px 5px 19px 7px;
        --shadow-tooltip-dock: #0000004d 0 1px 5px 2px,
            0 0 0 0 #fff;
        --shadow-app : inset 0 0 0 0.9px #ffffff33, 0px 0px 23px 4px #0000008f;
        --shadow-context-menu : hsla(0, 0%, 0%, 0.3) 0px 0px 11px 0px,
                                inset 0 0 0 0.9px #ffffff4d, 0 0 0 1.2px #1b1b1d4d;
    }

    #__next {
        height: 100%;
    }

    .fullscreen {
        height: 100%;
    }

    button {
        color: inherit;
        background-color: transparent;
        all: unset;
    }

    .absolute {
        position: absolute !important;
    }
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
