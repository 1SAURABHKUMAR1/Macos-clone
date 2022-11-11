import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { appStore } from 'types';

const useAppStore = create<appStore>()(
    devtools((set) => ({
        apps: {
            wallpaper: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            'system-preference': {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            appstore: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            calculator: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            calender: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            excel: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            finder: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            launch: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            vscode: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
            bin: {
                fullScreen: false,
                minimized: false,
                open: false,
                zIndex: 0,
            },
        },
        activeApp: null,
        activeAppZIndex: 0,

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
                activeApp: app,
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
                        zIndex: -2,
                        fullScreen: false,
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

        toggleActiveApp: (app) => {
            set((state) => ({
                ...state,
                activeApp: app,
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

        changeActiveAppZIndex: (zIndex) => {
            set((state) => ({
                ...state,
                activeAppZIndex: zIndex,
            }));
        },

        toggleMinimizeApp: (app) => {
            set((state) => ({
                ...state,
                apps: {
                    ...state.apps,
                    [app]: {
                        ...state.apps[app],
                        minimized: !state.apps[app].minimized,
                    },
                },
            }));
        },
    })),
);

export default useAppStore;
