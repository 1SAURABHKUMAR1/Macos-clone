import type { NextPage } from 'next';
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
import {
    ToolbarContainer,
    ToolbarSelectItem,
    ToolbarIcon,
    ToolbarSelectOption,
    ToolbarInput,
} from './styled';

const Toolbar: NextPage = () => {
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

                <ToolbarSelectItem>
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

                <ToolbarSelectItem>
                    <ToolbarSelectOption value="12">12</ToolbarSelectOption>
                    <ToolbarSelectOption value="13">13</ToolbarSelectOption>
                    <ToolbarSelectOption value="14">14</ToolbarSelectOption>
                    <ToolbarSelectOption value="15">15</ToolbarSelectOption>
                    <ToolbarSelectOption value="16" selected>
                        16
                    </ToolbarSelectOption>
                    <ToolbarSelectOption value="17">17</ToolbarSelectOption>
                    <ToolbarSelectOption value="18">18</ToolbarSelectOption>
                </ToolbarSelectItem>

                <ToolbarIcon>
                    <BiBold />
                </ToolbarIcon>
                <ToolbarIcon>
                    <BiItalic />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdFormatUnderlined />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdOutlineFormatAlignLeft />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdOutlineFormatAlignCenter />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdOutlineFormatAlignRight />
                </ToolbarIcon>
                <ToolbarIcon>
                    <MdOutlineDelete />
                </ToolbarIcon>

                <ToolbarIcon>
                    <ToolbarInput type="color" />
                    <AiOutlineFontColors />
                </ToolbarIcon>

                <ToolbarIcon>
                    <ToolbarInput type="color" />
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

export default Toolbar;
