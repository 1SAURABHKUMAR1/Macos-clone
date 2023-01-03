import type { NextPage } from 'next';
import { columnTotal, rowTotal } from 'helper/excel.config';
import {
    CellRowColumnContainer,
    LeftDummyBox,
    InnerDummyBox,
    RowAddressContainer,
    CellsContainer,
    ColumnAddressContainer,
    SingleRowNumber,
    SingleColumnNumber,
    CellRow,
    Cell,
} from './styled';
import useExcelStore from '@store/excel.store';

const CellContainer: NextPage = () => {
    const { changeCellValue, cellValue, cellData } = useExcelStore(
        (state) => state,
    );

    return (
        <>
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

                    {cellData.map((row, rowIndex) => (
                        <CellRow key={rowIndex}>
                            {row.map((_, columnIndex) => (
                                <Cell
                                    key={columnIndex}
                                    contentEditable
                                    spellCheck={false}
                                    onClick={() =>
                                        changeCellValue(columnIndex, rowIndex)
                                    }
                                    active={
                                        cellValue ===
                                        `${String.fromCharCode(
                                            65 + columnIndex,
                                        )}${rowIndex + 1}`
                                    }
                                />
                            ))}
                        </CellRow>
                    ))}
                </CellsContainer>
            </CellRowColumnContainer>
        </>
    );
};

export default CellContainer;
