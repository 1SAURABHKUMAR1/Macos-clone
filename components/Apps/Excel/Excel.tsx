import type { NextPage } from 'next';
import Image from 'next/image';
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
    MdPostAdd,
} from 'react-icons/md';
import { AiOutlineBgColors, AiOutlineFontColors } from 'react-icons/ai';
import { BiBold, BiItalic } from 'react-icons/bi';
import { columnTotal, rowTotal } from 'helper/excel.config';
import {
    MainContainer,
    NavigationBar,
    NavigationBarItem,
    ToolbarContainer,
    ToolbarSelectItem,
    ToolbarIcon,
    ToolbarSelectOption,
    ToolbarInput,
    FormulaAndCellContainer,
    FormulaBarCellAddress,
    FormulaBarIcon,
    FormulaBarInput,
    CellRowColumnContainer,
    LeftDummyBox,
    InnerDummyBox,
    RowAddressContainer,
    CellsContainer,
    ColumnAddressContainer,
    SingleRowNumber,
    SingleColumnNumber,
    SheetContainer,
    SheetIcon,
    SheetList,
    CellRow,
    Cell,
} from './styled';

const Excel: NextPage = () => {
    return (
        <>
            <MainContainer>
                <NavigationBar>
                    <NavigationBarItem>Home</NavigationBarItem>
                    <NavigationBarItem>File</NavigationBarItem>
                    <NavigationBarItem>Insert</NavigationBarItem>
                    <NavigationBarItem>Layout</NavigationBarItem>
                    <NavigationBarItem>Help</NavigationBarItem>
                </NavigationBar>

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
                        <ToolbarSelectOption value="Sans">
                            Sans
                        </ToolbarSelectOption>
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

                <FormulaAndCellContainer>
                    <FormulaBarCellAddress spellCheck={false} />

                    <FormulaBarIcon>
                        <Image
                            src="https://img.icons8.com/ios-glyphs/50/000000/formula-fx.png"
                            alt="formula icon"
                            layout="fixed"
                            height="100%"
                            width="100%"
                            unoptimized
                        />
                    </FormulaBarIcon>

                    <FormulaBarInput spellCheck={false} />
                </FormulaAndCellContainer>

                <CellRowColumnContainer>
                    <LeftDummyBox>
                        <InnerDummyBox />
                    </LeftDummyBox>

                    <RowAddressContainer>
                        {[...Array(rowTotal)].map((_, index) => (
                            <SingleRowNumber key={index}>
                                {index + 1}
                            </SingleRowNumber>
                        ))}
                    </RowAddressContainer>

                    <CellsContainer>
                        <ColumnAddressContainer>
                            {[...Array(columnTotal)].map((_, index) => (
                                <SingleColumnNumber key={index}>
                                    {String.fromCharCode(65 + index)}
                                </SingleColumnNumber>
                            ))}
                        </ColumnAddressContainer>

                        {[...Array(rowTotal)].map((_, index) => (
                            <CellRow key={index}>
                                {[...Array(columnTotal)].map((_, index) => (
                                    <Cell
                                        key={index}
                                        contentEditable
                                        spellCheck={false}
                                    />
                                ))}
                            </CellRow>
                        ))}
                    </CellsContainer>
                </CellRowColumnContainer>

                <SheetContainer>
                    <SheetIcon>
                        <MdPostAdd />
                    </SheetIcon>
                    <SheetList active>Sheet 1</SheetList>
                </SheetContainer>
            </MainContainer>
        </>
    );
};

export default Excel;
