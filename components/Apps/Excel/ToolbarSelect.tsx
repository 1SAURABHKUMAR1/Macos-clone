import type { NextPage } from 'next';
import useExcelStore from '@store/excel.store';
import type { ToolbarSelectProps } from 'types/index';
import { ToolbarSelectItem, ToolbarSelectOption } from './styled';

const ToolbarSelect: NextPage<ToolbarSelectProps> = ({
    type,
    optionsArray,
}) => {
    const { cell_data, column_index, row_index, updateCellValue } =
        useExcelStore((state) => state);

    return (
        <>
            <ToolbarSelectItem
                value={cell_data[row_index][column_index][type]}
                onChange={(event) =>
                    updateCellValue(type, event.target.value as string)
                }
            >
                {optionsArray.map((option) => (
                    <ToolbarSelectOption key={option} value={option}>
                        {option}
                    </ToolbarSelectOption>
                ))}
            </ToolbarSelectItem>
        </>
    );
};

export default ToolbarSelect;
