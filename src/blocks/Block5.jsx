import "../assets/Block5.css";

const Block5 = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-devider"></div>
        <div className="testimonials-block">
          <div className="testimonials-item">
            <div className="testimonials-icon">
              <img src="src/assets/img/testimonials/home-6-72x72.jpg" alt="" />
            </div>
            <p className="testimonials-descr">
              &quot;Great organization!! Your prompt answer became a pleasant
              surprise for me. Thank you!&quot;
            </p>
            <h5 className="testimonials-item-title">Jack Walsh</h5>
            <div className="testimonials-subtitle">(CEO & Founder)</div>
          </div>
          <div className="testimonials-item">
            <div className="testimonials-icon">
              <img src="src/assets/img/testimonials/home-4-72x72.jpg" alt="" />
            </div>
            <p className="testimonials-descr">
              &quot;Hi, guys! You&apos;ve solved my problem in no time! Your
              efficient services and customer care are second to none!&quot;
            </p>
            <h5 className="testimonials-item-title">Adam Watson</h5>
            <div className="testimonials-subtitle">(CEO & Founder)</div>
          </div>
          <div className="testimonials-item">
            <div className="testimonials-icon">
              <img src="src/assets/img/testimonials/home-7-72x72.jpg" alt="" />
            </div>
            <p className="testimonials-descr">
              &quot;Hi, guys! You&apos;ve solved my problem in no time! Your
              efficient services and customer care are second to none!&quot;
            </p>
            <h5 className="testimonials-item-title">David Austin</h5>
            <div className="testimonials-subtitle">(CEO & Founder)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block5;
