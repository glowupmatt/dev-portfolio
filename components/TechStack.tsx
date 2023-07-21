import React from "react";
import Image from "next/image";
import { techStackInfo } from "@/dataFolder/techStack";
const TechStack = () => {
  return (
    <div className="relative flex flex-col justify-center items-center rounded-t-[10rem]">
      <div className="text-white flex flex-col justify-center items-center gap-[2rem] absolute">
        <h2 className="w-full text-start">My Technology Stack</h2>
        <div className="grid grid-cols-3 gap-4">
          {techStackInfo.map((data) => {
            return (
              <div key={data.title} className="relative">
                <div className="bg-white h-[5rem] w-[5rem] rounded-full drop-shadow-[4rem] flex flex-col justify-center items-center gap-[5px]">
                  <div className="relative w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
                    <Image alt="" src={data.image} fill quality={100} />
                  </div>
                  <p className="text-black text-[9px]">{data.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[70vh] w-full"></div>
    </div>
  );
};

export default TechStack;
