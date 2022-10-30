import type { NextPage } from 'next';
import Image from 'next/image';
import { memo, useState } from 'react';
import { dockItemProps } from 'types';
import {
    DockItem,
    DockTooltip,
    DockAppImage,
    DockIsAppOpenDot,
} from './styled';

const DockAppItem: NextPage<dockItemProps> = ({
    title,
    appIconsFolderName,
}) => {
    const [tooltipEnabled, setToolTipEnabled] = useState<boolean>(false);

    return (
        <>
            <DockItem
                onMouseEnter={() => setToolTipEnabled(true)}
                onMouseLeave={() => setToolTipEnabled(false)}
            >
                {tooltipEnabled && (
                    <DockTooltip style={{ top: '-2.5rem' }}>
                        {title}
                    </DockTooltip>
                )}
                <DockAppImage style={{ width: '3.6rem', height: '3.6rem' }}>
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

export default memo(DockAppItem);
