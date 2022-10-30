import type { NextPage } from 'next';
import React, { useState } from 'react';
import { TotalDockArea, DockContainer, DockDivider } from './styled';
import { DockAppItem } from '@components/index';
import { dockConfigApps } from 'helper/dock-app.config';

const DockArea: NextPage = () => {
    const [mouseXPosition, setMouseXPosition] = useState<number | null>(null);

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) =>
        setMouseXPosition(() => event.clientX);

    const onMouseLeave = () => setMouseXPosition(() => null);

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
                                mouseXPostion={mouseXPosition}
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
