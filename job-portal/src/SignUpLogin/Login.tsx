import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UserService";
import { loginValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch();
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const [redirect, setRedirect] = useState(4000);
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [e.target.name]: e.target.value });
    setFormError({ ...formError, [name]: loginValidation(name, value) });
  };

  const handleSubmit = () => {
    setLoading(true);
    for (let key in data) {
      formError[key] = loginValidation(key, data[key]);
    }
    setFormError({ ...formError });

    console.log(formError);
    if (formError.email || formError.password) {
      return;
    }
    loginUser(data)
      .then((res) => {
        console.log(res);
        setData(form);
        notifications.show({
          title: "Success",
          message: "Login successful! Redirecting to Home..",
          withCloseButton: true,
          icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
          color: "teal",
          withBorder: true,
          className: "!border-green-500",
        });
        setTimeout(() => {
          setLoading(false);
          dispatch(setUser(res));
          if (res.accountType === "EMPLOYER") {
            navigate("/find-talent");
          } else {
            navigate("/find-jobs");
          }
        }, 4000);
      })
      .catch((err) => {
        console.log(err);

        notifications.show({
          title: "Failure",
          message: err.response.data.errorMessage,
          withCloseButton: true,
          icon: <IconX style={{ width: "90%", height: "90%" }} />,
          color: "red",
          withBorder: true,
          className: "!border-red-500",
        });

        if (err.response.data.errorMessage) {
          setFormError(form);
          setData(form);
          if (
            err.response.data.errorMessage === "User is not registered" ||
            err.response.data.errorMessage.includes("not registered")
          ) {
            notifications.show({
              title: "Redirecting to Signup",
              message: `in ${redirect / 1000} seconds...`,
              withCloseButton: true,
              icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
              color: "teal",
              withBorder: true,
              className: "!border-teal-500",
            });
            setTimeout(() => {
              navigate("/signup");
            }, redirect);
          }
        }
      });
  };

  return (
    <>
      <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
      <div className="w-1/2 px-20 flex flex-col gap-3 justify-center">
        <div className="text-2xl font-semibold ">Login</div>

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

        <Button
          loading={loading}
          onClick={handleSubmit}
          autoContrast
          color="bright-sun.4"
          variant="filled"
        >
          Log in
        </Button>
        <div className="mx-auto">
          {" "}
          Don't have an account?{" "}
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/signup");
              setData(form);
              setFormError(form);
            }}
          >
            Signup
          </span>
        </div>
        <div
          onClick={open}
          className="text-bright-sun-400 hover:underline cursor-pointer text-center"
        >
          Forget Password?
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default Login;
