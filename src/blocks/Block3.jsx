import "../assets/styles/Block3.css";
import img_src from "../assets/img/about/about-2-570x280.jpg";
import {Button} from "../components/Button.jsx";
import React from "react";

const Block3 = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-wrap">
                    <h2 className="about-title">About Us</h2>
                    <div className="about-devider"></div>
                    <div className="about-block">
                        <div className="about-img">
                            <a href="" className="about-promo"></a>
                            <img src={img_src} alt=""/>
                        </div>
                        <div className="about-item">
                            <h4 className="about-item-title">
                                Doing the right thing at the right time.
                            </h4>
                            <p className="about-descr">
                                Welcome to the leading company on the market! Our success is
                                driven by the highest quality customer service. We can meet the
                                requirements even of the whimsical clients; there are no complex
                                tasks for us! Thanks for your choice! Our company can boast the
                                reputation of the trusted partner known worldwide. We are proud
                                of the uncompromising quality of services our company provides.
                            </p>
                            <div style={{display:'flex'}}>
                                <Button isLink={true} label={'Read more'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Block3;