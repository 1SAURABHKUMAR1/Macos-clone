import type { NextPage } from 'next';
import { memo } from 'react';
import {
    MdFormatUnderlined,
    MdOutlineFormatAlignLeft,
    MdOutlineFormatAlignCenter,
    MdOutlineFormatAlignRight,
    MdOutlineDelete,
} from 'react-icons/md';
import { RiSave3Fill } from 'react-icons/ri';
import { AiOutlineBgColors, AiOutlineFontColors } from 'react-icons/ai';
import { BiBold, BiItalic } from 'react-icons/bi';
import { fontFamilyOptions, fontSizeOptions } from '@helper/excel.config';
import { useExcelStore } from '@store/index';
import localforage from 'localforage';
import {
    ToolbarColorInput,
    ToolbarCutCopyPaste,
    ToolbarDownloadUpload,
    ToolbarSelect,
    ToolbarToggle,
} from '@components/index';
import { ToolbarContainer, ToolbarIcon } from './styled';

const excelCellData = localforage.createInstance({
    name: 'excel-cell-data',
});

const Toolbar: NextPage = () => {
    const { cell_data, column_index, row_index, resetWholeExcel } =
        useExcelStore((state) => state);

    const deleteSheet = () => {
        resetWholeExcel();
        excelCellData.removeItem('excel-cell-data');
    };

    const saveSheet = async () => {
        const cellData = cell_data;
        cellData.forEach((row) => row.forEach((cell) => (cell.current = null)));
        await excelCellData.setItem('excel-cell-data', cellData);
    };

    return (
        <>
            <ToolbarContainer>
                <ToolbarCutCopyPaste />

                <ToolbarSelect
                    type="fontFamily"
                    optionsArray={fontFamilyOptions}
                />

                <ToolbarSelect type="fontSize" optionsArray={fontSizeOptions} />

                <ToolbarToggle
                    Icon={BiBold}
                    type="bold"
                    updateCellValueConditon={
                        !cell_data[row_index][column_index].bold
                    }
                />

                <ToolbarToggle
                    Icon={BiItalic}
                    type="italic"
                    updateCellValueConditon={
                        !cell_data[row_index][column_index].italic
                    }
                />

                <ToolbarToggle
                    Icon={MdFormatUnderlined}
                    type="underline"
                    updateCellValueConditon={
                        !cell_data[row_index][column_index].underline
                    }
                />

                <ToolbarToggle
                    Icon={MdOutlineFormatAlignLeft}
                    type="textAlign"
                    updateCellValueConditon={'left'}
                    activeCssCheck={'left'}
                />

                <ToolbarToggle
                    Icon={MdOutlineFormatAlignCenter}
                    type="textAlign"
                    updateCellValueConditon={'center'}
                    activeCssCheck={'center'}
                />

                <ToolbarToggle
                    Icon={MdOutlineFormatAlignRight}
                    type="textAlign"
                    updateCellValueConditon={'right'}
                    activeCssCheck={'right'}
                />

                <ToolbarIcon onClick={deleteSheet}>
                    <MdOutlineDelete />
                </ToolbarIcon>

                <ToolbarIcon onClick={saveSheet}>
                    <RiSave3Fill />
                </ToolbarIcon>

                <ToolbarColorInput
                    Icon={AiOutlineFontColors}
                    delay={400}
                    type="fontColor"
                />

                <ToolbarColorInput
                    Icon={AiOutlineBgColors}
                    delay={400}
                    type="backgroundColor"
                />

                <ToolbarDownloadUpload />
            </ToolbarContainer>
        </>
    );
};

export default memo(Toolbar);
