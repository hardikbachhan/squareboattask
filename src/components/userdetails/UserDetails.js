import React, { useState, useContext } from "react";
import { AuthContext } from "../../authContext";
import "./userdetails.css";

function Logout() {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    auth.dispatch({ type: "" });
  }

  return (
    <div className="details">
      <button className="profile-img">R</button>
      <div className="dropdown">
        <img
          src={require("../../assets/svg/down.svg").default}
          alt="down"
          className="down-img dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Logout;
