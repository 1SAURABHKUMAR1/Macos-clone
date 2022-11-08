import type { NextPage } from 'next';
import { WallpaperDiv } from './styled';
import { useSystemStore } from '@store/index';
import { wallpapersConfig } from 'helper/wallpaper.config';

const Wallpaper: NextPage = () => {
    const { wallpaper } = useSystemStore((state) => state);

    return (
        <WallpaperDiv
            style={{
                backgroundImage: `url("/wallpaper/${wallpapersConfig[wallpaper].name}.webp")`,
            }}
        />
    );
};

export default Wallpaper;
