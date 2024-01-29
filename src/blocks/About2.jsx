import "../assets/styles/About2.css";
import img_src from "../assets/img/about/about-2-570x280.jpg";
import { Button } from "../components/Button.jsx";
import React from "react";

const About2 = () => {
  return (
    <section className="about-je">
      <div className="container">
        <div className="about-je-wrap">
          <h2 className="about-je-title">About Us</h2>
          <div className="about-je-block">
            <div className="about-je-block__img">
              <a href="" className="about-je-block__promo"></a>
              <img src={img_src} alt="" />
            </div>
            <div className="about-je-block__item">
              <h4 className="about-je-block__title">
                Doing the right thing at the right time.
              </h4>
              <p className="about-je-block__descr">
                Welcome to the leading company on the market! Our success is
                driven by the highest quality customer service. We can meet the
                requirements even of the whimsical clients; there are no complex
                tasks for us! Thanks for your choice! Our company can boast the
                reputation of the trusted partner known worldwide. We are proud
                of the uncompromising quality of services our company provides.
              </p>
              <div style={{ display: "flex" }}>
                <Button isLink={true} label={"Read more"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
