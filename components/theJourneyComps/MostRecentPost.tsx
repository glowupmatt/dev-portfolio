import React from "react";
import { PostType } from "@/types/Project";
import Image from "next/image";

type Props = {
  mostRecentPost: PostType;
};

const MostRecentPost = (props: Props) => {
  const { mostRecentPost } = props;
  const photo = mostRecentPost.leftSideImage;
  return (
    <div className="hidden md:block">
      <Image src={photo.src} alt={photo.alt} width={630} height={640} />
      <div className="max-w-[630px] text-center flex gap-4 flex-col p-4 mt-[64px]">
        <p className="font-spectral md:text-[60px]">{mostRecentPost.title}</p>
        <p className="font-spectral md:text-[1rem]">{mostRecentPost.excerpt}</p>
      </div>
    </div>
  );
};

export default MostRecentPost;
