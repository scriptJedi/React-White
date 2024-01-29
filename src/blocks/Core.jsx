import "../assets/styles/Core.css";
import CircleIcon from "../components/CircleIcon.jsx";

const Core = () => {
  return (
    <section className="core-de">
      <div className="container">
        <div className="core-de__wrap">
          <h5 className="core-de__title">HERE ARE SOME OF THE</h5>
          <h2 className="core-de__subtitle">CORE FEATURES OF THE INSIDE</h2>
          <div className="core-de-block">
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="mobile-screen" />
              <p className="core-de-block__descr">
                Cutting-edge Responsive Design: Our business solution boasts an
                ultra-responsive layout that adapts seamlessly to all screens,
                ensuring your website looks its best on any device.
              </p>
            </div>
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="gear" />
              <p className="core-de-block__descr">
                Endless Customization Possibilities: With hundreds of options
                and variations to configure, you have the freedom to personalize
                every aspect of your website to reflect your brand identity and
                meet your business goals.
              </p>
            </div>
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="lightbulb" />
              <p className="core-de-block__descr">
                Extensive Shortcodes Library: Enjoy access to a vast range of
                shortcodes that simplify the creation of complex elements,
                providing you with endless design possibilities and allowing you
                to highlight your business offerings effortlessly.
              </p>
            </div>
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="sliders" />
              <p className="core-de-block__descr">
                Versatile Portfolio Layouts: Showcase your work in style with
                our multiple portfolio layout options. Whether you&apos;re a
                creative agency or a professional service provider, you can
                present your projects in a way that captivates and engages your
                audience.
              </p>
            </div>
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="chart-pie" />
              <p className="core-de-block__descr">
                Customizable Header Options: Make a lasting first impression
                with our selection of multiple header layouts. With full
                customization capabilities, you can tailor your header to create
                a unique and impactful aesthetic that aligns with your brand.
              </p>
            </div>
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="cloud" />
              <p className="core-de-block__descr">
                Blazing-Fast Performance: Our solution is optimized for
                high-ranking page speed performance, ensuring your website loads
                quickly and efficiently. Enjoy a seamless browsing experience
                for your visitors, improving their engagement and satisfaction.
              </p>
            </div>
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="thumbs-up" />
              <p className="core-de-block__descr">
                Creative and Powerful Design: Stand out from the competition
                with a design that is both visually compelling and strategically
                powerful. Our solution offers a unique and creative design,
                empowering your business to leave a lasting impression on your
                target audience.
              </p>
            </div>
            <div className="core-de-block__item">
              <CircleIcon size={"small"} iconName="mug-hot" />
              <p className="core-de-block__descr">
                Businesses aim to create value and meet consumer needs. They
                identify opportunities, build relationships, embrace technology,
                and practice ethical conduct.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core;
