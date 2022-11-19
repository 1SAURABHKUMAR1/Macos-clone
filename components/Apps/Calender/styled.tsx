import styled from 'styled-components';

const MainContainer = styled.section`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    color: #fff;
    fill: #fff;
    user-select: none;
`;

const CalenderHeader = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.65rem 1.7rem;
`;

const CalenderMonthYear = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const CalenderMonth = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
`;

const CalenderYear = styled.span`
    font-size: 1.5rem;
`;

const CalenderControlButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.3rem;
`;

const CalenderControlButton = styled.button`
    border-radius: 0.35rem;
    background-color: var(--system-color-grey-800);
    font-weight: 500;
    font-size: 0.89rem;
    padding: 0.2rem 0.55rem;
    height: 1rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 1.2rem;
    }
`;

const CalenderArea = styled.section`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto repeat(5, 1fr);
    flex: 1;
    font-size: 0.95rem;
    margin-top: 0.3rem;
`;

const CalenderWeekDay = styled.div`
    padding: 0.5rem 0.7rem 0.7rem 0.5rem;
    text-align: end;
    border-bottom: 1.5px solid #c7c7cc;
`;

const CalenderDayBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    border: 1px solid #e6e5e6;
    border-top: none;
    padding: 0.5rem;

    &:nth-child(1n) {
        border-left: none;
    }

    &:nth-child(7n) {
        border-right: none;
    }
    &:nth-child(n + 36) {
        border-bottom: none;
    }
`;

const CalenderDate = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 1.02rem;
`;

export {
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
};
