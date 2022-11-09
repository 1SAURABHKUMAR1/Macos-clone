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
    | 'orange'
    | 'green'
    | 'cyan'
    | 'blue'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';

export interface bootupScreenProps {
    setIsBootupLoading: Dispatch<SetStateAction<boolean>>;
}

export type dockConfig = {
    [dockItems in apps]?: {
        title: string;
        imageSrc: string;
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

export interface appStore {
    apps: {
        [app in apps]: {
            fullScreen: boolean;
            zIndex: number;
            open: boolean;
        };
    };
    activeApp: apps | null;

    openApp: (app: apps) => void;
    closeApp: (app: apps) => void;
    toggleFullScreenApp: (app: apps) => void;
    changeZIndex: (app: apps, zIndex: number) => void;
}

export interface windowDimension {
    clientHeight: number;
    clientWidth: number;
    clientTop: number;
    clientLeft: number;
}
