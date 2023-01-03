import styled from 'styled-components';

const MainContainer = styled.section`
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    user-select: none;
`;

const NavigationBar = styled.section`
    background-color: var(--excel-green);
    width: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    padding: 0.65rem 0.7rem;
    color: var(--white-text);
    overflow: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const NavigationBarItem = styled.span`
    padding: 0 0.7rem;
    font-size: 0.9rem;
    cursor: pointer;
`;

const ToolbarContainer = styled.section`
    width: 100%;
    background-color: var(--mid-grey);
    border-bottom: var(--active-grey) 1px solid;
    display: flex;
    align-items: center;
    padding: 0.65rem 1.4rem;
    overflow-x: auto;
    column-gap: 1.2rem;
    position: relative;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const ToolbarIcon = styled.span`
    font-size: 1.3rem;
    cursor: pointer;
    padding: 0.2rem;

    :hover {
        background-color: var(--hover-grey);
        border-radius: 0.2rem;
    }

    svg {
        fill: var(--system-color-grey-900);
    }
`;

const ToolbarSelectItem = styled.select`
    padding: 0.4em 0.1rem;
    border-radius: 0.2rem;
    outline: none;
    border: none;
    background-color: var(--mid-grey);

    :hover {
        background-color: var(--hover-grey);
        border-radius: 0.2rem;
    }
`;

const ToolbarSelectOption = styled.option`
    padding: 0.6rem;
    outline: var(--active-grey);
    border: none;
    text-decoration: none;
`;

const ToolbarInput = styled.input`
    max-width: 1.5rem;
    position: absolute;
    opacity: 0;
`;

const FormulaAndCellContainer = styled.section`
    z-index: 10;
    width: 100%;
    background-color: var(--mid-grey);
    border-bottom: var(--active-grey) 1px solid;
    display: flex;
    padding: 0.65rem 1.4rem;
    align-items: center;
    column-gap: 1.3rem;
    overflow: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const FormulaBarCellAddress = styled.input`
    border-radius: 0.2rem;
    border: var(--active-grey) solid 1px;
    background-color: #fff;
    height: 1.8rem;
    width: 4rem;
    font-size: 1.2rem;
    padding: 0.3rem 0.5rem;
    outline: none;
    overflow: hidden;
    text-align: center;
    min-width: 4rem;
`;

const FormulaBarIcon = styled.span`
    height: 1.5rem;
    width: 1.5rem;
    min-width: 1.5rem;

    span:first-child {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 0.5rem;
        aspect-ratio: 1/1;
        transition: box-shadow 100ms ease-in;
    }
`;

const FormulaBarInput = styled.input`
    background-color: #fff;
    border-radius: 0.2rem;
    height: 1.8rem;
    border: solid 1px var(--active-grey);
    width: 100%;
    max-width: 60rem;
    outline: none;
    padding: 0.2rem 0.5rem;
    min-width: 17.5rem;
`;

const CellRowColumnContainer = styled.section`
    position: relative;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: var(--mid-grey);
    overflow: auto;
    scrollbar-width: thin;
`;

const LeftDummyBox = styled.div`
    top: 0px;
    left: 0px;
    width: 2.5rem;
    height: 2rem;
    position: sticky;
    z-index: 10;
    padding: 0.3rem;
    background-color: var(--mid-grey);
    border-bottom: 1px solid var(--active-grey);
    border-right: 1px solid var(--active-grey);
`;

const InnerDummyBox = styled.div`
    width: 100%;
    height: 1.4rem;
    background-color: var(--active-grey);
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
`;

const RowAddressContainer = styled.div`
    position: sticky;
    top: 2rem;
    left: 0px;
    z-index: 1;
    max-width: 2.5rem;
`;

const CellsContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 2.5rem;
    width: auto;
`;

const ColumnAddressContainer = styled.div`
    display: flex;
    position: sticky;
    top: 0px;
`;

const SingleRowNumber = styled.div`
    border-bottom: 1px solid var(--active-grey);
    border-right: 1px solid var(--active-grey);
    height: 2rem;
    width: 2.5rem;
    padding: 0.4rem;
    text-align: center;
    z-index: 5;
    background-color: var(--mid-grey);

    :hover {
        background-color: var(--active-grey);
    }
`;

const SingleColumnNumber = styled.div`
    border-bottom: var(--active-grey) 1px solid;
    border-right: var(--active-grey) 1px solid;
    height: 2rem;
    width: 5rem;
    padding: 0.4rem;
    text-align: center;
    z-index: 5;
    background-color: var(--mid-grey);

    :hover {
        background-color: var(--active-grey);
    }
`;

const CellRow = styled.div`
    display: flex;
    align-items: center;
`;

const Cell = styled.div<{ active?: boolean }>`
    border-bottom: 1px solid var(--active-grey);
    border-right: 1px solid var(--active-grey);
    height: 2rem;
    width: 5rem;
    padding: 0.4rem;
    cursor: cell;
    outline: none;
    overflow: hidden;
    white-space: nowrap;

    ${({ active }) =>
        active === true && 'border: 2px solid var(--excel-green);'}
`;

const SheetContainer = styled.section`
    background-color: var(--mid-grey);
    border-top: var(--active-grey) 1px solid;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.35rem 1.4rem;
    column-gap: 1.3rem;
    font-weight: 500;

    span:hover {
        background-color: var(--hover-grey);
        border-radius: 0.2rem;
    }
`;

const SheetIcon = styled.span`
    font-size: 1.6rem;
    cursor: pointer;
`;

const SheetList = styled.span<{ active?: boolean }>`
    cursor: pointer;
    padding: 0.2rem;

    ${({ active }) => active === true && 'border-bottom: #000000 2px solid;'}
`;

export {
    MainContainer,
    NavigationBar,
    NavigationBarItem,
    ToolbarContainer,
    ToolbarSelectItem,
    ToolbarIcon,
    ToolbarSelectOption,
    ToolbarInput,
    FormulaAndCellContainer,
    FormulaBarCellAddress,
    FormulaBarIcon,
    FormulaBarInput,
    CellRowColumnContainer,
    LeftDummyBox,
    InnerDummyBox,
    RowAddressContainer,
    ColumnAddressContainer,
    CellsContainer,
    SingleRowNumber,
    SingleColumnNumber,
    CellRow,
    Cell,
    SheetContainer,
    SheetIcon,
    SheetList,
};
