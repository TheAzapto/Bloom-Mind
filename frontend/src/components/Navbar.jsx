import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" className="brand">
            Bloom Mind
          </Link>
        </div>
        <div className="right">
          <ul className="link-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <div className="check-bnt"> */}
            {/* <Link to="/Check">CHECK </Link> */}
            {/* </div> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
