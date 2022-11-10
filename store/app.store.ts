import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { appStore } from 'types';

const useAppStore = create<appStore>()(
    devtools((set) => ({
        apps: {
            wallpaper: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            'system-preference': {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            appstore: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            calculator: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            calender: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            excel: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            finder: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            launch: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            vscode: {
                fullScreen: false,
                open: false,
                zIndex: 0,
            },
            bin: {
                fullScreen: false,
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
            console.log(app, zIndex);

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
            console.log(zIndex);
            set((state) => ({
                ...state,
                activeAppZIndex: zIndex,
            }));
        },
    })),
);

export default useAppStore;
