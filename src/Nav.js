import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";
import Logo from "./svg/Logo";

const Nav = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((active) => !active);
  };
  return (
    <div className="nav">
      <div className="nav-logo">
        <Logo />
      </div>
      <div className="nav-link">HOME</div>
      <div className="nav-link">ABOUT</div>
      <div className="nav-link">BLOG</div>
      <div className="nav-link">CONTACT</div>
    </div>
  );
};

export default Nav;
