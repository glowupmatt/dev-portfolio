import React from "react";
import Image from "next/image";
import { techStackInfo } from "@/dataFolder/techStack";
import classNames from "classnames";
const TechStack = () => {
  return (
    <div id="tech" className="h-[25rem] relative w-full overflow-hidden">
      <div className="absolute w-[27rem] h-[15rem] right-[-14rem] top-[5rem] animate-spin-slow blur-[31px]">
        <Image
          alt=""
          src="/gradient-designs/shape-1.svg"
          fill
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center rounded-t-[10rem]">
        <div className="text-white flex flex-col justify-center items-center gap-[2rem] absolute w-full p-[2rem]">
          <h2 className="w-full text-start font-bold text-[1.5rem] z-10">
            My Technology Stack
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {techStackInfo.map((data, index) => {
              return (
                <div key={data.title} className="relative">
                  <div
                    className={classNames(
                      "h-[5rem] w-[5rem] bg-gray-200 rounded-full drop-shadow-[4rem] flex flex-col justify-center items-center gap-[5px]"
                    )}
                  >
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
      </div>
    </div>
  );
};

export default TechStack;
