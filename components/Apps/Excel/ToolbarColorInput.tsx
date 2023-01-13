import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import useExcelStore from '@store/excel.store';
import { useDebounce } from '@hooks/index';
import { ToolbarColorInputProps } from 'types/index';
import { ToolbarIcon, ToolbarInput } from './styled';

const ToolbarColorInput: NextPage<ToolbarColorInputProps> = ({
    type,
    delay,
    Icon,
}) => {
    const { cell_data, column_index, row_index, updateCellValue } =
        useExcelStore((state) => state);
    const [color, setColor] = useState(
        cell_data[row_index][column_index][type],
    );
    const debounceColor = useDebounce<string>(color, delay);

    useEffect(() => {
        cell_data[row_index][column_index][type] !== debounceColor &&
            updateCellValue(type, debounceColor);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceColor]);

    useEffect(() => {
        setColor(cell_data[row_index][column_index][type]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cell_data, column_index, row_index]);

    return (
        <>
            <ToolbarIcon>
                <ToolbarInput
                    type="color"
                    value={debounceColor}
                    onChange={(event) => setColor(event.target.value)}
                />
                <Icon />
            </ToolbarIcon>
        </>
    );
};

export default ToolbarColorInput;
