import React from "react";
import { projectData } from "@/dataFolder/projectData";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex justify-center items-center overflow-hidden lg:h-full lg:items-start p-4 "
    >
      <div className="relative w-full lg:full">
        <h2 className="text-white text-right text-[1.5rem] font-bold mb-[6rem] md:text-[3rem] lg:font-bold lg:text-[4rem] lg:mb-[10rem]">
          Projects
        </h2>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[14rem] md:animate-spin-slow blur-[31px] md:top-[7rem] md:w-full md:right-[10rem] lg:h-full lg:top-[3.4rem] lg:left-[-23rem] lg:w-[54rem] hidden md:block">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-[27rem] h-[27rem] right-0 top-[36rem] md:animate-spin-slow blur-[31px] md:top-[18rem] md:right-[-13rem] lg:w-[50rem] lg:h-[50rem] lg:top-[18rem] hidden md:block">
          <Image
            alt=""
            src="/gradient-designs/shape-1.svg"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[7rem] md:grid md:grid-cols-2 md:gap-[1rem] lg:grid-cols-3 lg:justify-items-center items-center justify-items-center">
          {projectData.map((data, index) => {
            const isEven = index % 2 === 0;
            return (
              <Card
                key={data.id}
                className={classNames(
                  "border-black z-50 h-full w-full hover:scale-[1.03] hover:border-white transition duration-500 ease-in-out",
                  { "bg-[rgb(208,208,208)]": isEven },
                  {
                    "bg-white": !isEven,
                  }
                )}
              >
                <Link href={data.projectUrl} target="_blank" className="">
                  <Image
                    alt=""
                    src={data.projectPhoto}
                    width={1080}
                    height={1920}
                    className="object-contain rounded-lg w-full h-auto hidden md:block"
                  />
                  <Image
                    alt=""
                    src={data.projectPhoto}
                    width={600}
                    height={600}
                    className="object-contain rounded-lg w-full h-auto md:hidden"
                  />
                </Link>
                <CardHeader className="p-0 pt-[2rem]">
                  <CardTitle className="text-center text-[1.5rem] font-bold md:text-[2rem]">
                    {data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-3 items-center justify-center grid grid-cols-2 justify-items-center">
                  {data.techUsed.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="flex gap-2 justify-between items-center w-[7rem] h-[3rem]"
                      >
                        <p
                          key={index}
                          className="text-[0.8rem] text-center md:text-[1rem] font-[500]"
                        >
                          {data.title}
                        </p>
                        <div className="w-[2rem] h-[2rem]">
                          <Image
                            src={data.image}
                            alt={data.title}
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
                <div className="flex gap-3 justify-center items-center mb-[2rem]">
                  <Link
                    target="_blank"
                    href={data.githubUrl}
                    className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer flex justify-center items-center"
                  >
                    <Image
                      alt=""
                      src="/github-mark.svg"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href={data.projectUrl}
                    className="relative w-[1.5rem] h-[1.5rem] drop-shadow-2xl cursor-pointer flex justify-center items-center"
                  >
                    <Image
                      alt=""
                      src="/link-solid.svg"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
