import type { NextPage } from 'next';
import Image from 'next/image';
import { dockItemProps } from 'types';
import { useRef, useState } from 'react';
import { useRaf } from 'rooks';
import {
    useAnimationControls,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
import {
    DockItem,
    DockTooltip,
    DockAppImage,
    DockIsAppOpenDot,
} from './styled';
import { useSystemStore, useAppStore } from '@store/index';

const DockAppItem: NextPage<dockItemProps> = ({
    title,
    appIconsFolderName,
    dockWidth,
    mouseXPostion,
    distanceLimit,
    appKey,
}) => {
    const [tooltipEnabled, setToolTipEnabled] = useState<boolean>(false);
    const containerRef = useRef<HTMLButtonElement | null>(null);
    const distance = useMotionValue(distanceLimit);
    const { animation } = useSystemStore();
    const { apps, openApp, toggleActiveApp, toggleMinimizeApp } = useAppStore();

    const bouncingControls = useAnimationControls();

    const width = useSpring(
        useTransform(
            distance,
            [
                -distanceLimit,
                -distanceLimit / 1.25,
                -distanceLimit / 1.75,
                0,
                distanceLimit / 1.75,
                distanceLimit / 1.25,
                distanceLimit,
            ],
            [
                dockWidth,
                dockWidth * 1.1,
                dockWidth * 1.2,
                dockWidth * 2,
                dockWidth * 1.2,
                dockWidth * 1.1,
                dockWidth,
            ],
        ),
        { damping: 35, stiffness: 275 },
    );

    useRaf(() => {
        const container = containerRef.current;
        const mouseXval = mouseXPostion.get();

        if (container && mouseXval !== null) {
            const containerRect = container.getBoundingClientRect();
            const containerCenterX =
                containerRect.left + containerRect.width / 2;
            const distanceDelta = mouseXval - containerCenterX;
            distance.set(distanceDelta);
            return;
        }
        distance.set(distanceLimit);
    }, animation);

    const toggleAppOpen = async () => {
        const isAlreadyOpen = apps[appKey].open;
        toggleActiveApp(appKey);
        apps[appKey].minimized && toggleMinimizeApp(appKey);
        if (isAlreadyOpen) return;

        bouncingControls.start({
            y: [0, -42, 0],
            transition: { duration: 1.2, ease: 'easeInOut' },
        });

        openApp(appKey);
    };

    return (
        <>
            <DockItem
                ref={containerRef}
                onMouseEnter={() => setToolTipEnabled(true)}
                onMouseLeave={() => setToolTipEnabled(false)}
                onClick={toggleAppOpen}
            >
                {tooltipEnabled && (
                    <DockTooltip animate={bouncingControls}>
                        {title}
                    </DockTooltip>
                )}
                <DockAppImage style={{ width }} animate={bouncingControls}>
                    <Image
                        alt={title}
                        layout="fixed"
                        height="100%"
                        width="100%"
                        src={`/app-icons/${appIconsFolderName}/icon.webp`}
                        draggable="false"
                    />
                </DockAppImage>
                <DockIsAppOpenDot
                    initial={{ opacity: 0 }}
                    animate={{ opacity: apps[appKey].open ? 1 : 0 }}
                    transition={{ ease: 'anticipate', duration: 0.2 }}
                />
            </DockItem>
        </>
    );
};

export default DockAppItem;
