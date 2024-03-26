"use client";
import React, { useContext } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { ProjectState } from "@/app/appContext/ProjectContext";

type Props = {};

const ProjectInfoDisplay = (props: Props) => {
  const { projectData } = useContext(ProjectState);
  return (
    <div className="flex flex-col gap-[7rem] md:grid md:grid-cols-2 md:gap-[1rem] lg:grid-cols-3 lg:justify-items-center items-center justify-items-center">
      {projectData
        .sort((a, b) => a.data?.id - b.data?.id)
        .map((data, index) => {
          return <ProjectCard key={data.id} data={data.data} index={index} />;
        })}
    </div>
  );
};

export default ProjectInfoDisplay;
