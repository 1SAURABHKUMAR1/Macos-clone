import { getMonthDaysType, getDaysType } from 'types/index';
import { getMonth, getDay, startOfMonth } from 'date-fns';

const week_days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const getDays: getDaysType = (lower: number, upper: number) => {
    const arr: Array<number> = [];
    for (let i = lower + 1; i <= upper; i++) {
        arr.push(i);
    }
    return arr;
};

const getMonthDays: getMonthDaysType = (currentDate) => {
    const thisMonth = getMonth(currentDate);
    const prevMonth = thisMonth - 1 < 0 ? 11 : thisMonth - 1;

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weekday = getDay(startOfMonth(currentDate));

    const daysToShowInPrevMonth = weekday === 0 ? 6 : weekday - 1;
    const daysToShowInUpcomingMonth =
        42 - daysInMonth[thisMonth] - daysToShowInPrevMonth;

    const daysInPrevMonth = getDays(
        daysInMonth[prevMonth] - daysToShowInPrevMonth,
        daysInMonth[prevMonth],
    );
    const daysInCurrentMonth = getDays(0, daysInMonth[thisMonth]);
    const daysInUpcomingMonth = getDays(0, daysToShowInUpcomingMonth);

    return [daysInPrevMonth, daysInCurrentMonth, daysInUpcomingMonth];
};

export { week_days, getMonthDays };
