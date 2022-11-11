import type { NextPage } from 'next';
import Image from 'next/image';
import { Wifi, Check, Sun, Maximize, Bluetooth, Rss } from 'react-feather';
import { DisplaySlider } from '@components/index';
import { colorsConfig } from 'helper/action-colors.config';
import { useAppStore, useSystemStore } from '@store/index';
import {
    ActionMenuContainer,
    ActionMenuItemCard,
    ActionMenuItemSvg,
    ActionMenuColorsContainer,
    ActionMenuColorItem,
    ActionMenuWallpaperContainer,
    ActionMenuItemCardSmall,
} from './styled';
import { actionCenterMenuProps, colors } from 'types/index';

const ActionCenterMenu: NextPage<actionCenterMenuProps> = ({
    menuActive,
    setMenuActive,
}) => {
    const {
        animation,
        toggleAnimation,
        fullScreen,
        toggleFullScreen,
        systemColor,
        changeSystemColor,
    } = useSystemStore((state) => state);
    const { openApp, apps, toggleActiveApp, toggleMinimizeApp } = useAppStore(
        (state) => state,
    );

    const changeAnimation = () => toggleAnimation();

    const changeFullScreen = () => toggleFullScreen();

    const toggleMenuItems = (
        type: 'wifi' | 'bluetooth' | 'airdrop' | 'keyboard_brightness',
    ) => {
        setMenuActive((state) => ({
            ...state,
            [type]: !state[type],
        }));
    };

    const toggleSystemColor = (color: colors) => changeSystemColor(color);

    const openWallpaperApp = () => {
        const isAlreadyOpen = apps['wallpaper'].open;
        toggleActiveApp('wallpaper');
        apps['wallpaper'].minimized && toggleMinimizeApp('wallpaper');
        if (isAlreadyOpen) return;

        openApp('wallpaper');
    };

    return (
        <ActionMenuContainer>
            <ActionMenuItemCard cardType="wifi_bluetooth_airdrop">
                <ActionMenuItemCardSmall
                    onClick={() => toggleMenuItems('wifi')}
                >
                    <ActionMenuItemSvg
                        icon="medium"
                        buttonActive={menuActive.wifi}
                    >
                        <Wifi size="1.2em" />
                    </ActionMenuItemSvg>
                    Wifi
                </ActionMenuItemCardSmall>

                <ActionMenuItemCardSmall
                    onClick={() => toggleMenuItems('bluetooth')}
                >
                    <ActionMenuItemSvg
                        icon="medium"
                        buttonActive={menuActive.bluetooth}
                    >
                        <Bluetooth size="1.2em" />
                    </ActionMenuItemSvg>
                    Bluetooth
                </ActionMenuItemCardSmall>

                <ActionMenuItemCardSmall
                    onClick={() => toggleMenuItems('airdrop')}
                >
                    <ActionMenuItemSvg
                        icon="medium"
                        buttonActive={menuActive.airdrop}
                    >
                        <Rss size="1.2em" />
                    </ActionMenuItemSvg>
                    AirDrop
                </ActionMenuItemCardSmall>
            </ActionMenuItemCard>

            <ActionMenuItemCard cardType="animation" onClick={changeAnimation}>
                <ActionMenuItemSvg icon="small" buttonActive={animation}>
                    <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                        <path
                            fill="currentColor"
                            d="M15 2c1.94 0 3.59.7 4.95 2.05C21.3 5.41 22 7.06 22 9c0 1.56-.5 2.96-1.42 4.2c-.94 1.23-2.14 2.07-3.61 2.5l.03-.32V15c0-2.19-.77-4.07-2.35-5.65S11.19 7 9 7h-.37l-.33.03c.43-1.47 1.27-2.67 2.5-3.61C12.04 2.5 13.44 2 15 2M9 8a7 7 0 0 1 7 7a7 7 0 0 1-7 7a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
                        ></path>
                    </svg>
                </ActionMenuItemSvg>
                Animations
            </ActionMenuItemCard>

            <ActionMenuItemCard
                cardType="keyboard_brightness"
                onClick={() => toggleMenuItems('keyboard_brightness')}
            >
                <ActionMenuItemSvg
                    icon="small"
                    buttonActive={menuActive.keyboard_brightness}
                >
                    <Sun size="1.2em" />
                </ActionMenuItemSvg>
                Keyboard Brightness
            </ActionMenuItemCard>

            <ActionMenuItemCard
                cardType="full_screen"
                onClick={changeFullScreen}
            >
                <ActionMenuItemSvg icon="small" buttonActive={fullScreen}>
                    <Maximize size="1.2em" />
                </ActionMenuItemSvg>
                Full Screen
            </ActionMenuItemCard>

            <ActionMenuItemCard cardType="display">
                <p>Display</p>
                <DisplaySlider />
            </ActionMenuItemCard>

            <ActionMenuItemCard cardType="system-color">
                <p>System Color</p>
                <ActionMenuColorsContainer>
                    {Object.entries(colorsConfig).map(([key, value]) => (
                        <ActionMenuColorItem
                            key={key}
                            backgroundHsl={value.hsl}
                            onClick={() => toggleSystemColor(key as colors)}
                        >
                            {key === systemColor && <Check size="1.2em" />}
                        </ActionMenuColorItem>
                    ))}
                </ActionMenuColorsContainer>
            </ActionMenuItemCard>

            <ActionMenuItemCard cardType="wallpaper" onClick={openWallpaperApp}>
                <ActionMenuWallpaperContainer>
                    <Image
                        src="/wallpaper/Big-Sur.webp"
                        alt="action-wallpaper"
                        layout="fixed"
                        height="100%"
                        width="100%"
                    />
                    <p>Big Sur Graphic</p>
                </ActionMenuWallpaperContainer>
            </ActionMenuItemCard>
        </ActionMenuContainer>
    );
};

export default ActionCenterMenu;
