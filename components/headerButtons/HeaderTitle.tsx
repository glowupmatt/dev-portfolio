import React from "react";
import Image from "next/image";

type Props = {};

const HeaderTitle = (props: Props) => {
  return (
    <div className="relative font-sans text-center leading-[1.7rem] text-[2rem] text-white my-[3rem] md:text-[5rem] lg:h-[18rem] md:leading-[4rem] lg:flex lg:flex-col lg:justify-center lg:font-bold">
      <div className="absolute w-[43rem] h-[33rem] right-[-2rem] top-[-3rem] md:right-[13rem] lg:w-[75rem] lg:h-[57rem] lg:right-[22rem] lg:top-[9rem] md:animate-spin-slow blur-[31px] hidden md:block">
        <Image
          alt=""
          src="/gradient-designs/shape-1.svg"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute hidden lg:block lg:w-[32rem] lg:h-[22rem] lg:right-[-44rem] lg:top-[-2rem] md:animate-spin-slow blur-[31px] ">
        <Image
          alt=""
          src="/gradient-designs/shape-1.svg"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <h2 className="z-10">Matthew</h2>
      <h2 className="z-10">Nicholson</h2>
    </div>
  );
};

export default HeaderTitle;
