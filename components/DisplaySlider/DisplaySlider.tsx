import type { NextPage } from 'next';
import { useSystemStore } from '@store/index';
import { Sun } from 'react-feather';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { DisplaySliderContainer, DisplaySliderIcon } from './styled';

const DisplaySlider: NextPage = () => {
    const { brightness, changeBrightness } = useSystemStore((state) => state);

    const toggleBrightness = (value: number) => changeBrightness(value);

    return (
        <>
            <DisplaySliderContainer className="slider">
                <DisplaySliderIcon>
                    <Sun size="0.95em" />
                </DisplaySliderIcon>
                <Slider
                    min={20}
                    max={120}
                    value={brightness}
                    tooltip={false}
                    orientation="horizontal"
                    onChange={toggleBrightness}
                />
            </DisplaySliderContainer>
        </>
    );
};

export default DisplaySlider;
