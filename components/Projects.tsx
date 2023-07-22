import React from "react";
import { projectData } from "@/dataFolder/projectData";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="relative px-[2rem] w-full ">
        <h2 className="text-white text-right text-[1.5rem] font-bold mb-[6rem] md:text-[3rem]">
          Projects
        </h2>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[14rem] animate-spin-slow blur-[31px] md:top-[7rem] md:w-full md:right-[10rem]">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[36rem] animate-spin-slow blur-[31px] md:top-[23rem] md:right-[-13rem]">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[7rem] md:grid md:grid-cols-2 md:gap-[1rem]">
          {projectData.map((data, index) => {
            return (
              <div
                id="projects"
                key={data.title}
                className={classNames(
                  "relative flex flex-col justify-end items-center pt-[2rem] px-[2rem] pb-[1rem] rounded-md w-full h-[15rem] backdrop-blur-sm drop-shadow-xl text-black md:w-[21rem] md:h-[13rem] md:mb-[4rem]",
                  { "bg-[rgb(208,208,208)]": index === 0 },
                  {
                    "bg-white": index === 1,
                  },
                  { "bg-[rgb(208,208,208)]": index === 2 }
                )}
              >
                <Link
                  href={data.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[90%] h-full drop-shadow-2xl top-[-5rem]"
                >
                  <Image
                    alt=""
                    src={data.images.desktopView}
                    fill
                    className="object-contain"
                  />
                </Link>
                <div className="flex flex-col gap-2 justify-center items-center drop-shadow-2xl">
                  <h2 className="text-[1.5rem] font-bold">{data.title}</h2>
                  <div className="flex gap-3">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data.githubUrl}
                      className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer"
                    >
                      <Image
                        alt=""
                        src="/github-mark.svg"
                        fill
                        className="object-contain"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data.projectUrl}
                      className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer"
                    >
                      <Image
                        alt=""
                        src="/link-solid.svg"
                        fill
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
