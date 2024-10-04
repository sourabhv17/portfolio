import "./Body.css";
import { LinkedIn, Github, Twitter } from "../utils/links";
import Contacts from "./Contacts";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body-div">
      <div className="body-left">
        <span>
          <Link to="https://www.linkedin.com/in/sourabh-umarvaishya-892aa9195/">
            <img src={LinkedIn} className="image"></img>
          </Link>
        </span>
        <span>
          <Link to="https://github.com/sourabhv17">
            <img src={Github} className="image"></img>{" "}
          </Link>
        </span>
        <span>
          <Link to="https://x.com/Sourabh635786">
            <img src={Twitter} className="image"></img>
          </Link>
        </span>
      </div>
      <div className="body-center">
        <div className="body-center-up">
          <span className="body-name">I'm Sourabh</span>
          <span>I love coding</span>
        </div>
        <div className="body-center-down">
          <span>
            My objective is to be the leading player in the field of Technology.
            I want to apply my expertise in solving problems, innovation in a
            challenging environment and contribute to the overall growth and
            success of the organization I join. My goal is to become an
            outstanding professional with an extensive technical knowledge
            coupled with strong analytical and communication skills. Being
            focused, sincere and dedicated, will enable me to achieve my career
            objectives and set benchmarks for myself.
          </span>
          <div className="btn">
            <Link to="/portfolio" className="buttons-div">
              <button className="btn1">My Portfolio</button>
            </Link>
            <Link to="/contacts" className="buttons-div">
              <button class="btn2">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="body-right">
        <img src={require("../utils/image.png")}></img>
      </div>
    </div>
  );
};

export default Body;
