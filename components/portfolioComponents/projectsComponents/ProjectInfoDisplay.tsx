import { projectData } from "@/dataFolder/projectData";
import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

type Props = {};

const ProjectInfoDisplay = (props: Props) => {
  return (
    <div className="flex flex-col gap-[7rem] md:grid md:grid-cols-2 md:gap-[1rem] lg:grid-cols-3 lg:justify-items-center items-center justify-items-center">
      {projectData.map((data, index) => {
        return <ProjectCard key={data.id} data={data} index={index} />;
      })}
    </div>
  );
};

export default ProjectInfoDisplay;
