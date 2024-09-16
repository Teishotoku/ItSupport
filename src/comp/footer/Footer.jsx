import "./styleFooter.scss";
import logo from "../../assets/img/Logo.png";
import instagram from "../../assets/img/social-instagram.svg";
import whatsup from "../../assets/img/social-whatsup.svg";
import facebook from "../../assets/img/social-facebook.svg";
import link from "../../assets/img/social-link.svg";
import send from "../../assets/img/Send.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footerCenter">
        <div className="footerNoth" />
        <div className="footerUp">
          <div className="footerSocial">
            <div className="footerImg">
              <img src={logo} alt="" />
            </div>
            <p>itsupportgroup@gmail.com</p>
            <div className="footerLogos">
              <img src={instagram} alt="" />
              <img src={whatsup} alt="" />
              <img src={facebook} alt="" />
              <img src={link} alt="" />
            </div>
            <button>
              CONTACT US <img src={send} alt="" />
            </button>
          </div>
          <div className="footerOffices">
            <div>
              <h1>our offices</h1>
            </div>
            <div>
              <h2>In Minsk</h2>
              <p>+ 375 (29) 675-12-22</p>
              <p>44 Karl Liebknecht Street, floor 5, office 522</p>
            </div>
            <div>
              <h2>In Vilnius</h2>
              <p>+ 370 (52) 654-280-28</p>
              <p>44 Karl Liebknecht Street, floor 5, office 522</p>
            </div>
            <div />
          </div>
          <div className="footerServices">
            <div>
              <h1>services</h1>
            </div>
            <ul>
              <li>Techinal Support</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Software Development</li>
            </ul>
          </div>
        </div>
        <div className="footerDown">
          <h1>Development by IT Support Group</h1>
          <h1>Data Privacy</h1>
          <h1>inc.2023 IT Support Group</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
