import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";
import Logo from "./svg/Logo";
import Fade from "react-reveal/Fade";

const Nav = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((active) => !active);
  };
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-logo">
          <Fade delay={800} duration={1200}>
            <Logo />
          </Fade>
        </div>
      </Link>
      <div id="nav-line"></div>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <div className="nav-link">ABOUT</div>
      </Link>
      <div className="nav-link">PROJECTS</div>
      <div className="nav-link">BLOG</div>
    </div>
  );
};

export default Nav;
