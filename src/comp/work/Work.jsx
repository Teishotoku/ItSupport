import "./styleWork.scss";
import Frame from "./frame";

const Work = () => {
  return (
    <section className="Work">
      <div className="workCenter">
        <h1>How we work?</h1>
        <div className="frames">
          <div className="workFrameNoBorder">
            <h1>Requirements analysis and statement of work</h1>
          </div>
          <Frame title="Design (if required)" />
          <Frame title="Development, show demo version" />
          <Frame title="Testing completion" />
          <Frame title="Product launch" />
          <div className="workFrame workFrameGap">
            <h1>Continued technical support</h1>
            <p>
              Some words about this step in our work. Some words about this step
              in our work. Some words about this step in our work.
            </p>
          </div>
        </div>
        <div className="learnRound">
          <p>Learn</p>
          <p>More</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
