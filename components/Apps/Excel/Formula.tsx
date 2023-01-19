import type { NextPage } from 'next';
import Image from 'next/image';
import { ChangeEvent, memo } from 'react';
import { useExcelStore } from '@store/index';
import {
    FormulaAndCellContainer,
    FormulaBarCellAddress,
    FormulaBarIcon,
    FormulaBarInput,
} from './styled';
import { FormulaType } from 'types/index';
import { useExcelCellFocus } from '@hooks/index';

const Formula: NextPage<FormulaType> = ({ computeFormula }) => {
    const { cell_data, column_index, row_index, updateCellFormula } =
        useExcelStore((state) => state);
    const { cellAddress, changeCellAddress, focusCellChangeAddress } =
        useExcelCellFocus();

    const changeFormulaInput = (event: ChangeEvent<HTMLInputElement>) =>
        updateCellFormula(event.target.value);

    return (
        <>
            <FormulaAndCellContainer>
                <FormulaBarCellAddress
                    spellCheck={false}
                    value={cellAddress}
                    onChange={changeCellAddress}
                    onKeyDown={focusCellChangeAddress}
                />

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

                <FormulaBarInput
                    spellCheck={false}
                    value={cell_data[row_index][column_index].formula}
                    onChange={changeFormulaInput}
                    onKeyDown={computeFormula}
                />
            </FormulaAndCellContainer>
        </>
    );
};

export default memo(Formula);
