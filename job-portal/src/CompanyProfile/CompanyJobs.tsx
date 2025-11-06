import React from "react";
import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
  return (
    <div className="mt-10  flex flex-wrap gap-3">
      {jobList.map((item, index) => (
        <JobCard key={index} {...item} />
      ))}
    </div>
  );
};

export default CompanyJobs;
