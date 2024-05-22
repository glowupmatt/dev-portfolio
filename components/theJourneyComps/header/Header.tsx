import { PostType } from "@/types/Project";
import { textTemplate } from "../HeaderStyles";
import Image from "next/image";
import React from "react";

type Props = {
  mostRecentPost: PostType;
};

const Header = (props: Props) => {
  const { mostRecentPost } = props;

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute z-10 w-full h-full flex flex-col items-center justify-center">
        <h2
          className={
            "font-spectral text-[1.5rem] text-start md:text-[90px] drop-shadow-xl tracking-widest"
          }
        >
          {mostRecentPost.title}
        </h2>
        <p className="text-[.6rem] text-start font-extralight font-spectral p-1 bg-white text-black rounded-sm drop-shadow-xl mt-2">
          Click to Vie
        </p>
      </div>
      <div className="relative w-full h-full blur-[2px]">
        <Image
          src={mostRecentPost.mainImage.src}
          alt={mostRecentPost.mainImage.alt}
          width={1920}
          height={1080}
          className="grayscale"
        />
      </div>
    </div>
  );
};

export default Header;
