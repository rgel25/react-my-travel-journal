import React from "react";
import navLogo from "../images/nav-logo.png";

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={navLogo} alt="globe" className="nav-logo-img" />
        <span className="nav-logo-title">My Travel Journal</span>
      </div>
    </nav>
  );
}
