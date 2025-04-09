import { BuilderElement, Input } from "@builder.io/sdk";
import Link from "next/link";
import React from "react";

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

const TextDisplay = (props: Props) => {
  const { data } = props;
  if (data && !data.roleDisplayData) return null;

  return (
    <div className="justify-center rounded-lg absolute z-10 text-white h-full w-full p-4 flex items-start flex-col gap-4 text-start">
      <Link href={`/project-breakdowns/${data?.blogUrl}`}>
        <h4 className="font-[800] text-[1.5rem] md:text-[2rem]">
          {data?.postName}
        </h4>
      </Link>
      <div className="flex flex-col gap-2">
        <p className="text-[.9rem] font-semibold md:text-[1.3rem]">
          Challenge:{" "}
        </p>
        <p className="text-white text-[.8rem] md:text-[.8rem] md:max-w-[25rem]">
          {data?.roleDisplayData[0].content}
        </p>
      </div>
      <button className="bg-white/50 p-2 rounded-md shadow-xl hover:bg-white hover:text-black transition duration-300 ease-in-out">
        <Link href={`/project-breakdowns/${data?.slug}`}>Read Post</Link>
      </button>
    </div>
  );
};

export default TextDisplay;
