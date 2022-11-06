import styled from 'styled-components';

const TotalDockArea = styled.section`
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 5.5rem;
    padding: 0.4rem 0.4rem 0.8rem 0.4rem;
    display: flex;
    justify-content: center;
`;

const DockContainer = styled.div`
    position: relative;
    height: 100%;
    border-radius: 1.25rem;
    padding: 0.3rem;
    background-color: hsla(var(--system-header-hsl), 0.27);
    display: flex;
    align-items: flex-end;
    box-shadow: var(--shadow-action-menu);
    backdrop-filter: blur(12px);
`;

const DockDivider = styled.div`
    width: 0.08rem;
    height: 100%;
    background-color: hsla(var(--system-color-dark-hsl), 0.55);
    margin: 0 0.2rem;
`;

export { TotalDockArea, DockContainer, DockDivider };
