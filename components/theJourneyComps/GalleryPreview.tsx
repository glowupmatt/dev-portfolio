import React from "react";
import { GalleryType } from "@/types/GalleryType";
import Image from "next/image";
import Link from "next/link";

type Props = {
  gallery: GalleryType;
};

const GalleryPreview = (props: Props) => {
  const { gallery } = props;
  return (
    <Link
      href={`/the-journey/posts/gallery/${gallery.slug}`}
      className="flex flex-col gap-4 p-4"
    >
      <div className="relative w-full lg:w-[13rem] h-[10rem] xl:w-[15rem]">
        <Image
          key={gallery.images[0].asset._id}
          src={gallery.images[0].asset.url}
          alt={gallery.images[0].alt}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-spectral text-[1.5rem]">{gallery.title}</h3>
    </Link>
  );
};

export default GalleryPreview;
