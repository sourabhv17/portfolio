import "./Body.css";
import { LinkedIn, Github, Twitter } from "../utils/links";
import Contacts from "./Contacts";

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
          <div className="buttons-div">
            <button className="btn1">My Portfolio</button>
            <button class="btn2">Contact Me</button>
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
