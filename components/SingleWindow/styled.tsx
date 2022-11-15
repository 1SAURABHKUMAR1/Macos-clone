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
`;

const AppHeader = styled.div`
    padding: 0.6rem 1rem;
    width: 100%;
    top: 0;
    left: 0;
    position: relative;
    border-radius: 0.75rem 0.75rem 0 0;
    border-bottom: solid 0.9px #1b1b1d4d;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
`;

const AppName = styled.span`
    text-align: center;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

const AppControlContainer = styled.div`
    position: absolute;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    gap: 0.7rem;

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
    height: 100%;
    width: 100%;
    overflow: auto;
`;

export {
    AppContainer,
    AppHeader,
    AppName,
    MainAppArea,
    AppControlContainer,
    ControlButton,
};
