import type { NextPage } from 'next';
import Image from 'next/image';
import { useSystemStore } from '@store/index';
import { wallpapersConfig } from 'helper/wallpaper.config';
import {
    MainContainer,
    HeaderArea,
    HeaderImage,
    HeaderText,
    WallpaperArea,
    WallpaperAreaText,
    WallpaperImagesContainer,
    SingleWallpaper,
} from './styled';
import { wallpaper } from 'types/index';

const Wallpaper: NextPage = () => {
    const { wallpaper, changeWallpaper } = useSystemStore((state) => state);

    return (
        <MainContainer>
            <HeaderArea>
                <HeaderImage
                    style={{
                        backgroundImage: `url("/wallpaper/${wallpapersConfig[wallpaper].name}.webp")`,
                    }}
                />
                {/* TODO: change to laptop */}

                <HeaderText>
                    {wallpapersConfig[wallpaper].name} Macbook
                </HeaderText>
            </HeaderArea>

            <WallpaperArea>
                <WallpaperAreaText>Dynamic Desktop</WallpaperAreaText>

                <WallpaperImagesContainer type="dynamic">
                    {Object.entries(wallpapersConfig)
                        .filter(([, { type }]) => type === 'dynamic')
                        .map(([key, { name }]) => (
                            <SingleWallpaper
                                type="dynamic"
                                key={key}
                                onClick={() =>
                                    changeWallpaper(key as wallpaper)
                                }
                            >
                                <Image
                                    src={`/wallpaper/${name}.webp`}
                                    alt="action-wallpaper"
                                    layout="fixed"
                                    height="100%"
                                    width="100%"
                                    unoptimized
                                />
                            </SingleWallpaper>
                        ))}
                </WallpaperImagesContainer>
            </WallpaperArea>

            <WallpaperArea>
                <WallpaperAreaText>Desktop Pictures</WallpaperAreaText>

                <WallpaperImagesContainer type="desktop">
                    {Object.entries(wallpapersConfig)
                        .filter(([, { type }]) => type === 'desktop')
                        .map(([key, { name }]) => (
                            <SingleWallpaper
                                type="desktop"
                                key={key}
                                onClick={() =>
                                    changeWallpaper(key as wallpaper)
                                }
                            >
                                <Image
                                    src={`/wallpaper/${name}.webp`}
                                    alt="action-wallpaper"
                                    layout="fixed"
                                    height="100%"
                                    width="100%"
                                    unoptimized
                                />
                            </SingleWallpaper>
                        ))}
                </WallpaperImagesContainer>
            </WallpaperArea>
        </MainContainer>
    );
};

export default Wallpaper;
