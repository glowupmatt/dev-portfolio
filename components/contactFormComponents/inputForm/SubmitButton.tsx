import React from "react";
import Image from "next/image";

type Props = {};

const SubmitButton = (props: Props) => {
  return (
    <div className="h-full flex w-full lg:col-span-1 lg:justify-self-stretch">
      <button className="relative w-full flex-col flex justify-center items-center gap-1 p-[2rem] rounded-full drop-shadow-lg lg:w-full lg:h-full lg:rounded-[5rem] transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500 ring-black border-black border-[5px]">
        <div className="relative w-[20px] h-[20px] md:w-[50px] md:h-[50px] z-10">
          <Image
            alt="paper-plane-icon"
            src="/icons/paper-plane-regular.svg"
            fill
          />
        </div>
        <div className="absolute w-full h-full ">
          <Image
            alt="gradient-designs"
            src="/gradient-designs/gradient-5.png"
            fill
            className="object-cover rounded-full lg:rounded-[5rem]"
          />
        </div>
        <p className="z-10">Send</p>
      </button>
    </div>
  );
};

export default SubmitButton;
