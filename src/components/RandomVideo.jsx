import React, { useEffect, useState } from 'react';
import '../assets/styles/Hero.css';

import hero1 from '../assets/video/hero_1.mp4';
import hero2 from '../assets/video/hero_2.mp4';
import hero3 from '../assets/video/hero_3.mp4';
import hero4 from '../assets/video/hero_4.mp4';
import hero5 from '../assets/video/hero_5.mp4';

const videoSources = [hero1, hero2, hero3, hero4, hero5];

const RandomVideo = () => {
    const [randomVideoSource, setRandomVideoSource] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videoSources.length);
        setRandomVideoSource(videoSources[randomIndex]);
    }, []);

    return (
        <video muted autoPlay loop src={randomVideoSource}></video>
    );
};

export default RandomVideo;

