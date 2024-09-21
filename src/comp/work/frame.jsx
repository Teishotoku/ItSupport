import { useState } from "react";
import "./styleWork.scss";

const Frame = (props) => {
  const [active, setActive] = useState(false);
  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={active ? "workFrameHover" : "workFrame"}
    >
      <h1>{props.title}</h1>
      <p>Some words about this step in our work</p>
    </div>
  );
};
export default Frame;
