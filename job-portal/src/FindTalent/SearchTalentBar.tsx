import React, { useState } from "react";
import MultiInput from '../FindJobs/MultiInput';
import { dropdownData } from "../Data/JobsData";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchTalentBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
        <div className="flex items-center gap-2">
            <div className="text-bright-sun-400 bg-mine-shaft-900 p-1 mr-2 rounded-full">
                <IconUserCircle size={20}/>
            </div>
            <Input className="[&_input]:!placeholder-mine-shaft-200" variant="unstyled" placeholder="Talent Name" />

        </div>
      {searchFields.map((item, index) => {
        return (
          <>
            <div key={index} className="w-1/5">
              <MultiInput {...item} />
            </div>
            <Divider size="xs" mr="xs" orientation="vertical" />
          </>
        );
      })}
      <div className="w-1/5 text-sm [&_.mantine-Slider-label]:!translate-y-10">
            <div className="flex justify-between">
                <div>Salary</div>
                <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
            </div>
            <RangeSlider color="bright-sun.4" size="xs" value={value}
            labelTransitionProps={{transition: 'skew-down', duration: 150, timingFunction: 'linear'}}
             onChange={setValue} />
      </div>
      
    </div>
  );
};

export default SearchTalentBar;
