"use client";
import React, { createContext, useState } from "react";
import { BuilderContent, BuilderElement, Input } from "@builder.io/sdk";
import { BuilderContentVariation } from "@builder.io/sdk";

type Props = {
  children: React.ReactNode;
};
type ProjectContextType = {
  projectData: BuilderContentVariation[];
  setProjectData: (value: BuilderContentVariation[]) => void;
};
export const ProjectState = createContext({} as ProjectContextType);
const ProjectContext = (props: Props) => {
  const { children } = props;
  const [projectData, setProjectData] = useState<BuilderContentVariation[]>([]);
  return (
    <ProjectState.Provider
      value={{ projectData, setProjectData } as ProjectContextType}
    >
      {children}
    </ProjectState.Provider>
  );
};

export default ProjectContext;
