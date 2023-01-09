import { motion } from 'framer-motion';
import styled from 'styled-components';

const LaunchMainContainer = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(14px);
    z-index: 400;
    flex: 1;
    background-color: rgba(10, 10, 10, 0.17);
    overflow: auto;
    /* transition: all 900ms cubic-bezier(0.6, -0.28, 0.735, 0.045); */
    will-change: width, height;
`;

const LaunchContainer = styled.div`
    margin: auto;
    width: 100%;
    max-width: 55rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 3.5rem 1rem;
    overflow: auto;
`;

const LaunchHeader = styled.section`
    position: relative;
    padding: 0.5rem;
    text-align: center;
    color: var(--system-text-white);
`;

const LaunchInput = styled.input`
    height: 2.25rem;
    width: 15rem;
    border: 2px solid white;
    border-radius: 0.3rem;
    outline: none;
    backdrop-filter: blur(15px);
    background-color: transparent;
    font-size: 0.9rem;
    text-align: center;
    font-weight: 300;
    color: var(--system-text-white);
    padding: 0rem 0.5rem;

    ::placeholder {
        color: var(--system-text-white);
    }
`;

const LaunchAction = styled.button`
    height: auto;
    width: 1.5rem;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    align-items: center;
    right: 0.5rem;
    top: 1.125rem;
    color: var(--system-text-white);
`;

const LaunchAppModal = styled.section`
    padding: 4rem 1rem 2.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(6.5rem, 1fr));
    overflow-y: auto;
    gap: 1.9rem;
    text-align: center;
    height: 100%;
    width: 100%;
`;

const LaunchAppContainer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    width: 7rem;
    gap: 0.5rem;
    margin: auto;
`;

const LaunchAppIcon = styled.span`
    width: 4.5rem;
    height: auto;

    span:first-child {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain;
        border-radius: 0.5rem;
        aspect-ratio: 1/1;
    }
`;

const LaunchAppName = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.01rem;
    color: var(--system-text-white);
`;

export {
    LaunchMainContainer,
    LaunchContainer,
    LaunchHeader,
    LaunchAppModal,
    LaunchAction,
    LaunchInput,
    LaunchAppContainer,
    LaunchAppIcon,
    LaunchAppName,
};
