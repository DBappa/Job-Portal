import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { Button, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

const CertiInput = (props: any) => {
     const select = fields;
     const [issueDate, setIssueDate] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">

        <TextInput label="Title" withAsterisk placeholder="Enter Title" />
        <SelectInput {...select[1]} />
       
      </div>
      <MonthPickerInput
          withAsterisk
          leftSection={<IconCalendar size={18} stroke={1.5} />}
          leftSectionPointerEvents="none"
          label="Issue Date"
          placeholder="Pick date"
          value={issueDate}
          onChange={setIssueDate}
          maxDate={new Date()}
          clearable
        />
        <TextInput label="Certificate ID" withAsterisk placeholder="Enter Certificate ID" />
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

export default CertiInput;
