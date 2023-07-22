import React from "react";
import Image from "next/image";
import { techStackInfo } from "@/dataFolder/techStack";
import classNames from "classnames";
const TechStack = () => {
  return (
    <div
      id="tech"
      className="h-[30rem] relative w-full overflow-hidden p-4 md:h-[33rem] lg:h-full"
    >
      <div className="absolute w-[27rem] h-[15rem] right-[-14rem] top-[5rem] animate-spin-slow blur-[31px] md:w-[38rem] md:h-[32rem] md:right-[-13rem] md:top-[1rem]">
        <Image
          alt=""
          src="/gradient-designs/shape-1.svg"
          fill
          className="object-cover"
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center rounded-t-[10rem] p-[2rem]">
        <h2 className="w-full text-start font-bold text-[1.5rem] z-10 text-white mb-[2rem] md:text-[2rem]">
          My Technology Stack
        </h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-[3rem] h-full w-full justify-items-center md:gap-[2rem] lg:grid-cols-2 lg:auto-rows-fr">
          {techStackInfo.map((data, index) => {
            return (
              <div
                key={data.title}
                className="relative even:bg-gray-500 odd:bg-white rounded-full drop-shadow-[4rem] flex flex-col justify-center items-center gap-[5px] h-[5rem] w-[5rem] md:h-[8rem] md:w-[8rem] lg:w-full lg:h-[14rem]"
              >
                <div
                  className={classNames(
                    "flex flex-col justify-center items-center"
                  )}
                >
                  <div className="relative w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
                    <Image alt="" src={data.image} fill />
                  </div>
                  <p className="text-[9px] text-black">{data.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
