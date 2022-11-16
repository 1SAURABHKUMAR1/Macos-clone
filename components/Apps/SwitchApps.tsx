import type { NextPage } from 'next';
import { SwitchAppsProps } from 'types/index';
import {
    Appstore,
    Calculator,
    Calender,
    Excel,
    Finder,
    Launch,
    RecycleBin,
    Settings,
    VsCode,
    WallpaperApp,
    NotFound,
} from 'components/index';

const SwitchApps: NextPage<SwitchAppsProps> = ({ appId }) => {
    if (appId === 'appstore') {
        return <Appstore />;
    } else if (appId === 'calculator') {
        return <Calculator />;
    } else if (appId === 'calender') {
        return <Calender />;
    } else if (appId === 'excel') {
        return <Excel />;
    } else if (appId === 'finder') {
        return <Finder />;
    } else if (appId === 'bin') {
        return <RecycleBin />;
    } else if (appId === 'system-preference') {
        return <Settings />;
    } else if (appId === 'vscode') {
        return <VsCode />;
    } else if (appId === 'wallpaper') {
        return <WallpaperApp />;
    } else if (appId === 'launch') {
        return <Launch />;
    }

    return <NotFound />;
};

export default SwitchApps;
