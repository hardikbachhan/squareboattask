import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Jobs from "./components/postedjobs/Jobs";
import Popup from "./components/popup/Popup";

function App() {
  const [token, setToken] = useState("");
  const [currState, setCurrState] = useState(null);

  useEffect(() => {
    let newToken = localStorage.getItem("token");
    if (newToken !== null && newToken.length !== 0) {
      setToken(newToken);
      setCurrState("LOGGEDIN");
    }
  }, []);

  return (
    <div className="body">
      <Navbar token={token} setToken={setToken} setCurrState={setCurrState} />
      {currState !== null && <Popup currState={currState} />}
      {token.length === 0 ? (
        <Login setToken={setToken} setCurrState={setCurrState} />
      ) : (
        <Jobs />
      )}
    </div>
  );
}

export default App;
