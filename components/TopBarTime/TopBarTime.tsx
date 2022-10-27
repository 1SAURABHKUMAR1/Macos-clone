import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { TimeContainer } from './styled';

const TopBarTime: NextPage = () => {
    const [timeDate, setTimeDate] = useState<Date>(() => new Date());

    useEffect(() => {
        let timeInterval = setInterval(() => setTimeDate(new Date()), 6000);
        return () => clearInterval(timeInterval);
    }, [timeDate]);

    return (
        <TimeContainer>
            {format(timeDate, 'EEE MMM dd')} {format(timeDate, 'h:mm aa')}
        </TimeContainer>
    );
};

export default TopBarTime;
