import React from "react";
import "./job.css";

function Job({ title, desc, location }) {
  return (
    <div className="card job-card">
      <div className="card-body">
        <h5 className="card-title job-title">{title}</h5>
        <p className="card-text job-desc">{desc}</p>
        <div className="job-data">
          <p className="card-text job-location">
            <img
              src={require("../../../assets/svg/location.svg").default}
              alt="home"
              className="home-img"
            />
            {location}
          </p>
          <button className="btn btn-sm job-btn">View Applications</button>
        </div>
      </div>
    </div>
  );
}

export default Job;
