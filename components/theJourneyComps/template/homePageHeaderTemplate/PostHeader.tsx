import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "@/types/PostType";

type Props = {
  mostRecentPost: PostType;
};

const PostHeader = (props: Props) => {
  const { mostRecentPost } = props;
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute z-10 w-full h-full flex flex-col gap-[.5rem] md:gap-[1rem] items-center justify-center">
        <h2
          className={
            "font-spectral text-[1.5rem] text-start md:text-[90px] drop-shadow-xl tracking-widest"
          }
        >
          {mostRecentPost.title}
        </h2>
        <p className="text-[.6rem] md:text-[1rem] px-4 font-spectral max-w-[30rem] text-center">
          {mostRecentPost.excerpt}
        </p>
        <Link
          href={`/the-journey/posts/${mostRecentPost.slug}`}
          className="text-[.8rem] md:text-[1rem] text-start font-extralight font-spectral p-1 bg-white text-black rounded-sm drop-shadow-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          Click to View
        </Link>
      </div>
      <div className="relative w-full h-full blur-[2px]">
        <Image
          src={mostRecentPost.mainImage.src}
          alt={mostRecentPost.mainImage.alt}
          width={1920}
          height={1080}
          className="grayscale max-h-[23rem] md:max-h-[37rem] object-cover"
        />
      </div>
    </div>
  );
};

export default PostHeader;
