import {
  Button,
  Divider,
  FileInput,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconUpload } from "@tabler/icons-react";
import React, { useState } from "react";

const ApplyJob = () => {
  const [preview, setPreview] = useState(false);
  const [submit,setSubmit] = useState(false);

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <div className="w-2/3 mx-auto">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="Google" />
          </div>
          <div>
            <div className="font-semibold text-2xl">Software Engineer III</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 48 Applicants
            </div>
          </div>
        </div>
      </div>
      <Divider my="xl" />
      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            label="Full Name"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            withAsterisk
            placeholder="John Doe"
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
          <TextInput
            label="Email"
            withAsterisk
            placeholder="john.doe@xyz.com"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <NumberInput
            label="Phone Number"
            hideControls
            withAsterisk
            placeholder="9876543210"
            min={0}
            max={9999999999}
            clampBehavior="strict"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
          <TextInput
            label="Personal Website"
            placeholder="www.johndoe.com"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
        </div>
        <FileInput
          leftSection={<IconUpload />}
          placeholder="Upload Resume"
          label="Attach Your Resume"
          withAsterisk
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
        />
        <Textarea
          withAsterisk
          placeholder="Write your cover letter here..."
          label="Cover Letter"
          autosize
          minRows={3}
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
        />
        {!preview && (
          <Button
            onClick={() => handlePreview()}
            color="bright-sun.4"
            variant="light"
          >
            Preview
          </Button>
        )}
        {preview && (
          <div className="flex gap-10 [&>*]:w-1/2 justify-end mt-5 mb-5">
            <Button
              fullWidth
              onClick={() => handlePreview()}
              color="bright-sun.4"
              variant="outline"
            >
              Edit
            </Button>
            <Button
              fullWidth
              onClick={() => handleSubmit()}
              color="bright-sun.4"
              variant="light"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
    <Notification 
    icon={<IconCheck style={{width: rem(20), height: rem(20)}}/>}
    color="teal"
    title="Application Submitted"
    withCloseButton={false}
    withBorder
    className={`!border-bright-sun-400  !fixed top-0 left-[35%] transition duration-1000 ease-in-out z-50 ${submit?"translate-y-0":"-translate-y-20"}`}
    >
        <div className="text-mine-shaft-300">Redirecting to Find Jobs in 5 seconds</div>
        
    </Notification>
    </>
    
  );
};

export default ApplyJob;
