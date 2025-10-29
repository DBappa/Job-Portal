import React from "react";
import {
  IconAnchor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (
    <div className="mt-20 pb-5 flex gap-5 justify-around">
      <div className="w-1/4 flex flex-col gap-5">
        <div className="flex gap-2 items-center text-bright-sun-400">
          <IconAnchor stroke={2.5} className="h-6 w-6" />
          <div className="text-xl font-semibold">JobHook</div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          Job Portal with user profiles, skill updates, certifications, work
          experience and job postings.
        </div>
        <div
          className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-1.5 [&>div]:rounded-full 
        [&>div]:cursor-pointer [&>div]:hover:bg-mine-shaft-600"
        >
          <div>
            <IconBrandFacebook className="h-6 w-6" />
          </div>
          <div>
            <IconBrandInstagram className="h-6 w-6" />
          </div>
          <div>
            <IconBrandX className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        {footerLinks.map((item, index) => (
          <div key={index} className="w-1/4 flex flex-col gap-4">
            <div className="text-lg text-bright-sun-400 font-semibold mb-4">
              {item.title}
            </div>
            {item.links.map((link, index) => (
              <div
                key={index}
                className="text-sm text-mine-shaft-300 hover:cursor-pointer
                 hover:text-bright-sun-400 mb-1 hover:translate-x-2 transition duration-300 easy-in-out"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
