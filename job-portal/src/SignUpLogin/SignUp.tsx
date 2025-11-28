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
import { signupValidation } from "../Services/FormValidation";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [value, setValue] = useState("APPLICANT");
  const [data, setData] = useState<{[key: string]:string}>(form);
  const [formError, setFormError] = useState<{[key: string]:string}>(form);

  const handleChange = (e: any) => {
    if (typeof e === "string") {
      setData({ ...data, accountType: e });
    }
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signupValidation(name, value,data.password) });
  };

  const handleSubmit = () => {
    
    for (let key in data) {
      if(key==="accountType") continue;
      formError[key]=signupValidation(key, data[key],data.password)
    }
    setFormError({ ...formError });

    console.log(formError);
    if (
      formError.name ||
      formError.email ||
      formError.password ||
      formError.confirmPassword
    ) {
      return;
    }
    registerUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
      <div className="text-2xl font-semibold ">Create Account</div>
      <TextInput
        value={data.name}
        name="name"
        onChange={handleChange}
        withAsterisk
        label="Full Name"
        placeholder="Your Name"
        error={formError.name}
      />
      <TextInput
        name="email"
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Your email"
        placeholder="Your email"
        value={data.email}
        onChange={handleChange}
        error={formError.email}
      />
      <PasswordInput
        name="password"
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
        error={formError.password}
      />
      <PasswordInput
        name="confirmPassword"
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Confirm Password"
        placeholder="Confirm Password"
        value={data.confirmPassword}
        onChange={handleChange}
        error={formError.confirmPassword}
      />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400"
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400"
            value="EMPLOYER"
            label="Employer"
          />
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

      <Button
        onClick={handleSubmit}
        autoContrast
        color="bright-sun.4"
        variant="filled"
      >
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
