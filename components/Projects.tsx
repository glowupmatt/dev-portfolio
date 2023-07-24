"use client";

import React from "react";
import { projectData } from "@/dataFolder/projectData";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex justify-center items-center overflow-hidden lg:h-[76rem] lg:items-start p-4"
    >
      <div className="relative w-full lg:full">
        <h2 className="text-white text-right text-[1.5rem] font-bold mb-[6rem] md:text-[3rem] lg:font-bold lg:text-[4rem] lg:mb-[10rem]">
          Projects
        </h2>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[14rem] md:animate-spin-slow blur-[31px] md:top-[7rem] md:w-full md:right-[10rem] lg:h-full lg:top-[3.4rem] lg:right-[41rem] hidden md:block">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[36rem] md:animate-spin-slow blur-[31px] md:top-[18rem] md:right-[-13rem] lg:w-[50rem] lg:h-[50rem] lg:top-[18rem] hidden md:block">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[7rem] md:grid md:grid-cols-2 md:gap-[1rem] lg:justify-items-center lg:h-1/2">
          {projectData.map((data, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                key={data.title}
                className={classNames(
                  "relative flex flex-col justify-end items-center pt-[2rem] px-[2rem] pb-[1rem] rounded-md w-full h-[15rem] backdrop-blur-sm drop-shadow-xl text-black md:w-[21rem] md:h-[13rem] md:mb-[4rem] lg:h-[23rem] lg:w-[27rem] lg:mb-[6rem] xl:h-full xl:w-[50%] xl:max-w-[50rem] xl:max-h-[40rem]",
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
                  className="absolute w-[90%] h-full drop-shadow-2xl top-[-5rem] lg:h-[57%] transition lg:top-[2rem] lg:ease-in-out lg:delay-150  lg:hover:-translate-y-[8rem] lg:hover:scale-100  lg:duration-300 lg:z-10 xl:w-full xl:h-full"
                >
                  <Image
                    alt=""
                    src={data.images.desktopView}
                    fill
                    className="object-contain"
                  />
                </Link>
                <div className="flex flex-col gap-2 justify-center items-center drop-shadow-2xl">
                  <p className="hidden lg:block mb-[2rem]">{data.desc}</p>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
