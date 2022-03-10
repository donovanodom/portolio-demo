import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((active) => !active);
  };
  return (
    <div className="nav">
      <div>Home</div>
      <div>About</div>
      <div>Blog</div>
      <div>Contact</div>
    </div>
  );
};

export default Nav;
