import { IconBookmark } from "@tabler/icons-react";
import React from "react";

const JobDesc = () => {
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7"
              src={`/Icons/Google.png`}
              alt="Google"
            />
          </div>
          <div>
            <div className="font-semibold">Software Engineer III</div>
            <div className="text-xs text-mine-shaft-300">
              Google &#x2022; 48 Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default JobDesc;
