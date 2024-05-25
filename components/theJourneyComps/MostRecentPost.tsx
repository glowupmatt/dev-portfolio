import React from "react";
import { PostType } from "@/types/PostType";
import Image from "next/image";
import Link from "next/link";

type Props = {
  mostRecentPost: PostType;
};

const MostRecentPost = (props: Props) => {
  const { mostRecentPost } = props;
  const photo = mostRecentPost.leftSideImage;
  return (
    <Link
      href={`/the-journey/posts/${mostRecentPost.slug}`}
      className="hidden md:block"
    >
      <Image src={photo.src} alt={photo.alt} width={630} height={640} />
      <div className="max-w-[630px] text-center flex gap-4 flex-col p-4 mt-[64px]">
        <p className="font-spectral md:text-[60px]">{mostRecentPost.title}</p>
        <p className="font-spectral md:text-[1rem]">{mostRecentPost.excerpt}</p>
      </div>
    </Link>
  );
};

export default MostRecentPost;
