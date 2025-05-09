import Link from "next/link";
import React from "react";
import Image from "next/image";
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
};

const ProjectLinks = (props: Props) => {
  const { data } = props;
  return (
    <div className="flex gap-3 justify-center items-center">
      <Link
        target="_blank"
        href={data?.githubUrl}
        className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer flex justify-center items-center"
      >
        <Image
          alt="github link"
          src="/github-mark.svg"
          width={100}
          height={100}
          className="object-contain hover:opacity-50 transition duration-100 ease-in-out"
        />
      </Link>
      <Link
        target="_blank"
        href={data?.projectUrl}
        className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer flex justify-center items-center"
      >
        <Image
          alt="website link"
          src="/link-solid.svg"
          width={100}
          height={100}
          className="object-contain  hover:opacity-50 transition duration-100 ease-in-out"
        />
      </Link>
    </div>
  );
};

export default ProjectLinks;
