"use client";
import React, { useContext, useEffect } from "react";
import { ProjectState } from "@/app/appContext/ProjectContext";
import Image from "next/image";
import ProjectInfoDisplay from "./ProjectInfoDisplay";
import { BuilderContent } from "@builder.io/sdk";

type Props = {
  content: BuilderContent[];
};

const Projects = ({ content }: Props) => {
  const { setProjectData } = useContext(ProjectState);
  useEffect(() => {
    setProjectData(content);
  }, [setProjectData, content]);
  return (
    <div
      id="projects"
      className="flex justify-center items-center overflow-hidden lg:h-full lg:items-start p-4 "
    >
      <div className="relative w-full lg:full">
        <h2 className="text-white text-left text-[1.5rem] font-bold mb-[6rem] md:text-[3rem] lg:font-bold lg:text-[4rem] lg:mb-[10rem]">
          Projects
        </h2>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[14rem] md:animate-spin-slow blur-[31px] md:top-[7rem] md:w-full md:right-[10rem] lg:h-full lg:top-[3.4rem] lg:left-[-23rem] lg:w-[54rem] hidden md:block">
          <Image
            alt="gradient background shape"
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[36rem] md:animate-spin-slow blur-[31px] md:top-[18rem] md:right-[-13rem] lg:w-[50rem] lg:h-[50rem] lg:top-[18rem] hidden md:block">
          <Image
            alt="gradient background shape"
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <ProjectInfoDisplay />
      </div>
    </div>
  );
};

export default Projects;
