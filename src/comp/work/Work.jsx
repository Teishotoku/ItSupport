import "./styleWork.scss";

const Work = () => {
  return (
    <section className="Work">
      <div className="workCenter">
        <h1>How we work?</h1>
        <div className="frames">
          <div className="workFrameNoBorder">
            <h1>Requirements analysis and statement of work</h1>
          </div>
          <div className="workFrame">
            <h1>Design (if required)</h1>
            <p>Some words about this step in our work</p>
          </div>
          <div className="workFrame">
            <h1>Development, show demo version</h1>
            <p>Some words about this step in our work</p>
          </div>
          <div className="workFrame">
            <h1>Testing, completion</h1>
            <p>Some words about this step in our work</p>
          </div>
          <div className="workFrame">
            <h1>Product launch</h1>
            <p>Some words about this step in our work</p>
          </div>
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
