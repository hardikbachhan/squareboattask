import React from 'react';
import "./nojobs.css";

function NoJobs() {
  return (
    <div className="panel">
        <img
            src={require("../../../assets/svg/writing.svg").default}
            alt="writing"
            className="panel-img"
          />
        <h1 className='panel-heading'>Your posted jobs will show here!</h1>
        <button className="panel-btn">Post a Job</button>
    </div>
  )
}

export default NoJobs