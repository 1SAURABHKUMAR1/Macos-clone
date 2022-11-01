import type { NextPage } from 'next';
import type { MouseEvent } from 'react';
import React from 'react';
import { useMotionValue } from 'framer-motion';
import { DockAppItem } from '@components/index';
import { dockConfigApps } from 'helper/dock-app.config';
import { TotalDockArea, DockContainer, DockDivider } from './styled';

const DockArea: NextPage = () => {
    const mouseX = useMotionValue<number | null>(null);

    const onMouseMove = (event: MouseEvent<HTMLDivElement>) =>
        mouseX.set(event.nativeEvent.x);

    const onMouseLeave = () => mouseX.set(null);

    return (
        <>
            <TotalDockArea>
                <DockContainer
                    style={{ zIndex: 80 }}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                >
                    {Object.entries(dockConfigApps).map(([key, value]) => (
                        <React.Fragment key={key}>
                            <DockAppItem
                                title={value.title}
                                appIconsFolderName={value.imageSrc}
                                mouseXPostion={mouseX}
                                dockWidth={57.6}
                                distanceLimit={57.6 * 6}
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
