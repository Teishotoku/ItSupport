import "./styleGoals.scss";

const Goals = () => {
  return (
    <section className="Goals">
      <h1>What are our goals?</h1>

      <div className="slides">
        <div className="Line">
          <div className="slide firstSlide">
            <h1>01</h1>
            <div />
            <h2>Title of the first Goal</h2>
            <p>A small text describing one of the goals in two lines</p>
          </div>
          <div className="slide secondSlide">
            <h1>02</h1>
            <div />
            <h2>Title of the second Goal</h2>
            <p>A small text describing one of the goals in two lines</p>
          </div>
          <div className="thirdSlide" />
        </div>
        <div className="Line">
          <div className="fourSlide" />
          <div className="slide fiveSlide">
            <h1>03</h1>
            <div />
            <h2>Title of the third Goal</h2>
            <p>
              A small text describing one of the goals in two lines. A small
              text describing one of the goals in two lines
            </p>
          </div>
        </div>
        <div className="Line">
          <div className="slide sixSlide">
            <h1>04</h1>
            <div />
            <h2>Title of the fourth Goal</h2>
            <p>
              A small text describing one of the goals in two lines. A small
              text describing one of the goals in two lines
            </p>
          </div>
          <div className="sevenSlide" />
        </div>
      </div>
    </section>
  );
};

export default Goals;
