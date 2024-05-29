import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "@/types/PostType";

type Props = {
  mostRecentPost: PostType;
};

const BlogRecentPost = (props: Props) => {
  const { mostRecentPost } = props;
  const photo = mostRecentPost.leftSideImage;
  return (
    <Link
      href={`/the-journey/posts/${mostRecentPost.slug}`}
      className="hidden md:block hover:shadow-2xl transition-all duration-300 ease-in-out rounded-md"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={630}
        height={640}
        className="max-h-[23rem] object-cover"
      />
      <div className="max-w-[630px] text-center flex gap-4 flex-col p-4 mt-[2rem]">
        <p className="font-spectral md:text-[60px]">{mostRecentPost.title}</p>
        <p className="font-spectral md:text-[1rem]">{mostRecentPost.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogRecentPost;
