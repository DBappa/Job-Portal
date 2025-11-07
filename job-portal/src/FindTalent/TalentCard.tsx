import { ActionIcon, Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconClock, IconHeart, IconMapPin } from "@tabler/icons-react";
import { DateInput, TimeInput } from "@mantine/dates";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const pickerControl = (
    <ActionIcon variant="subtle" color="bright-sun.4" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );
  return (
    <div
      className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl
    hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={`/${props.image}.png`} alt={props.name} />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div
        className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 
      [&>div]:text-xs [&>div]:text-bright-sun-400 [&>div]:rounded-lg"
      >
        {props.topSkills &&
          props.topSkills.map((skill: any, index) => (
            <div key={index}>{skill}</div>
          ))}
      </div>
      <Text
        className="!text-xs text-justify !text-mine-shaft-300 "
        lineClamp={3}
      >
        {props.about}
      </Text>
      <Divider size="xs" color="mine-shaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider size="xs" color="mine-shaft.7" />
      <div className="flex justify-between [&>*]:w-1/2 [&>*]:p-1">
        <Link to="/talent-profile">
          <Button fullWidth color="bright-sun.4" variant="outline">
            Profile
          </Button>
        </Link>
        <div>
          {props.posted ? (
            <Button
              onClick={open}
              rightSection={<IconCalendarMonth className="w-5 h-5" />}
              fullWidth
              color="bright-sun.4"
              variant="light"
            >
              Schedule
            </Button>
          ) : (
            <Button fullWidth color="bright-sun.4" variant="light">
              Message
            </Button>
          )}
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-5">
          <DateInput
            minDate={dayjs().format("YYYY-MM-DD")}
            maxDate={dayjs().add(3, "month").format("YYYY-MM-DD")}
            value={value}
            onChange={setValue}
            label="Interview Date"
            placeholder="Enter Date"
            rightSection={<IconCalendarMonth className="w-5 h-5 text-bright-sun-400 " />}
          />
          <TimeInput label="Interview Time" ref={ref} rightSection={pickerControl} />
          <Button fullWidth color="bright-sun.4" variant="light">
              Schedule
            </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
