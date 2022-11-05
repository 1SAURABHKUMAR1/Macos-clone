import { devtools } from 'zustand/middleware';
import create from 'zustand';
import { systemStores } from 'types';

const useSystemStore = create<systemStores>()(
    devtools((set) => ({
        wallpaper: { id: '', image: '' },
        brightness: 0,
        animation: true,

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

        toggleAnimaion: () => {
            set((state) => ({
                ...state,
                animation: !state.animation,
            }));
        },
    })),
);

export default useSystemStore;
