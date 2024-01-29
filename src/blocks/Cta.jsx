import "../assets/styles/Cta.css";
import {Button} from "../components/Button.jsx";

const Cta = ({ scrollToForm, id }) => {
    return (
        <section id={id} className="cta">
            <div className="container">
                <div className="cta__wrapper">
                    <h2 className="title">
                        Whatever the challenge, we
                        deliver a solution.
                    </h2>
                    <p className="subtitle">
                        Agencies around the world are moving to the digital agencies.
                        So, It is high time to introduce your agency digitaly.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button mode={'secondary'} label={'Contact us'} isLink={true} onClick={scrollToForm}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
