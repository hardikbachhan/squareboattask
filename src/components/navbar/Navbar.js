import React, { useState, useContext } from "react";
import { AuthContext } from "../../authContext";
import Popup from "../popup/Popup";
import "./navbar.css";

function Navbar() {
  const auth = useContext(AuthContext);

  return (
    <div className="navbar">
      <Popup currState="login" />
      <h3 className="navbar-heading">
        My<span className="title">Jobs</span>
      </h3>
      <button className="navbar-login-btn">Login</button>
    </div>
  );
}

export default Navbar;
