import type { NextPage } from 'next';
import { useCallback } from 'react';
import useExcelStore from '@store/excel.store';
import { ToolbarIcon } from './styled';
import { ToolbarToggleProps } from 'types/index';

const ToolbarToggle: NextPage<ToolbarToggleProps> = ({
    type,
    Icon,
    updateCellValueConditon,
    activeCssCheck,
}) => {
    const { cell_data, column_index, row_index, updateCellValue } =
        useExcelStore((state) => state);

    const handleClick = useCallback(
        () => updateCellValue(type, updateCellValueConditon),
        [updateCellValueConditon, type, updateCellValue],
    );

    return (
        <>
            <ToolbarIcon
                style={
                    (
                        activeCssCheck
                            ? cell_data[row_index][column_index][type] ===
                              activeCssCheck
                            : cell_data[row_index][column_index][type]
                    )
                        ? {
                              backgroundColor: 'var(--hover-grey)',
                              borderRadius: '0.2rem',
                          }
                        : {}
                }
                onClick={handleClick}
            >
                <Icon />
            </ToolbarIcon>
        </>
    );
};

export default ToolbarToggle;
