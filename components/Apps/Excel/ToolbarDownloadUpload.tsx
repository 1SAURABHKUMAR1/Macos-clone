import type { NextPage } from 'next';
import { MdOutlineCloudDownload, MdOutlineCloudUpload } from 'react-icons/md';
import { ToolbarIcon } from './styled';

const ToolbarDownloadUpload: NextPage = () => {
    return (
        <>
            <ToolbarIcon>
                <MdOutlineCloudDownload />
            </ToolbarIcon>
            <ToolbarIcon>
                <MdOutlineCloudUpload />
            </ToolbarIcon>
        </>
    );
};

export default ToolbarDownloadUpload;
