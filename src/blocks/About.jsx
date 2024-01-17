import '../assets/About.css';

import aboutLarge from '../assets/img/about_large.png'
import about01 from '../assets/img/about_1.png'
import about02 from '../assets/img/about_2.png'

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
                <div style={{display:'grid'}}>
                    <div style={{display:'flex'}}>
                        <div>
                            <img src={aboutLarge} alt=""/>
                        </div>
                        <div>
                            <img src={about01} alt=""/>
                            <img src={about02} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
