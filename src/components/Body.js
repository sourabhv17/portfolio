import "./Body.css";
import { LinkedIn, Github, Twitter } from "../utils/links";

const Body = () => {
  return (
    <div className="body-div">
      <div className="body-left">
        <span>
          <img src={LinkedIn}></img>
        </span>
        <span>
          <img src={Github}></img>
        </span>
        <span>
          <img src={Twitter}></img>
        </span>
      </div>
      <div className="body-center">
        <span className="body-name">I'm Sourabh</span>
        <span>I love coding</span>
      </div>
      <div className="body-right">
        <img src={require("../utils/image.png")}></img>
      </div>
    </div>
  );
};

export default Body;
