import "./styleTechnologies.scss";
import { useState } from "react";
import js_logo from "../../assets/img/java-script.svg";

const Round = (props) => {
  const nums = props.variable;
  const activeButton = props.actBut;
  const handleClick = props.hndClk;

  return (
    <div className={activeButton === nums ? "techContPrimary" : "techCont"}>
      <div className="techContGraph">
        <button
          className={
            activeButton === nums ? "techContRoundExtra" : "techContRound"
          }
          onClick={() => handleClick(nums)}
        >
          <div />
        </button>
        <div className="techContLine" />
      </div>
      <p>Second technology description</p>
      <div className="techIcon">
        <div className="techContImg">
          <img src={js_logo} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Round;
