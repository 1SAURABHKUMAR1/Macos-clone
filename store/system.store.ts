import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { systemStores } from 'types';

const useSystemStore = create<systemStores>()(
    devtools((set) => ({
        brightness: 100,
        animation: true,
        fullScreen: false,
        systemColor: 'cyan',
        wallpaper: { id: '', image: '' },

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
