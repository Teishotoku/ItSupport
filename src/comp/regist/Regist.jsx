import "./styleRegist.scss";
import arrow from "../../assets/img/Send.svg";
import plus from "../../assets/img/plus.svg";
import down from "../../assets/img/direct-inbox.svg";

const Regist = () => {
  return (
    <section className="Regist">
      <div className="RegistCenter">
        <div className="registLeft">
          <div className="registLeftHead">
            <h1>Get in touch</h1>
            <h1>with us</h1>
          </div>
          <div className="registLeftInputs">
            <input type="text" placeholder="Enter your Full Name" />
            <input type="text" placeholder="Enter your Email" />
            <input type="text" placeholder="Enter your Phone Number" />
            <button>
              SUBMIT <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="registRight">
          <div className="registRightHead">
            <p>
              Simply fill in your Email in our contact form or get in touch with
              us by our email - <b>itsupportgroup@gmail.com</b> - , and one of
              our experts will contact you shortly. This could be the beginning
              of a wonderful collaboration and the easiest way to acquire a
              highly-experienced team.
            </p>
            <button>
              DOWNLOAD THE BRIEF <img src={down} alt="" />
            </button>
          </div>
          <div className="registRightInputs">
            <input type="text" placeholder="Describe your project" />
            <input
              type="text"
              placeholder="Upload file (maz file size is 30MB)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regist;
