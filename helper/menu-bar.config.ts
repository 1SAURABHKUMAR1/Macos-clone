import { menuConfig } from 'types/index';

export const MenuConfig: menuConfig = {
    apple: {
        title: 'apple',
        menu: {
            'about-this-mac': {
                title: 'About This Mac',
                break: true,
            },
            'system-preferences': {
                title: 'System Preferences...',
            },
            'app-store': {
                title: 'App Store...',
                break: true,
            },
            'recent-items': {
                title: 'Recent Items',
                break: true,
            },
            'force-quit': {
                title: 'Force Quit...',
                break: true,
            },
            sleep: {
                title: 'Sleep',
            },
            restart: {
                title: 'Restart...',
            },
            shutdown: {
                title: 'Shut Down...',
                break: true,
            },
            'lock-screen': {
                title: 'Lock Screen',
            },
            logout: {
                title: 'Log Out User...',
            },
        },
    },
    finder: {
        title: 'Finder',
        menu: {
            'about-finder': {
                title: 'About Finder',
                break: true,
            },
            preferences: {
                title: 'Preferences',
                break: true,
            },
            'empty-trash': {
                title: 'Empty Trash',
                break: true,
            },
            'hide-finder': {
                title: 'Hide Finder',
            },
            'hide-others': {
                title: 'Hide Others',
            },
            'show-all': {
                title: 'Show All',
            },
        },
    },
    file: {
        title: 'File',
        menu: {
            'new-finder-window': {
                title: 'New Finder Window',
            },
            'new-folder': {
                title: 'New Folder',
            },
            'new-folder-with-selection': {
                title: 'New Folder with Selection',
            },
            'new-smart-folder': {
                title: 'New Smart Folder',
            },
            'new-tab': {
                title: 'New tab',
            },
            open: {
                title: 'Open',
            },
            'open-with': {
                title: 'Open With',
            },
            print: {
                title: 'Print',
            },
            'close-window': {
                title: 'Close Window',
                break: true,
            },

            'get-info': {
                title: 'Get Info',
            },
            rename: {
                title: 'Rename',
                break: true,
            },

            compress: {
                title: 'Compress',
                break: true,
            },

            duplicate: {
                title: 'Duplicate',
            },
            'make-alias': {
                title: 'Make Alias',
            },
            'quick-look': {
                title: 'Quick Look',
            },
            'show-original': {
                title: 'Show Original',
            },
            'add-to-sidebar': {
                title: 'Add to Sidebar',
                break: true,
            },

            'move-to-trash': {
                title: 'Move to Trash',
            },
            eject: {
                title: 'Eject',
                break: true,
            },

            find: {
                title: 'Find',
                break: true,
            },

            tags: {
                title: 'Tags...',
            },
        },
    },
    edit: {
        title: 'Edit',
        menu: {
            undo: {
                title: 'Undo',
            },
            redo: {
                title: 'Redo',
                break: true,
            },

            cut: {
                title: 'Cut',
            },
            copy: {
                title: 'Copy',
            },
            paste: {
                title: 'Paste',
            },
            'select-all': {
                title: 'Select All',
                break: true,
            },

            'show-clipboard': {
                title: 'Show Clipboard',
                break: true,
            },

            'start-dictation': {
                title: 'Start Dictation...',
            },
            'emoji-and-symbols': {
                title: 'Emoji & Symbols',
            },
        },
    },
    view: {
        title: 'View',
        menu: {
            'as-icons': {
                title: 'As Icons',
            },
            'as-list': {
                title: 'As List',
            },
            'as-columns': {
                title: 'As Columns',
            },
            'as-gallery': {
                title: 'As Gallery',
                break: true,
            },

            'use-stacks': {
                title: 'Use Stacks',
            },
            'sort-by': {
                title: 'Sort By',
            },
            'clean-up': {
                title: 'Clean Up',
            },
            'clean-up-by': {
                title: 'Clean Up By',
                break: true,
            },

            'hide-sidebar': {
                title: 'Hide Sidebar',
            },
            'show-preview': {
                title: 'Show Preview',
                break: true,
            },

            'hide-toolbar': {
                title: 'Hide Toolbar',
            },
            'show-all-tabs': {
                title: 'Show All Tabs',
            },
            'show-tab-bar': {
                title: 'Show Tab Bar',
            },
            'show-path-bar': {
                title: 'Show Path Bar',
            },
            'show-status-bar': {
                title: 'Show Status Bar',
                break: true,
            },

            'customize-toolbar': {
                title: 'Customize Toolbar...',
                break: true,
            },

            'show-view-options': {
                title: 'Show View Options',
            },
            'show-preview-options': {
                title: 'Show Preview Options',
                break: true,
            },

            'enter-full-screen': {
                title: 'Enter Full Screen',
            },
        },
    },
    go: {
        title: 'Go',
        menu: {
            back: {
                title: 'Back',
            },
            forward: {
                title: 'Forward',
            },
            'enclosing-folder': {
                title: 'Enclosing Folder',
                break: true,
            },

            recents: {
                title: 'Recents',
            },
            documents: {
                title: 'Documents',
            },
            desktop: {
                title: 'Desktop',
            },
            downloads: {
                title: 'Downloads',
            },
            home: {
                title: 'Home',
            },
            computer: {
                title: 'Computer',
            },
            airdrop: {
                title: 'Airdrop',
            },
            network: {
                title: 'Network',
            },
            'icloud-drive': {
                title: 'iCloud Drive',
            },
            applications: {
                title: 'Applications',
            },
            utilities: {
                title: 'Utilities',
                break: true,
            },

            'go-to-folder': {
                title: 'Go to Folder',
            },
            'connect-to-server': {
                title: 'Connect to Server',
            },
        },
    },
    window: {
        title: 'Window',
        menu: {
            minimize: {
                title: 'Minimize',
            },
            zoom: {
                title: 'Zoom',
            },
            'move-window-to-left-side-of-screen': {
                title: 'Move Window to Left Side of Screen',
            },
            'move-window-to-right-side-of-screen': {
                title: 'Move Window to Right Side of Screen',
            },
            'cycle-through-windows': {
                title: 'Cycle Through Windows',
                break: true,
            },

            'show-previous-tab': {
                title: 'Show Previous Tab',
            },
            'show-next-tab': {
                title: 'Show Next Tab',
            },
            'move-tab-to-new-window': {
                title: 'Move Tab to New Window',
            },
            'merge-all-windows': {
                title: 'Merge all Windows',
                break: true,
            },

            'bring-all-to-front': {
                title: 'Bring All to Front',
            },
        },
    },
    help: {
        title: 'Help',
        menu: {
            'send-finder-feedback': {
                title: 'Send Finder Feedback',
                break: true,
            },
            'macos-help': {
                title: 'macOS Help',
            },
        },
    },
};
