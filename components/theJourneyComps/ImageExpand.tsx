import React from "react";
import Image from "next/image";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

const ImageExpand = (props: Props) => {
  const { imageSrc, imageAlt } = props;
  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      className={`h-auto max-w-full`}
      width={1920}
      height={1080}
    />
  );
};

export default ImageExpand;
