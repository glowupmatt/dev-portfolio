import React from "react";
import Image from "next/image";
import { ImageType } from "@/types/PostType";
type Props = {
  postTitle: string;
  postImage: ImageType;
  excerpt: string;
};

const PostViewHeader = (props: Props) => {
  const { postTitle, postImage, excerpt } = props;
  return (
    <div className="mb-[5rem] relative">
      <div className="absolute z-10 w-full h-full flex flex-col gap-[1rem] items-start md:items-start justify-center p-8">
        <h3
          className="text-[2rem] md:text-[4rem] font-spectral font-bold tracking-widest"
          style={{ textShadow: "1px 2px 1rem #000000" }}
        >
          {postTitle}
        </h3>
        <p
          className="text-[.8rem] md:text-[1rem] font-spectral font-light tracking-widest max-w-[30rem]"
          style={{ textShadow: "1px 2px 1rem #000000" }}
        >
          {excerpt}
        </p>
      </div>
      <div className="relative w-full h-full">
        <Image
          src={postImage?.src}
          alt={postImage?.alt}
          width={1920}
          height={1080}
          className="object-cover max-h-[15rem] md:max-h-[36rem]"
        />
      </div>
    </div>
  );
};

export default PostViewHeader;
