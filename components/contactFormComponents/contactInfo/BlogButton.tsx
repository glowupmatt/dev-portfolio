import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  textRef: React.MutableRefObject<HTMLDivElement | null>;
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

const BlogButton = (props: Props) => {
  const { textRef, isHovered, handleMouseEnter, handleMouseLeave } = props;
  return (
    <div
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center self-end"
    >
      <Link
        className="absolute z-10 text-white font-bold text-center"
        target="_blank"
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
            "bg-transparent border-dashed border-2 h-[4rem] w-[4rem] border-white justify-center flex items-center rounded-full transition ease-in-out delay-150 duration-300 xl:h-[9rem] xl:w-[9rem] cursor-pointer",
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
