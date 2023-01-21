import type { NextPage } from 'next';
import type { ChangeEvent } from 'react';
import { MdOutlineCloudDownload, MdOutlineCloudUpload } from 'react-icons/md';
import writeXlsxFile from 'write-excel-file';
import readXlsxFile from 'read-excel-file';
import { useExcelStore } from '@store/index';
import { ToolbarIcon, ToolbarInput } from './styled';
import { columnTotal, rowTotal } from '@helper/excel.config';
import { cellProperties, cellStyle } from 'types/index';

const ToolbarDownloadUpload: NextPage = () => {
    const { cell_data, updateWholeCellData, resetRowColumnIndex } =
        useExcelStore((state) => state);

    const downloadWriteXlsxFile = async () => {
        let cellData: Array<Array<cellStyle | null>> = [];

        cell_data.forEach((row, rowIndex) => {
            cellData.push([]);
            row.forEach((_, columnIndex) =>
                cellData[rowIndex].push(
                    cell_data[rowIndex][columnIndex].value === '' &&
                        cell_data[rowIndex][columnIndex].backgroundColor ===
                            '#f9fafb'
                        ? null
                        : {
                              align: cell_data[rowIndex][columnIndex].textAlign,
                              fontFamily:
                                  cell_data[rowIndex][columnIndex].fontFamily,
                              fontSize:
                                  parseInt(
                                      cell_data[rowIndex][columnIndex].fontSize,
                                      10,
                                  ) - 4,
                              fontWeight: cell_data[rowIndex][columnIndex].bold
                                  ? 'bold'
                                  : undefined,
                              fontStyle: cell_data[rowIndex][columnIndex].italic
                                  ? 'italic'
                                  : undefined,
                              color: cell_data[rowIndex][columnIndex].fontColor,
                              backgroundColor:
                                  cell_data[rowIndex][columnIndex]
                                      .backgroundColor === '#f9fafb'
                                      ? undefined
                                      : cell_data[rowIndex][columnIndex]
                                            .backgroundColor,
                              value: cell_data[rowIndex][columnIndex].value,
                          },
                ),
            );
        });

        await writeXlsxFile(cellData, {
            fileName: 'file.xlsx',
        });
    };

    const inputXlsxFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target?.files?.[0]) {
            const newCellData: cellProperties[][] = Array(rowTotal)
                .fill(null)
                .map(() =>
                    Array(columnTotal)
                        .fill(null)
                        .map(() => ({
                            bold: false,
                            italic: false,
                            underline: false,
                            textAlign: 'left',
                            fontFamily: 'Inter',
                            fontSize: '16',
                            fontColor: '#000000',
                            backgroundColor: '#f9fafb',
                            value: '',
                            formula: '',
                            current: null,
                            children: [],
                            parent: [],
                        })),
                );

            readXlsxFile(event.target.files?.[0]).then((rows) => {
                rows.forEach((col, rowIndex) =>
                    col.forEach(
                        (cell, columnIndex) =>
                            cell !== null &&
                            (newCellData[rowIndex][columnIndex].value =
                                cell.toString()),
                    ),
                );
                updateWholeCellData(newCellData);
                resetRowColumnIndex();
            });
        }
    };

    return (
        <>
            <ToolbarIcon onClick={downloadWriteXlsxFile}>
                <MdOutlineCloudDownload />
            </ToolbarIcon>
            <ToolbarIcon>
                <ToolbarInput
                    type="file"
                    aria-label="upload"
                    accept=".xlsx"
                    onChange={inputXlsxFile}
                />
                <MdOutlineCloudUpload />
            </ToolbarIcon>
        </>
    );
};

export default ToolbarDownloadUpload;
