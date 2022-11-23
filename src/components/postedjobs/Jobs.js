import React, { useState, useEffect } from "react";
import Job from "./jobdetails/Job";
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
      console.log(jobDetails);
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    fetchJobDetails(0);
    console.log("useEffect finished");
  }, []);

  return (
    <div className="jobs-portal">
      <div className="compartment-1"></div>
      <div className="compartment-2"></div>
      <div className="jobs-panel">
        {jobs.map((jobObj) => (
          <Job key={jobObj.id} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
