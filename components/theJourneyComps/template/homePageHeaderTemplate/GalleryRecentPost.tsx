import { GalleryType } from "@/types/GalleryType";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  mostRecentPost: GalleryType;
};

const GalleryRecentPost = (props: Props) => {
  const { mostRecentPost } = props;
  const photo = mostRecentPost.images[2];
  return (
    <Link
      href={`/the-journey/posts/gallery/${mostRecentPost.slug}`}
      className="hidden md:block"
    >
      <Image
        src={photo.asset.url}
        alt={photo.alt}
        width={630}
        height={640}
        className="max-h-[23rem] object-cover"
      />
      <div className="max-w-[630px] text-center flex gap-4 flex-col p-4 mt-[2rem]">
        <p className="font-spectral md:text-[40px]">{mostRecentPost.title}</p>
      </div>
    </Link>
  );
};

export default GalleryRecentPost;
