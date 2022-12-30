import type { NextPage } from 'next';
import Image from 'next/image';
import {
    FormulaAndCellContainer,
    FormulaBarCellAddress,
    FormulaBarIcon,
    FormulaBarInput,
} from './styled';

const Formula: NextPage = () => {
    return (
        <>
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
        </>
    );
};

export default Formula;
