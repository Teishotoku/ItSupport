import "./styleChoose.scss";
import { useState } from "react";

const Choose = () => {
  const [text, setText] = useState("A small text");
  function textClick(content) {
    setText(content);
  }
  return (
    <section className="Choose">
      <div className="whyAbout">
        <div className="whySize">
          <h1>Why choose us?</h1>
          <p>
            Fill the gaps in your competencies by setting up a remote IT team.
            We will find the best experts for you and arrange everything around
            it. You will get a perfect match both in skills and cultural fit.
          </p>
        </div>
      </div>

      <div className="whyPoint">
        <div className="pointScroll">
          <button className="select" onClick={() => textClick("первая")}>
            <p>Team</p>
          </button>
          <button className="noSelect" onClick={() => textClick("вторая")}>
            <p>Community</p>
          </button>
          <button className="noSelect" onClick={() => textClick("третья")}>
            <p>Solution</p>
          </button>
          <button className="noSelect" onClick={() => textClick(8 * 35)}>
            <p>Quality</p>
          </button>
        </div>
        <div className="pointAbout">
          <div className="pointCenter">
            <h1>Close-knit team</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
