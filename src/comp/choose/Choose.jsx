import "./styleChoose.scss";

const Choose = () => {
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
          <button className="select">
            <p>Team</p>
          </button>
          <button className="noSelect">
            <p>Community</p>
          </button>
          <button className="noSelect">
            <p>Solution</p>
          </button>
          <button className="noSelect">
            <p>Quality</p>
          </button>
        </div>
        <div className="pointAbout">
          <div className="pointCenter">
            <h1>Close-knit team</h1>
            <p>
              A small text describing one of the goals in two lines. A small
              text describing one of the goals in two lines. A small text
              describing one of the goals in two lines. A small text describing
              one of the goals in two lines. A small text describing one of the
              goals in two lines. A small text describing one of the goals in
              two lines. A small text describing one of the goals in two lines.
              A small text describing one of the goals in two lines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
