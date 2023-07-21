import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-sans text-center leading-6 text-[2rem] text-white my-[3rem]">
        <h2>Matthew</h2>
        <h2>Nicholson</h2>
      </div>
      <section className="p-[1rem] lg:grid lg:grid-cols-2">
        <div
          className=" bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400
    background-animate h-[45vh] w-full rounded-[3rem] flex flex-col justify-between items-center p-[2rem] md::max-w-[30rem] lg:max-w-full"
        >
          <p className="md:text-[2rem] md:text-start smd:text-[1.5rem]">
            Hello! I am Matthew Nicholson and I craft stunning front-end
            experiences
          </p>
          <div className="flex justify-between w-full items-center">
            <div className="relative w-[30px] h-[30px] self-end md:w-[50px] md:h-[50px]">
              <Image alt="" src="/icons/hello.png" fill quality={100} />
            </div>
            <p className="text-[10px] md:text-[1rem]">Click To Say Hi!</p>
          </div>
        </div>
        <div className="flex w-full gap-[1rem] p-4 lg:grid lg:grid-rows-2">
          <div className=" bg-white rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[20vh] lg:col-span-2">
            <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px] ">
              <Image alt="" src="/icons/tech-stack.svg" fill quality={100} />
            </div>
            <p className="md:text-[1rem]">Tech</p>
          </div>
          <div className="bg-purple-500 text-white rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[20vh] lg:row-span-2 col-span-2">
            <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px]">
              <Image alt="" src="/icons/contact.svg" fill quality={100} />
            </div>
            <p className="md:text-[1rem]">Contact</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
