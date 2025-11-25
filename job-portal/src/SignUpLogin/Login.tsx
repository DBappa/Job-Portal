import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../Services/UserService";


const form={
  email:"",
  password:""
}

const Login = () => {

  const [data,setData]=useState(form);

  const handleChange=(e:any)=>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit=()=>{
    loginUser(data).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
      <div className="text-2xl font-semibold ">Login</div>
      
      <TextInput
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Your email"
        placeholder="Your email"
        value={data.email}
        onChange={handleChange}
      />
      <PasswordInput
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit} autoContrast color="bright-sun.4" variant="filled">
        Log in
      </Button>
       <div className="mx-auto"> Don't have an account? <Link className="text-bright-sun-400 hover:underline" to="/signup">Signup</Link></div>
    </div>
  );
};

export default Login;
