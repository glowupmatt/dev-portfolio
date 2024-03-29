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
  console.log(data);
  return (
    <div className="justify-center rounded-lg absolute z-10 text-white h-full w-full p-4 flex items-start flex-col gap-4 text-start">
      <h4 className="font-[800] text-[1.5rem] md:text-[2rem]">{data?.title}</h4>
      <div className="flex flex-col gap-2">
        <p className="text-[.9rem] font-semibold md:text-[1.3rem]">
          Challenge:{" "}
        </p>
        <p className="text-white text-[.8rem] md:text-[1.2rem] md:max-w-[25rem]">
          {data?.roleDisplayData[0].content}
        </p>
      </div>
      <button className="bg-white/50 p-2 rounded-md shadow-xl">
        <Link href={`/blog/${data?.blogUrl}`}>Read Post</Link>
      </button>
    </div>
  );
};

export default TextDisplay;
