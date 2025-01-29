"use client";
import React, { useState, useRef } from "react";
import ContactInfoButton from "./ContactInfoButton";

export type contactInfoType = {
  text?: string;
  source: string;
  img?: string;
  VARIANT: "EMAIL" | "SOCIAL";
};

const ContactInfo = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const contactInfo: contactInfoType[] = [
    {
      text: "thematthewnicholson@gmail.com",
      source: "thematthewnicholson@gmail.com",
      img: "/envelope-regular.svg",
      VARIANT: "EMAIL",
    },
    {
      source: "https://github.com/glowupmatt",
      img: "/github-mark.svg",
      VARIANT: "SOCIAL",
    },
    {
      source: "https://www.linkedin.com/in/matthew-nicholson-bb91aa23a",
      img: "/linkedin.svg",
      VARIANT: "SOCIAL",
    },
    {
      source: "/Matthew_Nicholson_Resume.pdf",
      img: "/pdf-file-svgrepo-com.svg",
      text: "View Resume",
      VARIANT: "SOCIAL",
    },
    {
      source: "/the-journey/",
      img: "/blog_3959425.png",
      VARIANT: "SOCIAL",
    },
  ];

  const infoHasTestKey = contactInfo.filter((data) => data.text);
  const noInfoTestKey = contactInfo.filter((data) => !data.text);

  return (
    <div id="contact" className="p-4 w-full">
      <section className="bg-[#2c2b2c] h-[43rem] rounded-[4rem] p-[2rem] lg:p-[3rem] border-solid border-4 border-black lg:h-[50rem]">
        <div className="flex h-full justify-evenly lg:justify-between flex-col lg:gap-8">
          <div className="w-full lg:w-full flex flex-col gap-4">
            <p className="text-white text-[2rem] md:text-[1.5rem]">
              Let&apos;s Work!
            </p>
            <h3 className="text-white front-bold md:text-[2rem] lg:text-[3rem] lg:leading-[4rem]">
              Drop me a message with your details, and let&apos;s create
              something awesome!
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="grid grid-cols-3 grid-rows-2 w-full lg:grid-rows-2 justify-items-start gap-[1rem] md:w-[70%]  lg:w-full lg:h-full items-center max-w-[30rem]">
              <div className="flex flex-col col-span-3 w-full gap-4">
                {infoHasTestKey.map((data, index) => {
                  return (
                    <ContactInfoButton
                      setCopySuccess={setCopySuccess}
                      copySuccess={copySuccess}
                      data={data}
                      key={index}
                    />
                  );
                })}
              </div>

              {noInfoTestKey.map((data, index) => {
                return <ContactInfoButton data={data} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
