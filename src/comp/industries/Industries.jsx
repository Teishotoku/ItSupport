import "./styleIndustries.scss";
import card1 from "../../assets/img/Icon_1.png";
import card2 from "../../assets/img/Icon_2.png";
import card3 from "../../assets/img/Icon_3.png";

const Industries = () => {
  return (
    <section className="Industries">
      <div className="IndustriesCenter">
        <h1>Industries</h1>
        <div className="industrieCards">
          <div className="industrieCard">
            <div className="industrieCardUp">
              <img src={card1} />
              <h1>Logistics</h1>
            </div>
            <p>
              Fill the gaps in your competencies by setting up a remote IT team.
              We will find the best experts for you and arrange everything
              around it. You will get a perfect match both in skills and
              cultural fit.
            </p>
          </div>
          <div className="industrieCard">
            <div className="industrieCardUp">
              <img src={card2} />
              <h1>Logistics</h1>
            </div>
            <p>
              Fill the gaps in your competencies by setting up a remote IT team.
              We will find the best experts for you and arrange everything
              around it. You will get a perfect match both in skills and
              cultural fit.
            </p>
          </div>
          <div className="industrieCard">
            <div className="industrieCardUp">
              <img src={card3} />
              <h1>Logistics</h1>
            </div>
            <p>
              Fill the gaps in your competencies by setting up a remote IT team.
              We will find the best experts for you and arrange everything
              around it. You will get a perfect match both in skills and
              cultural fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
