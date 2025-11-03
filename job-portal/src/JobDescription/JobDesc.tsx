import { Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const JobDesc = () => {
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="Google" />
          </div>
          <div>
            <div className="font-semibold text-2xl">Software Engineer III</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="bright-sun.4" size="sm" variant="light">
              Apply Job
            </Button>
          </Link>

          <IconBookmark className="text-bright-sun-400 cursor-pointer" />
        </div>
        
      </div>
      <Divider my="xl"/>
    </div>
  );
};

export default JobDesc;
