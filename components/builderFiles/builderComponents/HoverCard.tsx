"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Builder, BuilderComponent } from "@builder.io/react";
import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

const HoverCard = (props: Props) => {
  const { title, link } = props;
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);
  const router = useRouter();
  return (
    <div className="text-white">
      <div
        id="Project break down"
        className="flex flex-col justify-center items-center w-full"
      >
        <div
          onClick={() => router.push(`/blog${link}`)}
          ref={hoverRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative cursor-pointer"
        >
          <div
            className={clsx(
              "absolute p-4 z-10 duration-300 flex justify-center items-start h-full w-full flex-col gap-[1rem] md:gap-[3rem]",
              { "text-white": !isHovered },
              { "text-purple-400": isHovered }
            )}
          >
            <h5 className="text-[.8rem] md:text-[1rem] font-bold">{title}</h5>
            <p className="text-[.5rem] md:text-[.8rem]">
              Click For More Details
            </p>
          </div>
          <div
            id="Blog Display"
            className={clsx(
              "rounded-[2rem] duration-300 w-[5rem] h-[6rem] md:w-[10rem] md:h-[10rem] max-w-[10rem] max-h-[10rem]",
              { "bg-[#3d3d3d] shadow-sm": !isHovered },
              { "bg-purple-100 shadow-2xl": isHovered }
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default HoverCard;
