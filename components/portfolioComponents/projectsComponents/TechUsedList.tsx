import React from "react";
import { CardContent } from "@/components/ui/card";
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

const TechUsedList = (props: Props) => {
  const { data } = props;
  return (
    <CardContent className="gap-3 items-center justify-center grid grid-cols-2 justify-items-center">
      {data?.techUsed.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="flex gap-2 justify-between items-center w-[7rem] h-[3rem]"
          >
            <p
              key={index}
              className="text-[0.8rem] text-center md:text-[1rem] font-[500]"
            >
              {data.title}
            </p>
            <div className="w-[2rem] h-[2rem]">
              <Image
                src={data.image}
                alt={data.title}
                width={100}
                height={100}
              />
            </div>
          </div>
        );
      })}
    </CardContent>
  );
};

export default TechUsedList;
