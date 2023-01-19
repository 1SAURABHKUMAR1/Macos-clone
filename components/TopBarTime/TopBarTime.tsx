import type { NextPage } from 'next';
import { memo, useEffect, useState } from 'react';
import { format } from 'date-fns';

import { TimeContainer } from './styled';

const TopBarTime: NextPage = () => {
    const [timeDate, setTimeDate] = useState<Date | null>(null);

    useEffect(() => {
        let timeInterval = setInterval(() => setTimeDate(new Date()), 1500);
        return () => clearInterval(timeInterval);
    }, [timeDate]);

    return (
        <TimeContainer>
            <span>{timeDate && format(timeDate as Date, 'EEE MMM dd')}</span>
            <span>{timeDate && format(timeDate as Date, 'h:mm aa')}</span>
        </TimeContainer>
    );
};

export default memo(TopBarTime);
