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

const CellContainer: NextPage = () => {
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
        </>
    );
};

export default CellContainer;
