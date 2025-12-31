import { Button, Modal, PinInput, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import React, { useState } from "react";
import { sendOtp, verifyOtp } from "../Services/UserService";

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);

  const handleSendOtp = () => {
    setOtpSending(true);
    sendOtp(email)
      .then((res) => {
        setOtpSent(true);
      })
      .catch((err) => {
        console.log(err);
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
      })
      .catch((err) => {
        console.log(err);
      });
    
  };


  return (
    <>
      <Modal opened={props.opened} onClose={props.close} title="Reset Password">
        {
          <div className="flex flex-col gap-6">
            <TextInput
              name="email"
              size="md"
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
                  className="mr-1"
                  onClick={handleSendOtp}
                  autoContrast
                  disabled={email === "" || otpSent}
                  color="bright-sun.4"
                  variant="filled"
                >Email</Button>
              }
              rightSectionWidth="xl"
            />
            {otpSent && (
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
          </div>
        }
      </Modal>

      <Button variant="default" onClick={props.open}>
        Open modal
      </Button>
    </>
  );
};

export default ResetPassword;
