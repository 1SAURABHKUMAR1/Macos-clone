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
    [color: string]: {
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

    changeWallpaper: (wallpaper: wallpaperType) => void;
    changeBrightness: (brightness: number) => void;
    toggleAnimation: () => void;
    toggleFullScreen: () => void;
}

export interface systemPrimaryCss extends CSSProperties {
    '--system-primary-color': string;
}
