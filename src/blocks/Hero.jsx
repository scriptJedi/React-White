// Block1.js
import React from 'react';
import ScrollDown from "../components/ScrollDown";
import '../assets/Hero.css';
// import heroImage from '../assets/img/hero.webp';
import hero_vid from '../assets/video/hero_1.mp4'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__bg">
                <div className="hero__overlay"></div>
                <video muted autoPlay loop src={hero_vid}></video>
                {/*<img src={heroImage} alt="Hero Image"/>*/}
            </div>
                <div className="hero__label">
                    <h2>Finance Courses</h2>
                    <h1>Simplified Course Supervision</h1>
                    <p>Streamline administrative tasks and simplify daily operations.</p>
                </div>
            <div className="scrollDownBtn">
                <ScrollDown label="Scroll Down" fontSize="20px" width="30px" height="30px" fontWeight="bold" color="#fff" />
            </div>
        </section>
    );
};

export default Hero;
