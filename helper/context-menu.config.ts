import { contextMenuConfig } from 'types';

export const contextMenuConfigItems: contextMenuConfig = {
    'new-folder': {
        title: 'New Folder',
        breakAfter: false,
    },
    'new-file': {
        title: 'New File',
        breakAfter: true,
    },
    'change-desktop-bg': {
        title: 'Change Background',
        breakAfter: true,
    },
    refresh: {
        title: 'Refresh',
        breakAfter: true,
    },
    'sort-by': {
        title: 'Sort By',
        breakAfter: false,
    },
    'clean-up': {
        title: 'Clean Up',
        breakAfter: false,
    },
};
