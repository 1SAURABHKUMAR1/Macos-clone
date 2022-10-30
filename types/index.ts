import React from 'react';

export type menuConfig = {
    [string: string]: {
        title: string;
        menu: {
            [menuTitle: string]: {
                title: string;
                disabled?: boolean;
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
    isBootupOver: boolean;
    setIsBootupOver: React.Dispatch<React.SetStateAction<boolean>>;
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
    mouseXPostion: number | null;
}
