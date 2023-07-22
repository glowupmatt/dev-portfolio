import Image from "next/image";
import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-sans text-center leading-[1.7rem] text-[2rem] text-white my-[3rem]">
        <h2>Matthew</h2>
        <h2>Nicholson</h2>
      </div>

      <section className="p-[1rem] lg:grid lg:grid-cols-2">
        <Link
          href="#projects"
          className=" bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400
    background-animate h-[17rem] w-full rounded-[3rem] flex flex-col justify-between items-center p-[2rem] md::max-w-[30rem] lg:max-w-full"
        >
          <p className="md:text-[2rem] md:text-start smd:text-[1.5rem]">
            Hello! I am Matthew Nicholson and I craft stunning front-end
            experiences
          </p>
          <div className="flex justify-between w-full items-center">
            <div className="relative w-[30px] h-[30px] self-end md:w-[50px] md:h-[50px]">
              <Image alt="" src="/icons/hello.png" fill quality={100} />
            </div>
            <p className="text-[10px] md:text-[1rem]">
              Click To See My Projects!
            </p>
          </div>
        </Link>
        <div className="flex w-full gap-[1rem] pt-4 lg:grid lg:grid-rows-2">
          <Link
            href="#tech"
            className="relative  rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[9rem] lg:col-span-2"
          >
            <div className="absolute w-full h-full ">
              <Image
                alt=""
                src="/gradient-designs/gradient-5.svg"
                fill
                quality={100}
                className="object-cover rounded-full "
              />
            </div>
            <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px] ">
              <Image alt="" src="/icons/tech-stack.svg" fill quality={100} />
            </div>
            <p className="md:text-[1rem] z-10 text-white">Tech</p>
          </Link>
          <Link
            href="#contact"
            className="relative  text-white rounded-full w-full p-[.5rem] flex flex-col justify-center items-center gap-[.5rem] h-[9rem] lg:row-span-2 col-span-2"
          >
            <div className="absolute w-full h-full ">
              <Image
                alt=""
                src="/gradient-designs/gradient-one.svg"
                fill
                quality={100}
                className="object-cover rounded-full "
              />
            </div>
            <div className="relative w-[20px] h-[20px] md:h-[35px] md:w-[35px]">
              <Image alt="" src="/icons/contact.svg" fill quality={100} />
            </div>
            <p className="md:text-[1rem] z-10">Contact</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Menu;
