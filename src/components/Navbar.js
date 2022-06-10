import React from "react";
import globe from "../images/globe.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--img" src={globe} />
      <h4 className="nav--title">my travel journal.</h4>
    </nav>
  );
}
