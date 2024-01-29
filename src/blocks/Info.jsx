import "../assets/styles/Info.css";
import CircleIcon from "../components/CircleIcon.jsx";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <section className="info-be">
      <div className="container">
        <div className="info-be-block">
          <div className="info-be-block__item">
            <CircleIcon size={"big"} iconName="laptop" />
            <div className="info-be-block__title">PROFOUND MARKET INSIGHTS</div>
            <div className="info-be-block__subtitle">
              Stay ahead of the competition with in-depth market analysis.
            </div>
          </div>
          <div className="info-be-block__item">
            <CircleIcon size={"big"} iconName="question" />

            <div className="info-be-block__title">
              EFFICIENT BUSINESS STRATEGY
            </div>
            <div className="info-be-block__subtitle">
              Develop a winning approach to maximize success and growth.
            </div>
          </div>
          <div className="info-be-block__item">
            <CircleIcon size={"big"} iconName="briefcase" />
            <div className="info-be-block__title">POWERFUL MARKETING TOOLS</div>
            <div className="info-be-block__subtitle">
              Harness the latest tools to reach your target audience
              effectively.
            </div>
          </div>
          <div className="info-be-block__item">
            <CircleIcon size={"big"} iconName="globe" />
            <div className="info-be-block__title">
              STREAMLINED OPERATIONAL SOLUTIONS
            </div>
            <div className="info-be-block__subtitle">
              Optimize processes for seamless operations and increased
              efficiency.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
