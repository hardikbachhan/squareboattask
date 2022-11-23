import React from "react";
import "./userdetails.css";

function UserDetails({setToken, setCurrState }) {

  const handleLogout = () => {
    localStorage.setItem("token", "");
    setToken("");
    setCurrState("LOGGEDOUT");
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

export default UserDetails;
