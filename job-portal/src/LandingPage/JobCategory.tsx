import React from "react";
import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl mb-3 text-center font-semibold text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mb-10 text-mine-shaft-300 text-center w-1/2 mx-auto">
        Explore diverse job opportunities tailored to your skills. <br />
        Start your career journey today!
      </div>

      <Carousel
        slideSize="22%"
        slideGap="md"
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: "center",
        }}
        className="hover:[&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
      >
        {jobCategory.map((item, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 gap-3 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-3 transition duration-300 easy-in-out !shadow-bright-sun-300">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8 "
                  src={`/Category/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {item.name}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {item.desc}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {item.jobs} new job posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* <div className="flex flex-col items-center w-64 gap-3 mt-10">
        <div className="p-2 bg-bright-sun-300 rounded-full">
          <img
            className="h-8 w-8 "
            src="/Category/Digital Marketing.png"
            alt=""
          />
        </div>
        <div className="text-mine-shaft-100 text-xl font-semibold">
          Digital Marketing
        </div>
        <div className="text-sm text-center text-mine-shaft-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          harum!
        </div>
        <div className="text-bright-sun-300 text-lg">1k+ new job posted</div>
      </div> */}
    </div>
  );
};

export default JobCategory;
