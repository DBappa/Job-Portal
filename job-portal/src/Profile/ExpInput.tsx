import React, { useState } from "react";
import fields from "../Data/Profile";
import { Button, Checkbox, Textarea } from "@mantine/core";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

const ExpInput = (props: any) => {
  const select = fields;
  const [desc, setDesc] = useState("jcbcjvjdhcvjb");
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-3">
     {props.addExp ? <div className="text-lg font-semibold">Add Experience</div>:<div className="text-lg font-semibold">Edit Experience</div>}
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />

      <Textarea
        label="Summary"
        withAsterisk
        placeholder="Write Summary..."
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
        autosize
        minRows={3}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          leftSection={<IconCalendar size={18} stroke={1.5} />}
          leftSectionPointerEvents="none"
          label="Start Date"
          placeholder="Pick date"
          value={startDate}
          onChange={setStartDate}
          maxDate={endDate ? new Date(endDate) : new Date()}
          clearable
        />

        <MonthPickerInput
          withAsterisk
          leftSection={<IconCalendar size={18} stroke={1.5} />}
          leftSectionPointerEvents="none"
          label="End Date"
          placeholder="Pick date"
          value={endDate}
          onChange={setEndDate}
          minDate={startDate ? new Date(startDate) : new Date()}
          maxDate={new Date()}
          clearable
          disabled={checked}
        />
      </div>
      <Checkbox
        autoContrast
        label="Currently Working Here"
        checked={checked}
        onChange={(event) => {
          setChecked(event.currentTarget.checked);
        }}
      />
      <div className="flex gap-5">
        <Button
          onClick={() => props.setEdit(false)}
          variant="light"
          color="bright-sun.4"
        >
          Save
        </Button>
        <Button variant="outline" color="red.8" onClick={() => props.setEdit(false)}>
          Discard
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
