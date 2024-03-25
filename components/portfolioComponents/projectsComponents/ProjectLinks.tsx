import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  data: {
    githubUrl: string;
    projectUrl: string;
  };
};

const ProjectLinks = (props: Props) => {
  const { data } = props;
  return (
    <div className="flex gap-3 justify-center items-center">
      <Link
        target="_blank"
        href={data.githubUrl}
        className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer flex justify-center items-center"
      >
        <Image
          alt="github link"
          src="/github-mark.svg"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>
      <Link
        target="_blank"
        href={data.projectUrl}
        className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer flex justify-center items-center"
      >
        <Image
          alt="website link"
          src="/link-solid.svg"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default ProjectLinks;
