import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconAdjustments, IconBookmark, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import { card, skills, desc } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from "dompurify";

const JobDesc = () => {
    const data= DOMPurify.sanitize(desc);
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
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((card: any, index: any) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              variant="light"
              color="bright-sun.4"
              className="!h-12 !w-12"
              radius="xl"
              aria-label="Settings"
            >
              <card.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{card.name}</div>
            <div className="font-semibold">{card.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5 ">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill: any, index: any) => (
            <ActionIcon
              key={index}
              variant="light"
              color="bright-sun.4"
              className="!h-fit font-medium !w-fit !text-sm"
              radius="xl"
              p="xs"
              aria-label="Settings"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_h4]:my-5 [&_h4]:font-semibold
       [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:marker:mb-2 [&_li]:marker:font-semibold" 
       dangerouslySetInnerHTML={{ __html: data }}>

      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5 ">About Company</div>
        <div className="flex justify-between mb-3">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-8" src={`/Icons/Google.png`} alt="Google" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-medium text-lg">Google</div>
            <div className="text-mine-shaft-300">
              10K+ Employees
            </div>
          </div>
        </div>
          <Link to="/apply-job">
            <Button color="bright-sun.4" variant="light">
              Company Page
            </Button>
          </Link>
        
      </div>
      <div className="text-mine-shaft-300 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rem modi voluptas cupiditate quidem iusto quas veniam et. Dolor esse laudantium explicabo architecto laborum modi nostrum vel soluta. Fuga quas laudantium doloribus? Et ipsam, officia quia nemo voluptatibus officiis? Ea.</div>
      </div>
    </div>
  );
};

export default JobDesc;
