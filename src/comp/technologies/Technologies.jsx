import "./styleTechnologies.scss";
import js_logo from "../../assets/img/java-script.svg";
import Round from "./Round";
import { useState } from "react";

const Technologies = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <section className="Technologies">
      <div className="techCenter">
        <h1>Used technologies</h1>
        <div className="techP">
          <div className="techEnd">
            <p>
              Fill the gaps in your competencies by setting up a remote IT team.
              We will find the best experts for you and arrange everything
              around it. You will get a perfect match both in skills and
              cultural fit.
            </p>
          </div>
        </div>
      </div>
      <div className="techLine">
        <Round variable="0" actBut={activeButton} hndClk={handleClick} />
        <Round variable="1" actBut={activeButton} hndClk={handleClick} />
        <Round variable="2" actBut={activeButton} hndClk={handleClick} />
        <Round variable="3" actBut={activeButton} hndClk={handleClick} />
        <Round variable="4" actBut={activeButton} hndClk={handleClick} />
        <Round variable="5" actBut={activeButton} hndClk={handleClick} />
        <Round variable="6" actBut={activeButton} hndClk={handleClick} />
        <Round variable="7" actBut={activeButton} hndClk={handleClick} />
      </div>
    </section>
  );
};

export default Technologies;
