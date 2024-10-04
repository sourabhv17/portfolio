import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-div">
      <div>
        <Link to="/" className="name-linked">
          <span className="name">SOURABH UMARVAISHYA </span>
        </Link>
      </div>
      <div className="left">
        <span>theme</span>
        <span>dropdown</span>
      </div>
    </div>
  );
};

export default Header;
