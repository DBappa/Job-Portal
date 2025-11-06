import React from "react";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const CompanyEmployees = () => {
  return (
    <div className="mt-10  flex flex-wrap gap-10">
      {talents.map((item, index) => (
        <TalentCard key={index} {...item} />
      ))}
      {/* <TalentCard /> */}
    </div>
  );
};

export default CompanyEmployees;
