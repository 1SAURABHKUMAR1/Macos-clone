import type { NextPage } from 'next';

import { DisplaySliderContainer, DisplaySliderIcon } from './styled';

import { useState } from 'react';
import { Sun } from 'react-feather';
import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.css';

const DisplaySlider: NextPage = () => {
    const [brightness, setBrightness] = useState<number>(100);

    return (
        <>
            <DisplaySliderContainer className="slider">
                <DisplaySliderIcon>
                    <Sun size="0.95em" />
                </DisplaySliderIcon>
                <Slider
                    min={20}
                    max={100}
                    value={brightness}
                    tooltip={false}
                    orientation="horizontal"
                    onChange={(value) => setBrightness(value)}
                />
            </DisplaySliderContainer>
        </>
    );
};

export default DisplaySlider;
