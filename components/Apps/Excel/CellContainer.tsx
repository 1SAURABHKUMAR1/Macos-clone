import type { NextPage } from 'next';
import type { FC } from 'react';
import { memo } from 'react';
import { columnTotal, rowTotal } from 'helper/excel.config';
import { useExcelStore } from '@store/index';
import {
    AutoSizer as _AutoSizer,
    MultiGrid as _MultiGrid,
    MultiGridProps,
    AutoSizerProps,
} from 'react-virtualized';
import { cellRenderer } from 'types/index';
import {
    CellRowColumnContainer,
    LeftDummyBox,
    InnerDummyBox,
    RowNumber,
    ColumnNumber,
    Cell,
} from './styled';

const MultiGrid = _MultiGrid as unknown as FC<MultiGridProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

const CellContainer: NextPage = () => {
    const {
        cell_data,
        changeColumnRowIndex,
        column_index,
        row_index,
        changeRefCell,
    } = useExcelStore((state) => state);

    const CellRenderer = ({
        columnIndex,
        key,
        rowIndex,
        style,
    }: cellRenderer) => {
        if (columnIndex === 0 && rowIndex === 0) {
            return (
                <div key={key} style={{ ...style, ...LeftDummyBox }}>
                    <div style={{ ...InnerDummyBox }} />
                </div>
            );
        }

        if (columnIndex === 0) {
            return (
                <div
                    key={key}
                    className={columnIndex === 0 ? 'row-cell' : undefined}
                    style={{ ...style, ...RowNumber }}
                >
                    {rowIndex}
                </div>
            );
        }

        if (rowIndex === 0) {
            return (
                <div key={key} style={{ ...style, ...ColumnNumber }}>
                    {String.fromCharCode(65 + columnIndex - 1)}
                </div>
            );
        }

        const cellData = cell_data[rowIndex - 1][columnIndex - 1];

        return (
            <div
                style={{
                    ...style,
                    ...Cell,
                    fontWeight: cellData.bold ? 'bold' : 'unset',
                    fontStyle: cellData.italic ? 'italic' : 'unset',
                    textDecorationLine: cellData.underline
                        ? 'underline'
                        : 'unset',
                    textAlign: cellData.textAlign,
                    fontFamily: cellData.fontFamily as unknown as string,
                    fontSize: cellData.fontSize,
                    color: cellData.fontColor,
                    backgroundColor: cellData.backgroundColor,
                }}
                contentEditable
                spellCheck={false}
                onClick={() =>
                    changeColumnRowIndex(columnIndex - 1, rowIndex - 1)
                }
                className={
                    columnIndex === column_index + 1 &&
                    rowIndex === row_index + 1
                        ? 'cell'
                        : undefined
                }
                key={key}
                ref={(elementRef) =>
                    elementRef &&
                    cellData.current !== elementRef &&
                    changeRefCell(columnIndex - 1, rowIndex - 1, elementRef)
                }
            >
                {cellData.value}
            </div>
        );
    };

    const ColumnWidth = ({ index }: { index: number }) =>
        index === 0 ? 40 : 80;

    return (
        <>
            <CellRowColumnContainer>
                <AutoSizer>
                    {({ height, width }) => (
                        <MultiGrid
                            fixedColumnCount={1}
                            fixedRowCount={1}
                            cellRenderer={CellRenderer}
                            columnWidth={ColumnWidth}
                            columnCount={columnTotal + 1}
                            enableFixedColumnScroll
                            enableFixedRowScroll
                            height={height}
                            width={width}
                            rowHeight={32}
                            rowCount={rowTotal + 1}
                            hideTopRightGridScrollbar
                            hideBottomLeftGridScrollbar
                        />
                    )}
                </AutoSizer>
                {/* </CellsContainer> */}
            </CellRowColumnContainer>
        </>
    );
};

export default memo(CellContainer);
