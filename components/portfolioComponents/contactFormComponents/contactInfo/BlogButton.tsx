"use client";
import React, { useContext } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { NavState } from "@/app/appContext/NavContext";
import Link from "next/link";

type Props = {
  textRef: React.MutableRefObject<HTMLDivElement | null>;
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

const BlogButton = (props: Props) => {
  const { textRef, isHovered, handleMouseEnter, handleMouseLeave } = props;
  const { setSelectedId } = useContext(NavState);
  return (
    <div
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center md:self-end"
    >
      <Link
        onClick={() => setSelectedId("blog")}
        className="absolute z-10 text-white font-bold text-center p-4"
        href="/blog"
      >
        Check out my Blog
      </Link>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity }}
      >
        <div
          className={classNames(
            "bg-transparent border-dashed border-2 w-[7rem] h-[7rem] border-white justify-center flex items-center rounded-full transition ease-in-out delay-150 duration-300 xl:h-[9rem] xl:w-[9rem] cursor-pointer",
            {
              "bg-[#58456a]": isHovered,
            }
          )}
        ></div>
      </motion.div>
    </div>
  );
};

export default BlogButton;
