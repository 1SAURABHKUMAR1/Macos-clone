import type { NextPage } from 'next';
import { MdContentCopy, MdContentCut, MdContentPaste } from 'react-icons/md';
import { useExcelStore } from '@store/index';
import { ToolbarIcon } from './styled';
import toast from 'react-hot-toast';

const ToolbarCutCopyPaste: NextPage = () => {
    const {
        cell_data,
        row_index,
        column_index,
        updateCellValue,
        updateCellFormula,
    } = useExcelStore((state) => state);

    const copyData = () => {
        navigator.clipboard.writeText(cell_data[row_index][column_index].value);
        toast.success('Copied to clipboard!', {
            duration: 2000,
            id: 'clipboard',
        });
    };

    const cutData = () => {
        copyData();
        updateCellValue('value', '');
        updateCellFormula('');
    };

    const pasteData = () =>
        navigator.clipboard
            .readText()
            .then((text) => {
                updateCellValue('value', text.toString());
                toast.success('Paste sucess', {
                    duration: 2000,
                    id: 'paste-sucess',
                });
            })
            .catch(() =>
                toast.error('Failed', {
                    duration: 1500,
                    id: 'paste-error',
                }),
            );

    return (
        <>
            <ToolbarIcon onClick={copyData}>
                <MdContentCopy />
            </ToolbarIcon>
            <ToolbarIcon onClick={cutData}>
                <MdContentCut />
            </ToolbarIcon>
            <ToolbarIcon onClick={pasteData}>
                <MdContentPaste />
            </ToolbarIcon>
        </>
    );
};

export default ToolbarCutCopyPaste;
