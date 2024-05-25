import { GalleryType } from "@/types/GalleryType";
import React from "react";
import Image from "next/image";

type Props = {
  VARIANT: "HORIZONTAL" | "VERTICAL";
  data: GalleryType;
};

const GalleryTemplate = (props: Props) => {
  const { VARIANT, data } = props;
  if (VARIANT === "VERTICAL") {
    return (
      <div className="flex gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.images
            .filter((image) => {
              return !image.isLandscape;
            })
            .map((image, index) => {
              return (
                <div className="grid gap-4" key={image.asset._id + index}>
                  <div>
                    <Image
                      src={image.asset.url}
                      alt={image.alt}
                      className={`h-auto max-w-full`}
                      width={1920}
                      height={1080}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {data.images
        .filter((image) => {
          return image.isLandscape;
        })
        .map((image, index) => {
          return (
            <div key={image.asset._id + index} className="relative w-full">
              <Image
                src={image.asset.url}
                alt={image.alt}
                width={1920}
                height={1080}
                className="object-fill"
              />
            </div>
          );
        })}
    </div>
  );
};

export default GalleryTemplate;
