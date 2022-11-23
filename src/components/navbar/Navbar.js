import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <h3 className="navbar-heading">My<span className="title">Jobs</span></h3>
        <button className="navbar-login-btn">Login</button>
    </div>
  );
}

export default Navbar;
