import "../assets/Styles/Block1.css";
import CircleIcon from "../components/CircleIcon.jsx";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const Block1 = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info-block">
          <div className="info-item">
            <CircleIcon size={'big'} iconName="laptop"/>
            <div className="info-title">PROFOUND MARKET INSIGHTS</div>
            <div className="info-subtitle">
              Stay ahead of the competition with in-depth market analysis.
            </div>
          </div>
          <div className="info-item">

            <CircleIcon size={'big'} iconName="question"/>

            <div className="info-title">EFFICIENT BUSINESS STRATEGY</div>
            <div className="info-subtitle">
              Develop a winning approach to maximize success and growth.
            </div>
          </div>
          <div className="info-item">
            <CircleIcon size={'big'} iconName="briefcase"/>
            <div className="info-title">POWERFUL MARKETING TOOLS</div>
            <div className="info-subtitle">
              Harness the latest tools to reach your target audience
              effectively.
            </div>
          </div>
          <div className="info-item">
            <CircleIcon size={'big'} iconName="globe"/>
            <div className="info-title">STREAMLINED OPERATIONAL SOLUTIONS</div>
            <div className="info-subtitle">
              Optimize processes for seamless operations and increased
              efficiency.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block1;
