import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

type TechStackDesktopType = {
  techStackInfo: {
    id: number;
    title: string;
    image: string;
  }[];
};

const TechStackMobile = ({ techStackInfo }: TechStackDesktopType) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-[3rem] h-full w-full justify-items-center md:gap-[2rem]">
      {techStackInfo.map((data, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            key={data.title}
            className="relative even:bg-gray-500 odd:bg-white rounded-full drop-shadow-[4rem] flex flex-col justify-center items-center gap-[5px] h-[5rem] w-[5rem] md:h-[8rem] md:w-[8rem]"
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
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechStackMobile;
