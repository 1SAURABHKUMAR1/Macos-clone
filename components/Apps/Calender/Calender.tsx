import type { NextPage } from 'next';
import { useState } from 'react';
import { format, addMonths } from 'date-fns';
import {
    MainContainer,
    CalenderHeader,
    CalenderMonthYear,
    CalenderMonth,
    CalenderYear,
    CalenderControlButtonContainer,
    CalenderControlButton,
} from './styled';
import { CalenderMainArea } from '@components/index';

const Calender: NextPage = () => {
    const [date, setDate] = useState(() => new Date());

    const getToday = () => setDate(() => new Date());

    const prevMonth = () => setDate(() => addMonths(date, -1));

    const nextMonth = () => setDate(() => addMonths(date, 1));

    return (
        <>
            <MainContainer>
                <CalenderHeader>
                    <CalenderMonthYear>
                        <CalenderMonth>{format(date, 'MMMM')}</CalenderMonth>
                        <CalenderYear>{format(date, 'yyyy')}</CalenderYear>
                    </CalenderMonthYear>

                    <CalenderControlButtonContainer>
                        <CalenderControlButton onClick={prevMonth}>
                            {'<'}
                        </CalenderControlButton>
                        <CalenderControlButton onClick={getToday}>
                            Today
                        </CalenderControlButton>
                        <CalenderControlButton onClick={nextMonth}>
                            {'>'}
                        </CalenderControlButton>
                    </CalenderControlButtonContainer>
                </CalenderHeader>

                <CalenderMainArea date={date} />
            </MainContainer>
        </>
    );
};

export default Calender;
