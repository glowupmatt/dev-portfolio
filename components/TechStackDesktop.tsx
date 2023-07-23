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

const TechStackDesktop = ({ techStackInfo }: TechStackDesktopType) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-[3rem] h-full w-full justify-items-center md:gap-[2rem] lg:grid-cols-2 lg:auto-rows-fr lg:p-[4rem]">
      {techStackInfo.map((data, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            initial={{ x: isEven ? 300 : -300 }}
            whileInView={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: isEven ? -300 : 300 }}
            key={data.title}
            className="relative even:bg-gray-500 odd:bg-white rounded-full drop-shadow-[4rem] flex flex-col justify-center items-center gap-[5px] h-[5rem] w-[5rem] md:h-[8rem] md:w-[8rem] lg:w-full lg:h-[9rem] "
          >
            <div
              className={classNames(
                "flex flex-col justify-center items-center lg:h-full lg:flex-row transition  lg:ease-in-out lg:hover:scale-[1.2] lg:duration-500"
              )}
            >
              <div className="relative lg:h-[4rem] lg:w-[7rem]">
                <Image alt="" src={data.image} fill />
              </div>
              <p className="text-[9px] text-black lg:text-[2rem]">
                {data.title}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechStackDesktop;
