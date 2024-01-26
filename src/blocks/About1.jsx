import "../assets/Styles/About1.css";
import {Button} from "../components/Button.jsx";
import CircleIcon from "../components/CircleIcon.jsx";

import bg_img from '../assets/img/bg.png';

const About1 = () => {
    return (
        <section className="about-we">
            <div className="container">
                <div className="about-we__label">
                    <h2 className="title">
                        Transform, Transcend, Triumph
                    </h2>
                    <p className="subtitle">
                        What We Do
                    </p>
                </div>
                <div className="about-we__items">
                    <div className="about-we__item item-about-we">
                        <CircleIcon iconName="gear"/>
                        <h2 className="item-about-we__title">
                            Operational Consulting
                        </h2>
                        <p className="item-about-we__subtitle">
                            With 25+ years of operational excellence, we optimize your processes for maximum efficiency
                            and profitability.
                        </p>
                    </div>
                    <div className="about-we__item item-about-we">
                        <CircleIcon iconName="book"/>
                        <h2 className="item-about-we__title">
                            Strategy Consulting
                        </h2>
                        <p className="item-about-we__subtitle">
                            Our strategic insights drive your business forward, aligning your goals with actionable
                            plans for growth and success.
                        </p>
                    </div>
                    <div className="about-we__item item-about-we">
                        <CircleIcon iconName="chart-pie"/>
                        <h2 className="item-about-we__title">
                            Financial Consulting
                        </h2>
                        <p className="item-about-we__subtitle">
                            25+ years of expert financial guidance, $40M+ in client profits. Your financial success, our
                            commitment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;
