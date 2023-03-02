import React from "react";
import icon from "../images/reactjs-icon.png";

function Navbar() {
  return (
    <nav className="nav">
      <img
        className="nav-logo"
        src={icon}
        alt="react logo"
      />
      <h2>ReactFacts</h2>
      <h3>ReactCourse - Project 1</h3>
    </nav>
  );
}

export default Navbar;
