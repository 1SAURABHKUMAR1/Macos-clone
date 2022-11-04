import type { MotionValue } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';

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
