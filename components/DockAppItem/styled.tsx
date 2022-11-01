import { motion } from 'framer-motion';
import styled from 'styled-components';

const DockItem = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border: 0.5rem;
    align-items: center;
    margin: 0rem 0.05rem;
`;

const DockTooltip = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    position: absolute;
    background-color: hsla(var(--system-header-hsl), 0.5);
    backdrop-filter: blur(7px);
    padding: 0.5rem 0.75rem;
    border-radius: 0.4rem;
    box-shadow: var(--shadow-tooltip-dock);
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.01rem;
    z-index: 70;
    top: -2.5rem;
`;

const DockAppImage = styled(motion.div)`
    will-change: width;
    width: 100%;
    height: 100%;

    span:first-child {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain;
        border-radius: 0.5rem;
        aspect-ratio: 1/1;
    }
`;

const DockIsAppOpenDot = styled.span`
    height: 0.2rem;
    width: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--system-color-light-contrast);
`;

export { DockItem, DockTooltip, DockAppImage, DockIsAppOpenDot };
