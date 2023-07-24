import Image from "next/image";
import React from "react";

const ContactInfo = () => {
  const contactInfo = [
    {
      text: "glowupmatt@gmail.com",
      source: "glowupmatt@gmail.com",
      img: "/envelope-regular.svg",
    },
    {
      text: "Resume",
      source: "",
      img: "/public/file-regular.svg",
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
          <div className="grid grid-cols-3 auto-rows-auto lg:grid-rows-2 justify-items-start gap-[1rem] md:w-[70%] h-[40%] lg:w-[50%] lg:h-[20rem] max-w-[30rem]">
            <div className="flex flex-col col-span-3 w-full gap-4">
              {infoHasTestKey.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="relative bg-[white] border-hidden lg:border-solid border h-[6rem] w-full  lg:border-blue-900  justify-center flex  flex-col items-center rounded-[8rem] lg:text-black transition ease-in-out delay-150  hover:bg-blue-900 duration-300 lg:flex-row xl:h-[40rem]"
                  >
                    <p className="absolute">{data.text}</p>
                  </div>
                );
              })}
            </div>

            {noInfoTestKey.map((data, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-[white]  border-hidden lg:border-solid border h-[4rem] w-full border-blue-900  justify-center flex  items-center rounded-[8rem] lg:text-white transition ease-in-out delay-150  hover:bg-blue-900 duration-300"
                >
                  <div className="relative w-[1.5rem] h-[1.5rem]">
                    <Image
                      alt=""
                      src={data.img}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
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
