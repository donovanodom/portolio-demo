import {Link} from 'react-scroll'
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
      <Link to="home">
        <div className="nav-logo">
          <Fade delay={1200} duration={1200}>
            <Logo />
          </Fade>
        </div>
      </Link>
      <Fade delay={1400} left>
        <div id="nav-line"></div>
      </Fade>
      <Link to="about">
        <div className="nav-link">ABOUT</div>
      </Link>
      <Link to="projects">
        <div className="nav-link">PROJECTS</div>
      </Link>
      <Link to="blog">
        <div className="nav-link">BLOG</div>
      </Link>
    </div>
  );
};

export default Nav;
