import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { appStore } from 'types';

const useAppStore = create<appStore>()(
    devtools((set) => ({
        apps: {
            wallpaper: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            'system-preference': {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            appstore: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            calculator: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            calender: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            excel: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            finder: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            launch: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            vscode: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
            bin: {
                fullScreen: false,
                open: false,
                zIndex: -2,
            },
        },

        openApp: (app) => {
            set((state) => ({
                ...state,
                apps: {
                    ...state.apps,
                    [app]: {
                        ...state.apps[app],
                        open: true,
                    },
                },
            }));
        },

        closeApp: (app) => {
            set((state) => ({
                ...state,
                apps: {
                    ...state.apps,
                    [app]: {
                        ...state.apps[app],
                        open: false,
                    },
                },
            }));
        },

        toggleFullScreenApp: (app) => {
            set((state) => ({
                ...state,
                apps: {
                    ...state.apps,
                    [app]: {
                        ...state.apps[app],
                        fullScreen: !state.apps[app].fullScreen,
                    },
                },
            }));
        },

        changeZIndex: (app, zIndex) => {
            set((state) => ({
                ...state,
                apps: {
                    ...state.apps,
                    [app]: {
                        ...state.apps[app],
                        zIndex: zIndex,
                    },
                },
            }));
        },
    })),
);

export default useAppStore;

// Holds all apps opened
