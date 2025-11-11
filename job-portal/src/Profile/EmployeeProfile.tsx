import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconEdit, IconMapPin } from "@tabler/icons-react";

import EmployeeExpCard from "./EmployeeExpCard";
import EmployeeCertificateCard from "./EmployeeCertificateCard";
import { useState } from "react";

const EmployeeProfile = (props: any) => {
  const[edit,setEdit]=useState([false,false,false,false,false]);

  const handleEdit=(index:number)=>{
    const newEdit=[...edit];
    newEdit[index]=!newEdit[index];
    setEdit(newEdit);
  }



  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="w-48 h-48 rounded-full absolute -bottom-1/3 left-3 border-mine-shaft-900 border-8"
          src="/avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between ">
          {props.name}{" "}
          <ActionIcon onClick={()=>handleEdit(0)} variant="subtle" size="lg" color="bright-sun.4">
           {edit[0]?<IconDeviceFloppy className="h-4/5 w4/5" stroke={2.5} />:<IconEdit
              className="h-4/5 w4/5"
              stroke={2.5}
            />} 
          </ActionIcon>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role} &bull;{" "}
          {props.company}
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 ">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 ">Skills</div>
        <div className=" flex flex-wrap gap-2">
          {props.skills &&
            props.skills.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-3">
          {props.experience &&
            props.experience.map((exp: any, index: any) => (
              <EmployeeExpCard key={index} {...exp} />
            ))}
        </div>
      </div>

      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-3">
          {props.certifications &&
            props.certifications.map((cer: any, index: any) => (
              <EmployeeCertificateCard key={index} {...cer} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
