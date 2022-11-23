import React, { useState, useEffect } from "react";
import Job from "./jobdetails/Job";
import NoJobs from "./nojobavailable/NoJobs";
import "./jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  const fetchJobDetails = async (change) => {
    let newPage = page + change;

    if (newPage >= 1) {
      let token = localStorage.getItem("token");
      let url = "https://jobs-api.squareboat.info/api/v1/recruiters/jobs";
      url += `?page=${newPage}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const jobDetails = await res.json();
      setJobs(jobDetails.data.data);
    }
  };

  useEffect(() => {
    // fetchJobDetails(0);
  }, []);

  return (
    <div className="jobs-portal">
      <div className="compartment-1"></div>
      <div className="compartment-2"></div>
      <div className="jobs-page">
        <h1 className="jobs-panel-heading">
          <img
            src={require("../../assets/svg/home.svg").default}
            alt="home"
            className="home-img"
          />
          Home
        </h1>
        <h2 className="job-subheading">Jobs posted by you</h2>
        <div className="jobs-panel">
            {(jobs.length === 0 ? <NoJobs /> : "hello")}
          {/* {jobs.map((jobObj, objIdx) => (
            <Job
              key={objIdx}
              title={jobObj.title}
              desc={jobObj.description}
              location={jobObj.location}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
