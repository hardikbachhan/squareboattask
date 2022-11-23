import React, { useState, useContext } from "react";
import { AuthContext } from "../../authContext";
import Logout from "../userdetails/UserDetails";
import Popup from "../popup/Popup";
import "./navbar.css";

function Navbar() {
  const auth = useContext(AuthContext);
  const token = auth.state.token;

  return (
    <div className="navbar">
      <Popup currState="login" />
      <h3 className="navbar-heading">
        My<span className="title">Jobs</span>
      </h3>
      {/* {token.length === 0 ? (<button className="navbar-login-btn">Login</button>): 
      (<Logout />)
      } */}
      <Logout />
    </div>
  );
}

export default Navbar;
