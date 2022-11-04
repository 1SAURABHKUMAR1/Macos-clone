import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from 'types';
import { colorsConfig } from 'helper/action-colors.config';

const WindowArea = styled.div`
    height: 100%;
    width: 100vw;
    justify-self: center;
    display: flex;
    flex: 1;
`;

const RightClickContextMenuContainer = styled(motion.section)`
    display: inline-block;
    min-width: 15rem;
    padding: 0.5rem;
    position: fixed;
    top: 0;
    left: 0;
    user-select: none;
    background-color: hsla(240, 3%, 11%, 0.3); //TODO:
    backdrop-filter: blur(15px); //TODO:
    border-radius: 0.5rem;
    box-shadow: var(--shadow-context-menu);
    z-index: 150;
    color: #ffffff;
`;

const RightClickMenuItem = styled.div<{ hoverColor: colors }>`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    letter-spacing: 0.4px;
    margin: 0.3rem 0;
    padding: 0.35rem 0.4rem;
    font-weight: 500;
    backface-visibility: hidden;
    font-size: 0.9rem;
    border-radius: 0.3rem;

    ${({ hoverColor }) =>
        `:hover
        {
            background-color: hsl(${colorsConfig[hoverColor]?.hsl});
        }
        `}
`;

const RightClickMenuDivider = styled.div`
    width: 100%;
    height: 0.09rem;
    background-color: hsla(var(--system-color-dark-hsl), 0.55);
    margin: 0.2rem 0rem;
`;

export {
    WindowArea,
    RightClickContextMenuContainer,
    RightClickMenuItem,
    RightClickMenuDivider,
};
