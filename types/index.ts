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
