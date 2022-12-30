import { motion } from 'framer-motion';
import styled from 'styled-components';

const AppContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    will-change: width, height;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    opacity: 1;
    backdrop-filter: blur(35px);
`;

const AppHeader = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: relative;
    border-radius: 0.75rem 0.75rem 0 0;
    display: flex;
    align-items: center;
    padding: 1.08rem;
`;

const AppControlContainer = styled.div`
    position: absolute;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    gap: 0.62rem;

    :hover {
        button {
            transform: scale(1.2);
        }

        svg {
            transform: scale(1.2);
            opacity: 1;
        }
    }
`;

const ControlButton = styled.button<{
    buttonType: 'close' | 'minmize' | 'maximize';
}>`
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    transition: transform 100ms ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${({ buttonType }) =>
        buttonType === 'close'
            ? `
                background-color: var(--close-bg-color);
                box-shadow: 0 0 0 1px var(--close-box-shadow);


                svg {
                    height: 8px;
                    width: 8px;
                    opacity: 0;
                }
            `
            : buttonType === 'minmize'
            ? `
                background-color: var(--minimize-bg-color);
                box-shadow: 0 0 0 1px var(--minimize-box-shodow); 

                svg {
                    height: 8px;
                    width: 8px;
                    opacity: 0;
                }
                `
            : buttonType === 'maximize'
            ? `     
                background-color: var(--maximize-bg-color);
                box-shadow: 0 0 0 1px var(--maximize-box-shadow);
                
                svg {
                    height : 10px;
                    width: 10px;
                    opacity: 0;
                }
            `
            : ''}
`;

const MainAppArea = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    overflow: hidden;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
`;

export {
    AppContainer,
    AppHeader,
    MainAppArea,
    AppControlContainer,
    ControlButton,
};
