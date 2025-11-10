import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
      <div className="text-2xl font-semibold ">Login</div>
      
      <TextInput
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Password"
      />

      <Button autoContrast color="bright-sun.4" variant="filled">
        Log in
      </Button>
       <div className="mx-auto"> Don't have an account? <Link className="text-bright-sun-400 hover:underline" to="/signup">Signup</Link></div>
    </div>
  );
};

export default Login;
