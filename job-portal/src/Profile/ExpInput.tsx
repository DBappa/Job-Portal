import React, { useState } from 'react'
import fields from '../Data/Profile'
import { Textarea } from '@mantine/core';
import SelectInput from './SelectInput';

const ExpInput = (props:any) => {
    const select=fields;
    const [desc,setDesc]=useState("jcbcjvjdhcvjb");
  return (
    <div>
        <div>Edit Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
              </div>
              <SelectInput {...select[2]} />
            
            <Textarea
                        withAsterisk
                        placeholder="Write about yourself..."
                        value={desc}
                        onChange={(event) => setDesc(event.target.value)}
                        autosize
                        minRows={3}
                      />
            
    </div>
  )
}

export default ExpInput