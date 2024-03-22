import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ContactButton = (props: Props) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full w-full"
    >
      <Link
        href="#contact"
        className="relative  text-white rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[9rem] lg:row-span-2 col-span-2 lg:h-full transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500"
      >
        <div className="absolute w-full h-full ">
          <Image
            alt=""
            src="/gradient-designs/gradient-one.png"
            fill
            className="object-cover rounded-full "
            sizes="100vw"
          />
        </div>
        <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px] ">
          <Image alt="" src="/icons/contact.svg" fill sizes="100vw" />
        </div>
        <p className="md:text-[1rem] z-10 lg:text-[2rem]">Contact</p>
      </Link>
    </motion.div>
  );
};

export default ContactButton;
