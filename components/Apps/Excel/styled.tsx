import styled from 'styled-components';
import type { CSSProperties } from 'react';

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
    overflow-y: hidden;
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
    overflow-y: hidden;
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
    overflow: hidden;
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

    .row-cell:hover {
        background-color: var(--active-grey) !important;
    }

    .column-cell:hover {
        background-color: var(--active-grey) !important;
    }

    .cell {
        border: 2px solid var(--excel-green) !important;
    }
`;

const LeftDummyBox: CSSProperties = {
    top: '0px',
    left: '0px',
    padding: '0.3rem',
    backgroundColor: 'var(--mid-grey)',
    borderBottom: '1px solid var(--active-grey)',
    borderRight: '1px solid var(--active-grey)',
};

const InnerDummyBox: CSSProperties = {
    width: '100%',
    height: '1.4rem',
    backgroundColor: 'var(--active-grey)',
    clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
};

const RowNumber: CSSProperties = {
    borderBottom: '1px solid var(--active-grey)',
    borderRight: '1px solid var(--active-grey)',
    padding: '0.4rem',
    textAlign: 'center',
    zIndex: 5,
    backgroundColor: 'var(--mid-grey)',
};

const ColumnNumber: CSSProperties = {
    borderBottom: 'var(--active-grey) 1px solid',
    borderRight: 'var(--active-grey) 1px solid',
    height: '2rem',
    width: '5rem',
    padding: '0.4rem',
    textAlign: 'center',
    zIndex: '5',
    backgroundColor: 'var(--mid-grey)',
};

const Cell: CSSProperties = {
    borderLeft: 'none',
    borderTop: 'none',
    appearance: 'none',
    borderBottom: '1px solid var(--active-grey)',
    borderRight: '1px solid var(--active-grey)',
    padding: '0.4rem',
    cursor: 'cell',
    outline: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};

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
    RowNumber,
    ColumnNumber,
    Cell,
    SheetContainer,
    SheetIcon,
    SheetList,
};
