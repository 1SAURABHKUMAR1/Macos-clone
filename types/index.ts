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
    [string: string]: {
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
}

export type contextMenuConfig = {
    [name: string]: {
        title: string;
        breakAfter: boolean;
    };
};

export type wallpaperType = {
    image: '';
    id: '';
};

export interface systemStores {
    wallpaper: wallpaperType;
    brightness: number;
    animation: boolean;
    fullScreen: boolean;
    systemColor: colors;

    changeBrightness: (brightness: number) => void;
    toggleAnimation: () => void;
    toggleFullScreen: () => void;
    changeSystemColor: (color: colors) => void;
    changeWallpaper: (wallpaper: wallpaperType) => void;
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
