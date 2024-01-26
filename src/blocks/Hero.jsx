import RandomVideo from "../components/RandomVideo.jsx";
import ScrollDown from "../components/ScrollDown.jsx";

import '../assets/styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__bg">
                <div className="hero__overlay"></div>
                <RandomVideo/>
            </div>
                <div className="hero__label">
                    <h2>Finance Consulting Company</h2>
                    <h1>Streamlining Financial Oversight</h1>
                    <p>Simplifying Daily Operations.</p>
                </div>
            <div className="scrollDownBtn">
                <ScrollDown label="Scroll Down" fontSize="20px" width="30px" height="30px" fontWeight="100" color="#fff" />
            </div>
        </section>
    );
};

export default Hero;
