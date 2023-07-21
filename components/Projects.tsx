import React from "react";
import { projectData } from "@/dataFolder/projectData";
import Image from "next/image";
import classNames from "classnames";

const Projects = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="p-4 bg-gradient-to-b from-[#2d354685] via-[rgba(78,143,255,0.39)] to-[rgba(177,177,177,0)]
  w-[90%] rounded-t-[10rem] backdrop-blur-sm "
      >
        <h2 className="text-white my-4 text-center text-[2rem] font-bold ">
          Projects
        </h2>
        <div className="flex flex-col gap-4">
          {projectData.map((data, index) => {
            return (
              <div
                key={data.title}
                className={classNames(
                  " md:w-[50px] md:h-[50px] flex justify-center items-center p-[2rem] rounded-[3rem] w-full h-[40vh] backdrop-blur-sm drop-shadow-xl",
                  { "bg-[rgba(0,0,0,0.52)] text-white": index === 0 },
                  {
                    "bg-white": index === 1,
                  },
                  { "bg-[rgba(145,145,145,0.52)] text-white": index === 2 }
                )}
              >
                <h2 className="text-[1.5rem] font-bold">{data.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
