import "../assets/styles/Dynamic.css";
import CircleIcon from "../components/CircleIcon.jsx";

const Dynamic = () => {
  return (
    <section className="dynamic-ya">
      <div className="container">
        <div className="dynamic-ya__wrap">
          <h2 className="dynamic-ya__title">Monetary Dynamics</h2>
          <div className="dynamic-ya__subtitle">
            Excellent for your business
          </div>
          <div className="dynamic-ya-block">
            <div className="dynamic-ya-block__item">
              <div className="dynamic-ya-block__icon">
                <CircleIcon iconName="object-ungroup" />
              </div>
              <h4 className="dynamic-ya-block__title">Modern design</h4>
              <p className="dynamic-ya-block__descr">
                Our design philosophy focuses on creating sleek and contemporary
                visual aesthetics. We ensure that every element is thoughtfully
                curated to eliminate any potential for embarrassment or
                inconsistency in the overall design.
              </p>
            </div>
            <div className="dynamic-ya-block__item">
              <div className="dynamic-ya-block__icon">
                <CircleIcon iconName="chart-line" />
              </div>
              <h4 className="dynamic-ya-block__title">Easy customize</h4>
              <p className="dynamic-ya-block__descr">
                Customization is a breeze with our platform. Unlike other
                generators that simply replicate predefined chunks, we pride
                ourselves on being the pioneer in providing a truly versatile
                and customizable experience.
              </p>
            </div>
            <div className="dynamic-ya-block__item">
              <div className="dynamic-ya-block__icon">
                <CircleIcon iconName="chart-simple" />
              </div>
              <h4 className="dynamic-ya-block__title">Clean code</h4>
              <p className="dynamic-ya-block__descr">
                Crafting a type specimen book is integral to our commitment to
                clean and efficient coding practices. Our codebase has stood the
                test of time, surviving centuries and electronic typesetting
                leaps while remaining fundamentally unchanged.
              </p>
            </div>
            <div className="dynamic-ya-block__item">
              <div className="dynamic-ya-block__icon">
                <CircleIcon iconName="server" />
              </div>
              <h4 className="dynamic-ya-block__title">Fully responsive</h4>
              <p className="dynamic-ya-block__descr">
                Our platform has evolved through various versions, adapting
                seamlessly to different devices. This evolution is a result of
                deliberate efforts to ensure responsiveness, providing an
                optimal user experience, whether by accident or design.
              </p>
            </div>
            <div className="dynamic-ya-block__item">
              <div className="dynamic-ya-block__icon">
                <CircleIcon iconName="chart-pie" />
              </div>
              <h4 className="dynamic-ya-block__title">Color scheme</h4>
              <p className="dynamic-ya-block__descr">
                Creating a type specimen book is part of our dedication to
                establishing a harmonious and visually pleasing color scheme.
                Our design has endured centuries of electronic typesetting
                without losing its essence.
              </p>
            </div>
            <div className="dynamic-ya-block__item">
              <div className="dynamic-ya-block__icon">
                <CircleIcon iconName="camera-retro" />
              </div>
              <h4 className="dynamic-ya-block__title">Excellent purchase</h4>
              <p className="dynamic-ya-block__descr">
                Our platform&aposs evolution has been intentional, ensuring that
                every version is an excellent purchase for users. Whether by
                accident or design, each iteration brings purposeful
                improvements and features to enhance the overall user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dynamic;
