import React from "react";
import { Card, CardHeader, CardTitle } from "./card";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import TechUsedList from "../portfolioComponents/projectsComponents/TechUsedList";
import ProjectLinks from "../portfolioComponents/projectsComponents/ProjectLinks";
import { BuilderElement, Input } from "@builder.io/sdk";

type Props = {
  data:
    | {
        [key: string]: any;
        blocks?: BuilderElement[] | undefined;
        inputs?: Input[] | undefined;
        state?:
          | {
              [key: string]: any;
            }
          | undefined;
      }
    | undefined;
  index: number;
};

const ProjectCard = (props: Props) => {
  const { data, index } = props;
  const isEven = index % 2 === 0;
  const hrefForBlog = data?.blogUrl
    ? data.blogUrl.includes("http")
      ? data.blogUrl
      : `/project-breakdowns/${data.blogUrl}`
    : null;
  return (
    <Card
      className={classNames(
        "border-black z-50 h-full w-full hover:scale-[1.03] hover:border-white transition duration-500 ease-in-out",
        { "bg-[rgb(208,208,208)]": isEven },
        {
          "bg-white": !isEven,
        },
      )}
    >
      <Link href={data?.projectUrl} target="_blank" className="">
        <Image
          alt="project-photos"
          src={data?.projectPhoto}
          width={1080}
          height={1920}
          className="object-contain rounded-lg w-full h-auto hidden md:block"
        />
        <Image
          alt="project-photos"
          src={data?.projectPhoto}
          width={600}
          height={600}
          className="object-contain rounded-lg w-full h-auto md:hidden"
        />
      </Link>
      <CardHeader className="p-0 pt-[2rem]">
        <CardTitle className="text-center text-[1.5rem] font-bold md:text-[2rem]">
          {data?.title}
        </CardTitle>
      </CardHeader>
      <TechUsedList data={data} />
      <div
        className={classNames(
          "flex items-center py-[1rem] gap-[3rem]",
          { "justify-between": data?.blogUrl },
          { "justify-center": !data?.blogUrl },
        )}
      >
        <div
          className={classNames("", {
            "ml-8 xl:ml-[4rem]": data?.blogUrl,
          })}
        >
          <ProjectLinks data={data} />
        </div>
        {data?.blogUrl && (
          <Link
            href={hrefForBlog}
            target="_blank"
            className="bg-[#b098c7] rounded-l-full h-[4rem] p-[1rem] w-[50%] text-[.5rem] items-center justify-center flex hover:bg-[#58456a] transition duration-300 ease-in-out hover:text-white cursor-pointer"
          >
            <p className="text-center text-[.8rem] font-bold">
              Click for project <br />
              breakdown
            </p>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
