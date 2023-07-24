"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRef } from "react";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden lg:justify-start lg:h-[70rem] p-4">
      <div className="relative font-sans text-center leading-[1.7rem] text-[2rem] text-white my-[3rem] md:text-[5rem] lg:h-[18rem] md:leading-[4rem] lg:flex lg:flex-col lg:justify-center lg:font-bold">
        <div className="absolute w-[43rem] h-[33rem] right-[-2rem] top-[-3rem] md:right-[13rem] lg:w-[75rem] lg:h-[57rem] lg:right-[22rem] lg:top-[9rem] md:animate-spin-slow blur-[31px]">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute hidden lg:block lg:w-[32rem] lg:h-[22rem] lg:right-[-44rem] lg:top-[-2rem] md:animate-spin-slow blur-[31px]">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="z-10">Matthew</h2>
        <h2 className="z-10">Nicholson</h2>
      </div>

      <section className=" lg:grid lg:grid-cols-2 lg:justify-center lg:items-center lg:gap-4 z-10">
        <Link
          href="#projects"
          className=" bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400
    background-animate h-[17rem] w-full rounded-[3rem] flex flex-col justify-between items-center p-[2rem] md::max-w-[30rem] lg:max-w-full lg:h-[30rem] transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500"
        >
          <p className="md:text-[2rem] md:text-start smd:text-[1.5rem]">
            Hello! I am Matthew Nicholson and I craft stunning front-end
            experiences
          </p>
          <div className="flex justify-between w-full items-center">
            <div className="relative w-[30px] h-[30px] self-end md:w-[50px] md:h-[50px]">
              <Image alt="" src="/icons/hello.png" fill />
            </div>
            <p className="text-[10px] md:text-[1rem]">
              Click To See My Projects!
            </p>
          </div>
        </Link>
        <div className="flex w-full gap-[1rem] pt-4 lg:h-full lg:pt-0 lg:flex lg:flex-col">
          <Link
            href="#tech"
            className="relative  rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[9rem] lg:col-span-2 lg:h-full transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500"
          >
            <div className="absolute w-full h-full ">
              <Image
                alt=""
                src="/gradient-designs/gradient-5.png"
                fill
                className="object-cover rounded-full "
              />
            </div>
            <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px]">
              <Image alt="" src="/icons/tech-stack.svg" fill />
            </div>
            <p className="md:text-[1rem] z-10 text-white lg:text-[2rem]">
              Tech
            </p>
          </Link>
          <Link
            href="#contact"
            className="relative  text-white rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[9rem] lg:row-span-2 col-span-2 lg:h-full transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500"
          >
            <div className="absolute w-full h-full ">
              <Image
                alt=""
                src="/gradient-designs/gradient-one.png"
                fill
                className="object-cover rounded-full "
              />
            </div>
            <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px] ">
              <Image alt="" src="/icons/contact.svg" fill />
            </div>
            <p className="md:text-[1rem] z-10 lg:text-[2rem]">Contact</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Menu;
