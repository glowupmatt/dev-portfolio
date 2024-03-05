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
  secondTextBody: {
    id: number;
    title: string;
    desc: string;
  }[];
  roleData: {
    id: number;
    title: string;
    content: string;
  }[];
  mainHighlight: {
    title: string;
    desc: string;
  };
};

const BlogPostTemplate = (props: Props) => {
  const { firstTextBody, secondTextBody, roleData, mainHighlight } = props;
  const diagramImage = "/project-brakdowns/auth-diagram.png";

  const headerThreeStyles = "text-[1.2rem] font-bold md:text-[2rem]";
  const paragraphStyles =
    "text-[.8rem] font-[500] md:text-[1.5rem] md:font-[300]";
  const headerFourStyles = "text-[1rem] font-bold md:text-[2rem] ";
  const sectionContainerStyles = "flex flex-col gap-[2rem]";
  return (
    <section className="text-white flex flex-col gap-[3rem]">
      <TitleHeader />
      <RoleDisplay
        roleData={roleData}
        headerThreeStyles={headerThreeStyles}
        paragraphStyles={paragraphStyles}
      />
      <FirstTextBody
        firstTextBody={firstTextBody}
        headerThreeStyles={headerThreeStyles}
        paragraphStyles={paragraphStyles}
        sectionContainerStyles={sectionContainerStyles}
        headerFourStyles={headerFourStyles}
        diagramImage={diagramImage}
      />
      <SecondTextBody
        mainHighlight={mainHighlight}
        secondTextBody={secondTextBody}
        headerThreeStyles={headerThreeStyles}
        paragraphStyles={paragraphStyles}
        sectionContainerStyles={sectionContainerStyles}
        headerFourStyles={headerFourStyles}
      />
    </section>
  );
};

export default BlogPostTemplate;
