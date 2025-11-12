import {
  ActionIcon,
  Divider,
  TagsInput,
  Textarea,
} from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconEdit,
  IconMapPin,
} from "@tabler/icons-react";

import EmployeeExpCard from "./EmployeeExpCard";
import EmployeeCertificateCard from "./EmployeeCertificateCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";

const EmployeeProfile = (props: any) => {
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(props.about);
  const [skills, setSkills] = useState<string[]>(props.skills);

  const select = fields;
  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

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
      <div className="px-3 mt-20">
        <div className="text-3xl font-semibold flex justify-between mb-5 ">
          {props.name}
          <ActionIcon
            onClick={() => handleEdit(0)}
            variant="subtle"
            size="lg"
            color="bright-sun.4"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w4/5" stroke={2.5} />
            ) : (
              <IconEdit className="h-4/5 w4/5" stroke={2.5} />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
              <SelectInput {...select[2]} />
            </div>
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role}{" "}
              &bull; {props.company}
            </div>
            <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
              <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
            </div>
          </>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon
            onClick={() => handleEdit(1)}
            variant="subtle"
            size="lg"
            color="bright-sun.4"
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w4/5" stroke={2.5} />
            ) : (
              <IconEdit className="h-4/5 w4/5" stroke={2.5} />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            withAsterisk
            placeholder="Write about yourself..."
            value={about}
            onChange={(event) => setAbout(event.target.value)}
            autosize
            minRows={3}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {about}
          </div>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            onClick={() => handleEdit(2)}
            variant="subtle"
            size="lg"
            color="bright-sun.4"
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w4/5" stroke={2.5} />
            ) : (
              <IconEdit className="h-4/5 w4/5" stroke={2.5} />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <>
            <TagsInput  value={skills} onChange={setSkills} 
            placeholder="Add your skills..."
            splitChars={[" ", ",", "\n","|"]} />
          </>
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills &&
              skills.map((skill: any, index: any) => (
                <div
                  key={index}
                  className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
                >
                  {skill}
                </div>
              ))}
          </div>
        )}
        {/* <div className=" flex flex-wrap gap-2">
          {props.skills &&
            props.skills.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
        </div> */}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <ActionIcon
            onClick={() => handleEdit(3)}
            variant="subtle"
            size="lg"
            color="bright-sun.4"
          >
            {edit[3] ? (
              <IconDeviceFloppy className="h-4/5 w4/5" stroke={2.5} />
            ) : (
              <IconEdit className="h-4/5 w4/5" stroke={2.5} />
            )}
          </ActionIcon>
        </div>
        <div className="flex flex-col gap-3">
          {props.experience &&
            props.experience.map((exp: any, index: any) => (
              <EmployeeExpCard key={index} {...exp} />
            ))}
        </div>
      </div>

      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between ">
          Certifications{" "}
          <ActionIcon
            onClick={() => handleEdit(4)}
            variant="subtle"
            size="lg"
            color="bright-sun.4"
          >
            {edit[4] ? (
              <IconDeviceFloppy className="h-4/5 w4/5" stroke={2.5} />
            ) : (
              <IconEdit className="h-4/5 w4/5" stroke={2.5} />
            )}
          </ActionIcon>
        </div>
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
