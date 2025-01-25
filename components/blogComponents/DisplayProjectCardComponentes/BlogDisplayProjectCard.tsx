"use client";
import { BuilderElement, Input } from "@builder.io/sdk";
import React from "react";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";
import TextDisplay from "./TextDisplay";

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

const BlogDisplayProjectCard = (props: Props) => {
  const { data, index } = props;
  if (data && !data.roleDisplayData) return null;

  return (
    <div className="flex flex-col gap-4 h-full w-full rounded-xl border-solid border-4 border-black overflow-hidden">
      <div
        className="relative"
        onClick={() =>
          sendGTMEvent({ event: "buttonClicked", value: "User_Visit_Blog" })
        }
      >
        <TextDisplay data={data} />
        <div className="blur-sm brightness-[0.6]">
          <Image
            alt="project-photos"
            src={data?.headerImage}
            width={1080}
            height={1920}
            className="object-cover rounded-xl w-full h-auto hidden md:block max-h-[322px]"
          />
          <Image
            alt="project-photos"
            src={data?.headerImage}
            width={600}
            height={600}
            className="object-cover rounded-xl w-full h-auto md:hidden min-h-[301px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDisplayProjectCard;
