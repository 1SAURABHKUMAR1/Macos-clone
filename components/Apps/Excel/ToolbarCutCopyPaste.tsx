import type { NextPage } from 'next';
import { MdContentCopy, MdContentCut, MdContentPaste } from 'react-icons/md';
import { ToolbarIcon } from './styled';

const ToolbarCutCopyPaste: NextPage = () => {
    return (
        <>
            <ToolbarIcon>
                <MdContentCopy />
            </ToolbarIcon>
            <ToolbarIcon>
                <MdContentCut />
            </ToolbarIcon>
            <ToolbarIcon>
                <MdContentPaste />
            </ToolbarIcon>
        </>
    );
};

export default ToolbarCutCopyPaste;
