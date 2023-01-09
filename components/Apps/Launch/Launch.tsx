import type { NextPage } from 'next';
import type { ChangeEvent } from 'react';
import { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    LaunchMainContainer,
    LaunchContainer,
    LaunchHeader,
    LaunchAppModal,
    LaunchAction,
    LaunchInput,
    LaunchAppContainer,
    LaunchAppIcon,
    LaunchAppName,
} from './styled';
import { useAppStore } from '@store/index';
import { X } from 'react-feather';
import { appConfig } from 'helper/app.config';
import Image from 'next/image';
import { apps } from 'types/index';

const containerVarient: Variants = {
    inital: {
        opacity: 0,
        transition: { duration: 0.7, ease: 'anticipate' },
    },
    normal: {
        opacity: 1.5,
        transition: { duration: 0.8, ease: 'anticipate' },
    },
    close: {
        opacity: 0,
        transition: { duration: 0.9, ease: 'backOut' },
    },
};

const Launch: NextPage = () => {
    const {
        toggleFullScreenApp,
        closeApp,
        apps,
        toggleActiveApp,
        toggleMinimizeApp,
        openApp,
    } = useAppStore((state) => state);
    const [searchValue, setSearchValue] = useState<string>('');

    const closeLaunchApp = () => closeApp('launch');

    const toggleAppOpen = (appKey: apps) => {
        const isAlreadyOpen = apps[appKey].open;
        toggleActiveApp(appKey);
        apps[appKey].minimized && toggleMinimizeApp(appKey);
        closeLaunchApp();

        if (isAlreadyOpen) return;

        openApp(appKey);
        closeLaunchApp();
    };

    const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) =>
        setSearchValue(() => event.target.value.toLowerCase());

    useEffect(() => {
        toggleFullScreenApp('launch');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <LaunchMainContainer
                initial="inital"
                animate="normal"
                exit="close"
                variants={containerVarient}
            >
                <LaunchContainer>
                    <LaunchHeader>
                        <LaunchInput
                            placeholder="Search"
                            onChange={changeSearchValue}
                        />

                        <LaunchAction onClick={closeLaunchApp}>
                            <X size="1.5em" fontWeight="700" />
                        </LaunchAction>
                    </LaunchHeader>

                    <LaunchAppModal>
                        {Object.entries(appConfig)
                            .filter(
                                ([, value]) =>
                                    value.title !== 'Launch' &&
                                    value.title
                                        .toLowerCase()
                                        .includes(searchValue),
                            )
                            .map(([key, value]) => (
                                <LaunchAppContainer
                                    key={key}
                                    onClick={() => toggleAppOpen(key as apps)}
                                >
                                    <LaunchAppIcon>
                                        <Image
                                            alt={value.title}
                                            layout="fixed"
                                            height="100%"
                                            width="100%"
                                            src={`/app-icons/${value.imageSrc}/icon.webp`}
                                            draggable="false"
                                        />
                                    </LaunchAppIcon>
                                    <LaunchAppName>{value.title}</LaunchAppName>
                                </LaunchAppContainer>
                            ))}
                    </LaunchAppModal>
                </LaunchContainer>
            </LaunchMainContainer>
        </>
    );
};

export default Launch;
