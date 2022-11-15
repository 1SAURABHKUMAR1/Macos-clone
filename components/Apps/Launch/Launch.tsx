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

const Launch: NextPage = () => {
    const { toggleFullScreenApp } = useAppStore((state) => state);

    useEffect(() => {
        toggleFullScreenApp('launch');

        return () => toggleFullScreenApp('launch');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <LaunchMainContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'anticipate' }}
            >
                <LaunchContainer>
                    <LaunchHeader>
                        <LaunchInput placeholder="Search" />

                        <LaunchAction>
                            <X size="1.5em" fontWeight="700" />
                        </LaunchAction>
                    </LaunchHeader>

                    <LaunchAppModal>
                        {Object.entries(appConfig).map(([key, value]) => (
                            <LaunchAppContainer key={key}>
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
