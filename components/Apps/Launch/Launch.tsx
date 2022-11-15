import type { NextPage } from 'next';
import { useEffect } from 'react';
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

const Launch: NextPage = () => {
    const {
        toggleFullScreenApp,
        closeApp,
        apps,
        toggleActiveApp,
        toggleMinimizeApp,
        openApp,
    } = useAppStore((state) => state);

    useEffect(() => {
        toggleFullScreenApp('launch');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    return (
        <>
            <LaunchMainContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'anticipate' }}
            >
                <LaunchContainer>
                    <LaunchHeader>
                        <LaunchInput placeholder="Search" />

                        <LaunchAction onClick={closeLaunchApp}>
                            <X size="1.5em" fontWeight="700" />
                        </LaunchAction>
                    </LaunchHeader>

                    <LaunchAppModal>
                        {Object.entries(appConfig)
                            .filter((app) => app[1].title !== 'Launch')
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
