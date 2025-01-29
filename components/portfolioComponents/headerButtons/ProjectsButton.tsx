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
        className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 background-animate h-[17rem] w-full rounded-[3rem] flex flex-col justify-between items-center p-[2rem] md::max-w-[30rem] lg:max-w-full lg:h-[30rem] transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500"
      >
        <div className="hidden md:block w-full">
          <p className="text-start text-[1.5rem] font-bold animate-bounce">
            About Me
          </p>
        </div>

        <p className="text-[.7rem] md:text-[1rem] md:text-start smd:text-[.8rem] xl:text-[1.3rem]">
          With a background in marketing, I developed a passion for design and
          code while creating digital experiences. Now, as a Full-Stack
          Developer, I channel that creativity into building scalable web
          applications with TypeScript and React, specializing in CMS tools like
          Contentful. I&apos;ve had the opportunity to work with backend
          languages such as PostgreSQL and MongoDB to streamline workflows and
          enhance user experiences.
        </p>
        <div className="flex justify-between w-full items-center">
          <motion.div
            animate={{ rotate: [50, 0, 50] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative w-[30px] h-[30px] self-end md:w-[50px] md:h-[50px]"
          >
            <Image
              alt="greeting wave"
              src="/icons/hello.png"
              fill
              sizes="100vw"
            />
          </motion.div>
          <p className="text-[10px] md:text-[1rem]">
            Click To See My Projects!
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectsButton;
