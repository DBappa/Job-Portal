import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React, { useState } from "react";
import { resetPassword, sendOtp, verifyOtp } from "../Services/UserService";
import { signupValidation } from "../Services/FormValidation";
import { failureNotification, successNotification } from "../Services/NotificationService";

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [attempt,setAttempt]=useState(3);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleSendOtp = () => {
    setOtpSending(true);
    sendOtp(email)
      .then((res) => {
        console.log(res);
        successNotification("OTP Sent", "Please check your email for the OTP.");
        setOtpSent(true);
        setOtpSending(false);
      })
      .catch((err) => {
        console.log(err);
        failureNotification("Failed to send OTP", err.response.data.errorMessage || "Please try again later.");
        setOtpSent(false);
        setOtpSending(false);
      });
    console.log(`Sending OTP to ${email}`);
  };

  const handleVerifyOtp = (value: string) => {
    console.log(`Verifying OTP ${value} for email ${email}`);
    verifyOtp(email, value)
      .then((res) => {
        console.log(res);
        successNotification("OTP Verified", "You can now reset your password.");
        setVerified(true);
      })
      .catch((err) => {
        setAttempt(attempt-1);
        failureNotification("Failed to verify OTP", `${attempt-1} attempts left`);
        if((attempt-1)===0){
            setOtpSent(false);
            setVerified(false);
            setOtpSending(false);
            failureNotification("No attempts left", "Please request a new OTP.");
            setEmail("");
        }
        console.log(err);
      });
  };

  const resendOtp = () => {
    setOtpSending(true);
    setOtpSent(false);
    sendOtp(email)
      .then((res) => {
        console.log(res);
        successNotification("OTP Sent", "Please check your email for the OTP.");
        setOtpSending(false);
        setOtpSent(true);

      })
      .catch((err) => {
        console.log(err);
        failureNotification("Failed to send OTP", err.response.data.errorMessage || "Please try again later.");
        setOtpSent(false);
        setOtpSending(false);
      });
  };

  const changeEmail = () => {
    setOtpSent(false);
    setEmail("");
  };

  const handleResetPassword = () => {
    resetPassword(email, password)
      .then((res) => {
        console.log(res);
        successNotification("Password Reset", "Your password has been reset successfully.");
        props.close();
      })
      .catch((err) => {
        console.log(err);
        failureNotification("Failed to reset password", err.response.data.errorMessage || "Please try again later.");
      });
    console.log(`Resetting password for ${email} to ${password}`);
  };

  return (
    <>
      <Modal opened={props.opened} onClose={props.close} title="Reset Password">
        {
          <div className="flex flex-col gap-6">
            <TextInput
              name="email"
              size="sm"
              withAsterisk
              leftSection={<IconAt size={16} />}
              label="Your email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              rightSection={
                <Button
                  loading={otpSending}
                  size="xs"
                  className="mx-1"
                  onClick={handleSendOtp}
                  autoContrast
                  disabled={email === "" || otpSent}
                  color="bright-sun.4"
                  variant="filled"
                >
                  Send OTP
                </Button>
              }
              rightSectionWidth="xl"
            />
            {otpSent && attempt>0 && (
              <PinInput
                length={6}
                className="mx-auto"
                size="md"
                gap="lg"
                type={/^[A-Za-z0-9]{0,6}$/}
                inputType="text"
                inputMode="text"
                onComplete={handleVerifyOtp}
              />
            )}
            {otpSent && !verified &&  (
              <div className="flex gap-2">
                <Button
                  fullWidth
                  loading={otpSending}
                  onClick={resendOtp}
                  autoContrast
                  color="bright-sun.4"
                  variant="light"
                >
                  Resend
                </Button>
                <Button
                  fullWidth
                  onClick={changeEmail}
                  autoContrast
                  color="bright-sun.4"
                  variant="filled"
                >
                  Change Email
                </Button>
              </div>
            )}
            {verified && (
              <PasswordInput
                name="password"
                withAsterisk
                leftSection={<IconLock size={18} stroke={1.5} />}
                label="Password"
                placeholder="Password"
                error={passError}
                value={password}
                onChange={(e)=>{setPassword(e.target.value);setPassError(signupValidation("password",e.target.value,""))}}
              />
            )}
            {verified && (
              <Button
                fullWidth
                onClick={handleResetPassword}
                autoContrast
                disabled={passError!=="" || password===""}
                color="bright-sun.4"
                variant="filled"                
              >
                Reset Password
              </Button>
            )}
          </div>
        }
      </Modal>

      {/* <Button variant="default" onClick={props.open}>
        Open modal
      </Button> */}
    </>
  );
};

export default ResetPassword;
