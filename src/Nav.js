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
      <div className="nav-link">Home</div>
      <div className="nav-link">About</div>
      <div className="nav-link">Blog</div>
      <div className="nav-link">Contact</div>
    </div>
  );
};

export default Nav;
