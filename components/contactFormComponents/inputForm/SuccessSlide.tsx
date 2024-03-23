import React from "react";
import { HighFive } from "./CharacterAnimation";

type Props = {};

const SuccessSlide = (props: Props) => {
  return (
    <div className="w-full h-[24rem] p-[2rem] gap-[2rem] rounded-[3rem] text-[#d289ff] bg-[#2c2b2c] ring-[5px]ring-black  focus:outline-none lg:h-[32rem] ring-black border-black border-[5px] lg:text-[2rem] justify-center items-center flex flex-col">
      <p className="text-center self-center">Thank you for your message!</p>
      <div className="flex content-center items-center">
        <HighFive />
      </div>
    </div>
  );
};

export default SuccessSlide;
