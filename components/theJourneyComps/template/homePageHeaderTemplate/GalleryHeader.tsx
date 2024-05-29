import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryType } from "@/types/GalleryType";

type Props = {
  mostRecentPost: GalleryType;
};

const GalleryHeader = (props: Props) => {
  const { mostRecentPost } = props;
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute z-10 w-full h-full flex flex-col gap-[.5rem] md:gap-[1rem] items-center justify-center">
        <h2
          className={
            "font-spectral text-[1.5rem] md:text-[35px] lg:text-[70px] drop-shadow-xl tracking-widest lg:px-[2rem] text-center"
          }
        >
          {mostRecentPost.title}
        </h2>

        <Link
          href={`/the-journey/posts/gallery/${mostRecentPost.slug}`}
          className="text-[.8rem] md:text-[1rem] text-start font-radio-canada font-light p-1 bg-white text-black rounded-sm drop-shadow-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          Click to View
        </Link>
      </div>
      <div className="relative w-full h-full blur-[2px]">
        <Image
          src={mostRecentPost.images[0].asset.url}
          alt={mostRecentPost.images[0].alt}
          width={1920}
          height={1080}
          className="grayscale max-h-[23rem] md:max-h-[37rem] object-cover"
        />
      </div>
    </div>
  );
};

export default GalleryHeader;
