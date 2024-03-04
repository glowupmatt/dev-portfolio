/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const TitleHeader = (props: Props) => {
  return (
    <div className="relative">
      <h2 className="text-[2rem] font-bold text-center leading-[2rem] absolute z-[10] shadow-lg h-full w-full flex justify-center items-center">
        Kanban Project Break Down
      </h2>
      <div className="relative w-full h-[10rem] blur-sm lg:h-[18rem]">
        <img
          src="/ProjectPhotos/Kanban.png"
          alt="project-photo"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default TitleHeader;
