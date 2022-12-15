import type { NextPage } from 'next';
import { useState } from 'react';
import {
    CalenderArea,
    CalenderWeekDay,
    CalenderDayBlock,
    CalenderDate,
} from './styled';
import { week_days } from 'helper/calender-config';
import { calenderType } from 'types';
import { getMonthDays } from 'helper/calender-config';

const CalenderMainArea: NextPage<calenderType> = ({ date }) => {
    const [daysInPrevMonth, daysInCurrentMonth, daysInUpcomingMonth] =
        getMonthDays(date);
    const [todayDate] = useState(() => new Date().getDate());

    return (
        <>
            <CalenderArea>
                {/* week days */}
                {week_days.map((week, index) => (
                    <CalenderWeekDay key={index}>{week}</CalenderWeekDay>
                ))}

                {/* previous month */}
                {daysInPrevMonth.map((dateDay, index) => (
                    <>
                        <CalenderDayBlock key={index}>
                            <CalenderDate month="prev">{dateDay}</CalenderDate>
                        </CalenderDayBlock>
                    </>
                ))}

                {/* current month */}
                {daysInCurrentMonth.map((dateDay, index) => (
                    <CalenderDayBlock key={index}>
                        <CalenderDate
                            month="current"
                            currentDate={dateDay === todayDate}
                        >
                            {dateDay}
                        </CalenderDate>
                    </CalenderDayBlock>
                ))}

                {/* upcoming month */}
                {daysInUpcomingMonth.map((dateDay, index) => (
                    <CalenderDayBlock key={index}>
                        <CalenderDate month="upcoming">{dateDay}</CalenderDate>
                    </CalenderDayBlock>
                ))}
            </CalenderArea>
        </>
    );
};

export default CalenderMainArea;
