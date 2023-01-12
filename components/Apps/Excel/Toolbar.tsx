import type { NextPage } from 'next';
import { memo } from 'react';
import {
    MdContentCopy,
    MdContentCut,
    MdContentPaste,
    MdFormatUnderlined,
    MdOutlineFormatAlignLeft,
    MdOutlineFormatAlignCenter,
    MdOutlineFormatAlignRight,
    MdOutlineDelete,
    MdOutlineCloudDownload,
    MdOutlineCloudUpload,
} from 'react-icons/md';
import { AiOutlineBgColors, AiOutlineFontColors } from 'react-icons/ai';
import { BiBold, BiItalic } from 'react-icons/bi';
import { useExcelStore } from '@store/index';
import { fontFamily, fontSize } from 'types/index';
import localforage from 'localforage';
import {
    ToolbarContainer,
    ToolbarSelectItem,
    ToolbarIcon,
    ToolbarSelectOption,
    ToolbarInput,
} from './styled';

const excelCellData = localforage.createInstance({
    name: 'excel-cell-data',
});

const Toolbar: NextPage = () => {
    const {
        cell_data,
        column_index,
        row_index,
        updateCellValue,
        resetWholeExcel,
    } = useExcelStore((state) => state);

    const deleteSheet = () => {
        resetWholeExcel();
        excelCellData.removeItem('excel-cell-data');
    };

    return (
        <>
            <ToolbarContainer>
                <ToolbarIcon>
                    <MdContentCopy />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdContentCut />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdContentPaste />
                </ToolbarIcon>

                <ToolbarSelectItem
                    value={cell_data[row_index][column_index].fontFamily}
                    onChange={(event) =>
                        updateCellValue(
                            'fontFamily',
                            event.target.value as fontFamily,
                        )
                    }
                >
                    <ToolbarSelectOption value="Inter">
                        Inter
                    </ToolbarSelectOption>
                    <ToolbarSelectOption value="Roboto">
                        Roboto
                    </ToolbarSelectOption>
                    <ToolbarSelectOption value="Montserrat">
                        Montserrat
                    </ToolbarSelectOption>
                    <ToolbarSelectOption value="Sans">Sans</ToolbarSelectOption>
                    <ToolbarSelectOption value="Oswald">
                        Oswald
                    </ToolbarSelectOption>
                    <ToolbarSelectOption value="Poppins">
                        Poppins
                    </ToolbarSelectOption>
                </ToolbarSelectItem>

                <ToolbarSelectItem
                    value={cell_data[row_index][column_index].fontSize}
                    onChange={(event) =>
                        updateCellValue(
                            'fontSize',
                            event.target.value as fontSize,
                        )
                    }
                >
                    <ToolbarSelectOption value="12">12</ToolbarSelectOption>
                    <ToolbarSelectOption value="13">13</ToolbarSelectOption>
                    <ToolbarSelectOption value="14">14</ToolbarSelectOption>
                    <ToolbarSelectOption value="15">15</ToolbarSelectOption>
                    <ToolbarSelectOption value="16">16</ToolbarSelectOption>
                    <ToolbarSelectOption value="17">17</ToolbarSelectOption>
                    <ToolbarSelectOption value="18">18</ToolbarSelectOption>
                </ToolbarSelectItem>

                <ToolbarIcon
                    style={
                        cell_data[row_index][column_index].bold
                            ? {
                                  backgroundColor: 'var(--hover-grey)',
                                  borderRadius: '0.2rem',
                              }
                            : {}
                    }
                    onClick={() =>
                        updateCellValue(
                            'bold',
                            !cell_data[row_index][column_index].bold,
                        )
                    }
                >
                    <BiBold />
                </ToolbarIcon>

                <ToolbarIcon
                    style={
                        cell_data[row_index][column_index].italic
                            ? {
                                  backgroundColor: 'var(--hover-grey)',
                                  borderRadius: '0.2rem',
                              }
                            : {}
                    }
                    onClick={() =>
                        updateCellValue(
                            'italic',
                            !cell_data[row_index][column_index].italic,
                        )
                    }
                >
                    <BiItalic />
                </ToolbarIcon>

                <ToolbarIcon
                    style={
                        cell_data[row_index][column_index].underline
                            ? {
                                  backgroundColor: 'var(--hover-grey)',
                                  borderRadius: '0.2rem',
                              }
                            : {}
                    }
                    onClick={() =>
                        updateCellValue(
                            'underline',
                            !cell_data[row_index][column_index].underline,
                        )
                    }
                >
                    <MdFormatUnderlined />
                </ToolbarIcon>

                <ToolbarIcon
                    style={
                        cell_data[row_index][column_index].textAlign === 'left'
                            ? {
                                  backgroundColor: 'var(--hover-grey)',
                                  borderRadius: '0.2rem',
                              }
                            : {}
                    }
                    onClick={() => updateCellValue('textAlign', 'left')}
                >
                    <MdOutlineFormatAlignLeft />
                </ToolbarIcon>

                <ToolbarIcon
                    style={
                        cell_data[row_index][column_index].textAlign ===
                        'center'
                            ? {
                                  backgroundColor: 'var(--hover-grey)',
                                  borderRadius: '0.2rem',
                              }
                            : {}
                    }
                    onClick={() => updateCellValue('textAlign', 'center')}
                >
                    <MdOutlineFormatAlignCenter />
                </ToolbarIcon>

                <ToolbarIcon
                    style={
                        cell_data[row_index][column_index].textAlign === 'right'
                            ? {
                                  backgroundColor: 'var(--hover-grey)',
                                  borderRadius: '0.2rem',
                              }
                            : {}
                    }
                    onClick={() => updateCellValue('textAlign', 'right')}
                >
                    <MdOutlineFormatAlignRight />
                </ToolbarIcon>

                <ToolbarIcon onClick={deleteSheet}>
                    <MdOutlineDelete />
                </ToolbarIcon>

                <ToolbarIcon>
                    <ToolbarInput
                        type="color"
                        value={cell_data[row_index][column_index].fontColor}
                        onChange={(event) =>
                            updateCellValue('fontColor', event.target.value)
                        }
                    />
                    <AiOutlineFontColors />
                </ToolbarIcon>

                <ToolbarIcon>
                    <ToolbarInput
                        type="color"
                        value={
                            cell_data[row_index][column_index].backgroundColor
                        }
                        onChange={(event) =>
                            updateCellValue(
                                'backgroundColor',
                                event.target.value,
                            )
                        }
                    />
                    <AiOutlineBgColors />
                </ToolbarIcon>

                <ToolbarIcon>
                    <MdOutlineCloudDownload />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdOutlineCloudUpload />
                </ToolbarIcon>
            </ToolbarContainer>
        </>
    );
};

export default memo(Toolbar);
