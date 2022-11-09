import type { NextPage } from 'next';
import type { MouseEvent } from 'react';
import React, { useState, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import { DockAppItem } from '@components/index';
import { dockConfigApps } from 'helper/dock-app.config';
import { TotalDockArea, DockContainer, DockDivider } from './styled';
import { apps } from 'types/index';
import { useAppStore } from '@store/index';

const DockArea: NextPage = () => {
    const mouseX = useMotionValue<number | null>(null);
    const { apps } = useAppStore((state) => state);
    const [isAppFullScreen, setIsAppFullScreen] = useState<boolean>(() =>
        Object.values(apps)
            .map((value) => value.fullScreen)
            .some(Boolean),
    );

    const onMouseMove = (event: MouseEvent<HTMLDivElement>) =>
        mouseX.set(event.nativeEvent.x);

    const onMouseLeave = () => mouseX.set(null);

    useEffect(() => {
        //  Object.values(apps).map((value) => value.fullScreen).filter(Boolean).pop()
        setIsAppFullScreen(() =>
            Object.values(apps)
                .map((value) => value.fullScreen)
                .some(Boolean),
        );
    }, [apps]);

    return (
        <>
            <TotalDockArea
                whileHover="hover"
                variants={{
                    hover: { transform: 'translate3d(0,0%,0)' },
                }}
                animate={{
                    transform: isAppFullScreen
                        ? 'translate3d(0,60%,0)'
                        : 'translate3d(0,0%,0)',
                }}
            >
                <DockContainer
                    style={{ zIndex: 80 }}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                    variants={{
                        hover: { transform: 'translate3d(0,0%,0)' },
                    }}
                    animate={{
                        transform: isAppFullScreen
                            ? 'translate3d(0,170%,0)'
                            : 'translate3d(0,0%,0)',
                    }}
                    transition={{ duration: 0.4, ease: 'anticipate' }}
                >
                    {Object.entries(dockConfigApps).map(([key, value]) => (
                        <React.Fragment key={key}>
                            <DockAppItem
                                title={value.title}
                                appIconsFolderName={value.imageSrc}
                                mouseXPostion={mouseX}
                                dockWidth={57.6}
                                distanceLimit={57.6 * 6}
                                appKey={key as apps}
                            />
                            {value.break && <DockDivider />}
                        </React.Fragment>
                    ))}
                </DockContainer>
            </TotalDockArea>
        </>
    );
};

export default DockArea;
