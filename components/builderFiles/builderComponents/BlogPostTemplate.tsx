/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import TitleHeader from "./blogPostTemplateFiles.tsx/TitleHeader";
import RoleDisplay from "./blogPostTemplateFiles.tsx/RoleDisplay";
import FirstTextBody from "./blogPostTemplateFiles.tsx/FirstTextBody";
import SecondTextBody from "./blogPostTemplateFiles.tsx/SecondTextBody";

type Props = {
  firstTextBody: {
    id: number;
    desc: string;
  }[];
};

const BlogPostTemplate = (props: Props) => {
  const data = [
    {
      id: 1,
      title: "Challenge ",
      content:
        "Provide a user friendly task management app that allows a user to do basic CRUD functions to keep better track of their tasks.",
    },
    {
      id: 2,
      title: "My Role",
      content: "Web Developer",
    },
    {
      id: 3,
      title: "Tools Used",
      content:
        "Next.js, TypeScript, Tailwind CSS, MongoDB, Next Auth, ShadCn, Figma, Jest Testing",
    },
  ];

  const diagramImage = "/project-brakdowns/auth-diagram.png";

  const mainFeatures = [
    {
      id: 1,
      title: "Create",
      desc: "The user can create a new task by clicking the add button and filling out the form. The form will then be submitted to the server and saved to the database. The user will then see the new task on the kanban board.",
    },
    {
      id: 2,
      title: "Read",
      desc: "The user can read all of their tasks on the kanban board. The user can also read the details of the task by clicking on the task card.",
    },
    {
      id: 3,
      title: "Update",
      desc: "The user can update the task by clicking on the task card and editing the form. The form will then be submitted to the server and updated in the database. The user will then see the updated task on the kanban board.",
    },
    {
      id: 4,
      title: "Delete",
      desc: "The user can delete the task by clicking on the task card and clicking the delete button. The task will then be deleted from the database and the user will no longer see the task on the kanban board.",
    },
  ];

  const headerThreeStyles = "text-[1.2rem] font-bold md:text-[2rem]";
  const paragraphStyles =
    "text-[.8rem] font-[500] md:text-[1.5rem] md:font-[300]";
  const headerFourStyles = "text-[1rem] font-bold md:text-[2rem] ";
  const sectionContainerStyles = "flex flex-col gap-[2rem]";
  return (
    <section className="text-white flex flex-col gap-[3rem]">
      <TitleHeader />
      <RoleDisplay
        data={data}
        headerThreeStyles={headerThreeStyles}
        paragraphStyles={paragraphStyles}
      />
      <FirstTextBody
        firstTextBody={props.firstTextBody}
        headerThreeStyles={headerThreeStyles}
        paragraphStyles={paragraphStyles}
        sectionContainerStyles={sectionContainerStyles}
        headerFourStyles={headerFourStyles}
        diagramImage={diagramImage}
      />
      <SecondTextBody
        mainFeatures={mainFeatures}
        headerThreeStyles={headerThreeStyles}
        paragraphStyles={paragraphStyles}
        sectionContainerStyles={sectionContainerStyles}
        headerFourStyles={headerFourStyles}
      />
    </section>
  );
};

export default BlogPostTemplate;
