import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { systemStores } from 'types';

const useSystemStore = create<systemStores>()(
    devtools((set) => ({
        wallpaper: { id: '', image: '' },
        brightness: 100,
        animation: true,
        fullScreen: false,
        systemColor: 'cyan',

        changeWallpaper: (wallpaper) => {
            set((state) => ({
                ...state,
                wallpaper: wallpaper,
            }));
        },

        changeBrightness: (brightness) => {
            set((state) => ({
                ...state,
                brightness: brightness,
            }));
        },

        toggleAnimation: () => {
            set((state) => ({
                ...state,
                animation: !state.animation,
            }));
        },

        toggleFullScreen: () => {
            set((state) => ({
                ...state,
                fullScreen: !state.fullScreen,
            }));
        },
    })),
);

export default useSystemStore;
