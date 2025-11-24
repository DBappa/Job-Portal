import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../Services/UserService";

const form={
  name:"",
  email:"",
  password:"",
  confirmPassword:"",
  accountType:"APPLICANT"
}

const SignUp = () => {
  const [value, setValue] = useState("APPLICANT");
  const [data,setData]=useState(form);

  const handleChange=(e:any)=>{
    if(typeof e==="string"){
      setData({...data,accountType:e});
    }
    setData({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit=()=>{
    registerUser(data).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
      <div className="text-2xl font-semibold ">Create Account</div>
      <TextInput value={data.name} name="name" onChange={handleChange} withAsterisk label="Full Name" placeholder="Your Name" />
      <TextInput
        name="email"
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Your email"
        placeholder="Your email"
        value={data.email}
        onChange={handleChange}
      />
      <PasswordInput
        name="password"
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />
      <PasswordInput
        name="confirmPassword"
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Confirm Password"
        placeholder="Confirm Password"
        value={data.confirmPassword}
        onChange={handleChange}
      />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400"  value="APPLICANT" label="Applicant" />
          <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400"  value="EMPLOYER" label="Employer" />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor href="#">terms and conditions</Anchor>
          </>
        }
      />

      <Button onClick={handleSubmit} autoContrast color="bright-sun.4" variant="filled">
        Sign up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <Link className="text-bright-sun-400 hover:underline" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
