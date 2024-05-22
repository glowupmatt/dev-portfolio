import React from "react";
import { Post } from "@/types/Project";
import Image from "next/image";
import { textTemplate } from "@/components/theJourneyComps/HeaderStyles";

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
      <div className="w-full flex flex-col text-center items-start">
        {post.categories &&
          post.categories.map((category, index) => {
            return (
              <p
                key={index}
                className="text-[.6rem] text-start mt-2 font-extralight font-spectral p-2 bg-slate-600 rounded-[.3rem] text-white"
              >
                {category.title}
              </p>
            );
          })}
        <h2
          className={textTemplate(
            "h2",
            "w-full flex flex-col text-center items-start",
          )}
        >
          {post.title}
        </h2>
        <p className={textTemplate("p", "text-start")}>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default PreviewPosts;
