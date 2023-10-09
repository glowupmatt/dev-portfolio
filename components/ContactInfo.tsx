"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactInfo = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  console.log(copySuccess);
  const contactInfo = [
    {
      text: "glowupmatt@gmail.com",
      source: "glowupmatt@gmail.com",
      img: "/envelope-regular.svg",
    },
    { source: "https://github.com/glowupmatt", img: "/github-mark.svg" },
    {
      source: "https://www.linkedin.com/in/matthew-nicholson-bb91aa23a",
      img: "/linkedin.svg",
    },
    {
      source: "https://www.instagram.com/glowupmatt/?hl=en",
      img: "/instagram.svg",
    },
  ];

  const infoHasTestKey = contactInfo.filter((data) => data.text);
  const noInfoTestKey = contactInfo.filter((data) => !data.text);

  return (
    <div id="contact" className="p-4 w-full">
      <section className="bg-[#2c2b2c] h-[43rem] rounded-[4rem] p-[2rem] lg:p-[3rem] border-solid border-4 border-black lg:h-[50rem]">
        <div className="flex h-full justify-evenly lg:justify-between flex-col">
          <div className="w-full lg:w-[70%] flex flex-col gap-4">
            <p className="text-white text-[2rem] md:text-[1.5rem]">
              Let&apos;s Work!
            </p>
            <h3 className="text-white front-bold md:text-[2rem] lg:text-[3rem]  lg:leading-[5rem] lg:p-[3rem]">
              Drop me a message with your details, and let&apos;s create
              something awesome!
            </h3>
          </div>
          <div className="grid grid-cols-3 auto-rows-auto lg:grid-rows-2 justify-items-start gap-[1rem] md:w-[70%] h-[40%] lg:w-[50%] lg:h-[20rem] max-w-[30rem] xl:max-w-[50%]">
            <div className="flex flex-col col-span-3 w-full gap-4">
              {infoHasTestKey.map((data, index) => {
                const copyLink = () => {
                  navigator.clipboard.writeText(data.source);
                  setCopySuccess(true);
                };
                return (
                  <div
                    key={index}
                    onClick={copyLink}
                    className="relative bg-[white] border-hidden lg:border-solid border h-[6rem] w-full cursor-pointer lg:border-blue-300  justify-center flex  flex-col items-center rounded-[8rem] lg:text-black transition ease-in-out delay-150  hover:bg-blue-300 duration-300 lg:flex-row xl:h-[40rem] xl:w-full"
                  >
                    <p className="absolute xl:text-[2rem]">
                      {copySuccess === false
                        ? `${data.text}`
                        : "Copied Email to Clipboard"}
                    </p>
                  </div>
                );
              })}
            </div>

            {noInfoTestKey.map((data, index) => {
              return (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.source}
                  key={index}
                  className="relative bg-[white]  border-hidden lg:border-solid border h-[4rem] w-full border-blue-300  justify-center flex  items-center rounded-[8rem] lg:text-white transition ease-in-out delay-150  hover:bg-blue-300 duration-300 xl:h-[9rem]"
                >
                  <div className="relative w-[1.5rem] h-[1.5rem] xl:h-[3rem] xl:w-[3rem]">
                    <Image
                      alt=""
                      src={data.img}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* <div className="flex justify-end">
          <div className="relative w-[30px] h-[30px] self-end md:w-[50px] md:h-[50px] top-[-3rem]">
            <Image alt="" src="/arrow-down-solid.svg" fill />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default ContactInfo;
