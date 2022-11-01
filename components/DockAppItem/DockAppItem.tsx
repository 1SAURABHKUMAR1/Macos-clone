import type { NextPage } from 'next';
import Image from 'next/image';
import { dockItemProps } from 'types';
import { useRef, useState } from 'react';
import { useRaf } from 'rooks';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    DockItem,
    DockTooltip,
    DockAppImage,
    DockIsAppOpenDot,
} from './styled';

const DockAppItem: NextPage<dockItemProps> = ({
    title,
    appIconsFolderName,
    dockWidth,
    mouseXPostion,
    distanceLimit,
}) => {
    const [tooltipEnabled, setToolTipEnabled] = useState<boolean>(false);
    const containerRef = useRef<HTMLButtonElement | null>(null);
    const distance = useMotionValue(distanceLimit);
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
        { damping: 25, stiffness: 275 },
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
    }, true); //FIXME:

    return (
        <>
            <DockItem
                ref={containerRef}
                onMouseEnter={() => setToolTipEnabled(true)}
                onMouseLeave={() => setToolTipEnabled(false)}
            >
                {tooltipEnabled && <DockTooltip>{title}</DockTooltip>}
                <DockAppImage style={{ width: width }}>
                    <Image
                        alt={title}
                        layout="fixed"
                        height="100%"
                        width="100%"
                        src={`/app-icons/${appIconsFolderName}/icon.webp`}
                        draggable="false"
                    />
                </DockAppImage>
                <DockIsAppOpenDot />
            </DockItem>
        </>
    );
};

export default DockAppItem;
