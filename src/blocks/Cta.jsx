import "../assets/styles/Cta.css";
import {Button} from "../components/Button.jsx";
import React from "react";

import bg_img from '../assets/img/bg.png';

const Cta = () => {
    return (
        <section className="cta">
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
                        <Button mode={'secondary'} label={'Contact us'} isLink={true}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
