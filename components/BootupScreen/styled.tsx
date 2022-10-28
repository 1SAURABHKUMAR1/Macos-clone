import styled from 'styled-components';

const BootupContainer = styled.div`
    background-color: var(--system-color-light-contrast);
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    /* cursor: none; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    transition: all 10ms ease-in;
    animation-fill-mode: forwards;
`;

const BootupIcon = styled.button`
    color: var(--system-color-light);
    font-size: 8rem;
`;

const BootupProgressBar = styled.section`
    border-radius: 0.5rem;
    height: 0.25rem;
    width: 10rem;
    overflow-x: hidden;
    background-color: var(--system-color-grey-800);
`;

const BootupLoading = styled.section`
    background-color: var(--system-color-grey-100);
    border-radius: inherit;
    width: 100%;
    height: 100%;
`;

export { BootupContainer, BootupIcon, BootupProgressBar, BootupLoading };