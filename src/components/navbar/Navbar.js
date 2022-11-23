import React from "react";
import UserDetails from "../userdetails/UserDetails";
import "./navbar.css";

function Navbar({ token, setToken, setCurrState }) {
  return (
    <div className="navbar">
      <h3 className="navbar-heading">
        My<span className="title">Jobs</span>
      </h3>
      {token.length === 0 ? (
        <button className="navbar-login-btn">Login</button>
      ) : (
        <UserDetails setToken={setToken} setCurrState={setCurrState}/>
      )}
    </div>
  );
}

export default Navbar;
