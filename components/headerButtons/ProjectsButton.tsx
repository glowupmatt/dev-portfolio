import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ProjectsButton = (props: Props) => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Link
        href="#projects"
        className=" bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400
background-animate h-[17rem] w-full rounded-[3rem] flex flex-col justify-between items-center p-[2rem] md::max-w-[30rem] lg:max-w-full lg:h-[30rem] transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500"
      >
        <p className="md:text-[2rem] md:text-start smd:text-[1.5rem] xl:text-[3rem]">
          Hello! I am Matthew Nicholson and I craft stunning web experiences.
        </p>
        <div className="flex justify-between w-full items-center">
          <div className="relative w-[30px] h-[30px] self-end md:w-[50px] md:h-[50px]">
            <Image alt="" src="/icons/hello.png" fill sizes="100vw" />
          </div>
          <p className="text-[10px] md:text-[1rem]">
            Click To See My Projects!
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectsButton;
