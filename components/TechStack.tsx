import Image from "next/image";
import { techStackInfo } from "@/dataFolder/techStack";
import TechStackDesktop from "./TechStackDesktop";
import TechStackMobile from "./TechStackMobile";

const TechStack = () => {
  return (
    <div
      id="tech"
      className="h-[30rem] relative w-full overflow-hidden md:h-[33rem] lg:h-full p-4"
    >
      <div className="absolute w-[27rem] h-[15rem] right-[-14rem] top-[5rem] md:animate-spin-slow blur-[31px] md:w-[38rem] md:h-[32rem] md:right-[-13rem] md:top-[1rem] hidden md:block">
        <Image
          alt=""
          src="/gradient-designs/shape-1.svg"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <h2 className="w-full text-start font-bold text-[1.5rem] z-10 text-white mb-[2rem] md:text-[2rem] lg:text-[4rem]">
          My Technology Stack
        </h2>
        <div className="hidden lg:block w-full">
          <TechStackDesktop techStackInfo={techStackInfo} />
        </div>
        <div className="lg:hidden block">
          <TechStackMobile techStackInfo={techStackInfo} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
