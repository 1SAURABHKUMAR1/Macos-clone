import type { NextPage } from 'next';
import {
    MainContainer,
    CalenderHeader,
    CalenderMonthYear,
    CalenderMonth,
    CalenderYear,
    CalenderControlButtonContainer,
    CalenderControlButton,
    CalenderArea,
    CalenderWeekDay,
    CalenderDayBlock,
    CalenderDate,
} from './styled';

const Calender: NextPage = () => {
    return (
        <>
            <MainContainer>
                <CalenderHeader>
                    <CalenderMonthYear>
                        <CalenderMonth>November</CalenderMonth>
                        <CalenderYear>2020</CalenderYear>
                    </CalenderMonthYear>

                    <CalenderControlButtonContainer>
                        <CalenderControlButton>{'<'}</CalenderControlButton>
                        <CalenderControlButton>Today</CalenderControlButton>
                        <CalenderControlButton>{'>'}</CalenderControlButton>
                    </CalenderControlButtonContainer>
                </CalenderHeader>

                <CalenderArea>
                    <CalenderWeekDay>Mon</CalenderWeekDay>
                    <CalenderWeekDay>Mon</CalenderWeekDay>
                    <CalenderWeekDay>Mon</CalenderWeekDay>
                    <CalenderWeekDay>Mon</CalenderWeekDay>
                    <CalenderWeekDay>Mon</CalenderWeekDay>
                    <CalenderWeekDay>Mon</CalenderWeekDay>
                    <CalenderWeekDay>Mon</CalenderWeekDay>
                    {/* 
                            if(date not in month) color: var(--system-color-grey-500); 
                            if(current date) background-color: #ec4d3c; 
                            <CalenderDayBlock>
                                <CalenderDate>1</CalenderDate>
                            </CalenderDayBlock>
                    */}
                    {Array(35)
                        .fill(0)
                        .map((_, index) => (
                            <>
                                <CalenderDayBlock>
                                    <CalenderDate>{index}</CalenderDate>
                                </CalenderDayBlock>
                            </>
                        ))}
                </CalenderArea>
            </MainContainer>
        </>
    );
};

export default Calender;
