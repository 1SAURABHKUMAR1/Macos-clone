/* eslint-disable no-unused-vars */
import type { MotionValue } from 'framer-motion';
import type { Dispatch, SetStateAction, CSSProperties } from 'react';

export type menuConfig = {
    [string: string]: {
        title: string;
        menu: {
            [menuTitle: string]: {
                title: string;
                break?: boolean;
            };
        };
    };
};

export type menuBarKeys =
    | 'apple'
    | 'finder'
    | 'file'
    | 'edit'
    | 'view'
    | 'go'
    | 'window'
    | 'help';

export type colorConfig = {
    [color in colors]: {
        hsl: string;
    };
};

export type colors =
    | 'violet'
    | 'cyan'
    | 'blue'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'fuchisa'
    | 'orange';

export interface bootupScreenProps {
    setIsBootupLoading: Dispatch<SetStateAction<boolean>>;
}

export type dockConfig = {
    [dockItems in apps]?: {
        title: appsTitle;
        imageSrc: appsImageSrc;
        break?: boolean;
    };
};

export interface dockItemProps {
    title: string;
    appIconsFolderName: string;
    mouseXPostion: MotionValue;
    dockWidth: number;
    distanceLimit: number;
    appKey: apps;
}

export type contextMenuConfig = {
    [name: string]: {
        title: string;
        breakAfter: boolean;
    };
};

export interface systemStores {
    brightness: number;
    animation: boolean;
    fullScreen: boolean;
    systemColor: colors;
    wallpaper: wallpaper;

    changeBrightness: (brightness: number) => void;
    toggleAnimation: () => void;
    toggleFullScreen: () => void;
    changeSystemColor: (color: colors) => void;
    changeWallpaper: (wallpaper: wallpaper) => void;
}

export interface systemPrimaryCss extends CSSProperties {
    '--system-color-primary': string;
}

export interface appControlsCss extends CSSProperties {
    '--close-bg-color': string;
    '--close-box-shadow': string;
    '--minimize-bg-color': string;
    '--minimize-box-shodow': string;
    '--maximize-bg-color': string;
    '--maximize-box-shadow': string;
}

export type menuActiveType = {
    wifi: boolean;
    bluetooth: boolean;
    airdrop: boolean;
    keyboard_brightness: boolean;
};

export interface actionCenterMenuProps {
    menuActive: menuActiveType;
    setMenuActive: Dispatch<SetStateAction<menuActiveType>>;
}

export type wallpaper =
    | 'big-sur'
    | 'cabin-in-woods'
    | 'catalina'
    | 'dome'
    | 'fox-in-somber-forest'
    | 'iridescence'
    | 'lake'
    | 'lone-dune-wolf'
    | 'mojave'
    | 'monterey'
    | 'peak'
    | 'somber-forest'
    | 'the-desert'
    | 'ventura';

export type wallpaperName =
    | 'Big Sur'
    | 'Cabin in the Woods'
    | 'Catalina'
    | 'Dome'
    | 'Fox in Somber Forest'
    | 'Iridescence'
    | 'Lake'
    | 'Lone Dune Wolf'
    | 'Mojave'
    | 'Monterey'
    | 'Peak'
    | 'Somber Forest'
    | 'The Desert'
    | 'Ventura';

export type wallpaperConfig = {
    [wallpaperKey in wallpaper]: {
        name: wallpaperName;
    };
};

export type apps =
    | 'wallpaper'
    | 'finder'
    | 'vscode'
    | 'appstore'
    | 'calender'
    | 'calculator'
    | 'launch'
    | 'system-preference'
    | 'excel'
    | 'bin';

export type appsTitle =
    | 'Wallpaper'
    | 'Finder'
    | 'VS Code'
    | 'App Store'
    | 'Calender'
    | 'Calculator'
    | 'Launch'
    | 'Settings'
    | 'Excel'
    | 'Recycle Bin';

export type appsImageSrc =
    | '' //TODO:
    | 'finder'
    | 'vscode'
    | '' //TODO:
    | 'calender'
    | 'calculator'
    | 'launch'
    | 'settings'
    | 'excel'
    | 'bin';

export interface appStore {
    apps: {
        [app in apps]: {
            fullScreen: boolean;
            minimized: boolean;
            zIndex: number;
            open: boolean;
        };
    };
    activeApp: apps | null;
    activeAppZIndex: number;

    openApp: (app: apps) => void;
    closeApp: (app: apps) => void;
    toggleFullScreenApp: (app: apps) => void;
    toggleMinimizeApp: (app: apps) => void;
    toggleActiveApp: (app: apps) => void;
    changeZIndex: (app: apps, zIndex: number) => void;
    changeActiveAppZIndex: (zIndex: number) => void;
}

export interface windowDimension {
    clientHeight: number;
    clientWidth: number;
    clientTop: number;
    clientLeft: number;
}

export type singleWindowProps = {
    fullScreen: boolean;
    minimized: boolean;
    zIndex: number;
    appKey: apps;
    title: appsTitle;
    height: number;
    width: number;
    backgroundColor: string;
};

export type appConfig = {
    [appItems in apps]: {
        title: appsTitle;
        imageSrc: appsImageSrc;
        height: number;
        width: number;
        backgroundColor: string;
    };
};
