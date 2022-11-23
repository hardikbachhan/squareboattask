import React from "react";
import "./popup.css";

function Popup({ currState }) {
  const closePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
  };

  let message = { title: "", body: "" };

  if (currState === "login") {
    message.title = "Login";
    message.body = "You have successfully logged in.";
  } else {
    message.title = "Logout";
    message.body = "You have successfully logged out.";
  }

  return (
    <div id="popup" className="popup open-popup">
      <div className="header">
        <h2 className="popup-heading">{message.title}</h2>
        <img
          src={require("../../assets/svg/cross.svg").default}
          alt="cross"
          className="cross-img"
          onClick={closePopup}
        />
      </div>
      <p className="popup-body">{message.body}</p>
    </div>
  );
}

export default Popup;
