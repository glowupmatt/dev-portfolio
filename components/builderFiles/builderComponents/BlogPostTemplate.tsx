/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import TitleHeader from "./blogPostTemplateFiles.tsx/TitleHeader";
import RoleDisplay from "./blogPostTemplateFiles.tsx/RoleDisplay";
import FirstTextBody from "./blogPostTemplateFiles.tsx/FirstTextBody";
import SecondTextBody from "./blogPostTemplateFiles.tsx/SecondTextBody";

type Props = {
  diagramImage: string;
  headerImage: string;
  projectTitle: string;
  functionOne: string;
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
  const {
    firstTextBody,
    secondTextBody,
    roleData,
    mainHighlight,
    diagramImage,
    headerImage,
    projectTitle,
    functionOne,
  } = props;

  const headerThreeStyles = "text-[1.2rem] font-bold md:text-[2rem]";
  const paragraphStyles =
    "text-[.8rem] font-[500] md:text-[1.5rem] md:font-[300]";
  const headerFourStyles = "text-[1rem] font-bold md:text-[2rem] ";
  const sectionContainerStyles = "flex flex-col gap-[2rem]";
  return (
    <section className="text-white flex flex-col gap-[3rem]">
      <TitleHeader headerImage={headerImage} projectTitle={projectTitle} />
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
        functionOne={functionOne}
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
