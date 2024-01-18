import '../assets/About.css';

import aboutLarge from '../assets/img/about_large.png';
import about01 from '../assets/img/about_1.png';
import about02 from '../assets/img/about_2.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBullseye, faRocket} from '@fortawesome/free-solid-svg-icons';

library.add(faBullseye, faRocket);

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__wrapper">
                    <div className="about__imgs">
                        <div style={{flex: '0 0 auto', width: '100%', maxWidth: '100%',marginTop:'24px',padding:'0 12px'}}>
                            <img src={aboutLarge} alt=""/>
                        </div>
                        <div style={{flex: '0 0 auto', width: '50%', paddingRight: '12px',marginTop:'24px',padding:'0 12px'}}>
                            <img src={about01} alt=""/>
                        </div>
                        <div style={{flex: '0 0 auto', width: '50%', paddingLeft: '12px',marginTop:'24px',padding:'0 12px'}}>
                            <img src={about02} alt=""/>
                        </div>
                    </div>
                    <div className="about__content content-about">
                        <div className="content-about__title">
                            <h2 className="title">
                                Most popular business company.
                            </h2>
                        </div>
                        <div className="content-about__items">
                            <div className="content-about__item">
                                <div className="content-about__icon">
                                    <FontAwesomeIcon icon="fa-solid fa-rocket"/>
                                </div>
                                <div className="content-about__text">
                                    <h4>
                                        Our mission
                                    </h4>
                                    <p>
                                        When your brand creates a genuine connection with
                                        customers and employees, they&apos;ll stay loyal to your
                                        company, thereby increasing your overall profitability.
                                    </p>
                                </div>
                            </div>
                            <div className="content-about__item">
                                <div className="content-about__icon">
                                    <FontAwesomeIcon icon="fa-solid fa-bullseye"/>
                                </div>
                                <div className="content-about__text">
                                    <h4>
                                        Our vision
                                    </h4>
                                    <p>
                                        That&apos;s aspirational, short and to the point. More than that, it sets the
                                        tone
                                        the company and makes it clear that they&apos;re in the market. We strive to
                                        exceed
                                        expectations and be the best
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
