import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const TechButton = (props: Props) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full"
    >
      <Link
        href="#tech"
        className="relative rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[9rem] lg:col-span-2 lg:h-full transition lg:ease-in-out lg:hover:scale-[.96] lg:duration-500"
      >
        <div className="absolute w-full h-full">
          <Image
            alt=""
            src="/gradient-designs/gradient-5.png"
            fill
            className="object-cover rounded-full "
            sizes="100vw"
          />
        </div>
        <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px]">
          <Image alt="" src="/icons/tech-stack.svg" fill sizes="100vw" />
        </div>
        <p className="md:text-[1rem] z-10 text-white lg:text-[2rem]">Tech</p>
      </Link>
    </motion.div>
  );
};

export default TechButton;
