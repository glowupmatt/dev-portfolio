import React from "react";
import { Post } from "@/types/Project";
import Image from "next/image";

type Props = {
  post: Post;
};

const PreviewPosts = (props: Props) => {
  const { post } = props;
  // console.log(post.body[0].children[0].text);
  return (
    <div className="p-4">
      <Image
        src={post.mainImage.src}
        alt={post.mainImage.alt}
        width={1080}
        height={1920}
        className="rounded-sm w-full max-w-[40rem] max-h-[10rem] object-cover"
      />
      <div className="w-full flex flex-col text-center items-start pt-4">
        <h2 className="bold text-[1.5rem]">{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default PreviewPosts;
