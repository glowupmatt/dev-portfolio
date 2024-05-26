import post from "@/sanity/schemaTypes/post";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { textTemplate } from "../HeaderStyles";
import { Post } from "@/types/PostType";

type Props = {
  post: Post;
};

const PreviewPostBody = (props: Props) => {
  const { post } = props;
  return (
    <Link
      href={`/the-journey/posts/${post.slug}`}
      className="pl-4 pr-4 w-full flex flex-col gap-4"
    >
      <Image
        src={post.mainImage.src}
        alt={post.mainImage.alt}
        width={1080}
        height={1920}
        className="rounded-sm w-full object-cover h-[12rem]"
      />
      <div className="w-full flex flex-col text-center items-start">
        <h2
          className={textTemplate(
            "h2",
            "w-full flex flex-col text-center items-start font-spectral lg:text-[1.5rem]",
          )}
        >
          {post.title}
        </h2>
        <p
          className={textTemplate(
            "p",
            "text-start font-spectral lg:text-[1rem]",
          )}
        >
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default PreviewPostBody;
