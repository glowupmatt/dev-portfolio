import React from "react";

type Props = {};

const VideoDisplay = (props: Props) => {
  return (
    <div
      id="projects"
      className="flex justify-center items-center overflow-hidden lg:h-full lg:items-start p-4 "
    >
      <div className="relative w-full lg:full">
        <h2 className="text-white text-right text-[1.5rem] font-bold mb-[6rem] md:text-[3rem] lg:font-bold lg:text-[4rem] lg:mb-[10rem]">
          Video Walkthroughs
        </h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <iframe
            className="rounded-lg w-full h-[30rem]"
            src="https://www.youtube.com/embed/9w1gj-xKPDo?si=IFaUspXydGgRpQA-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="rounded-lg w-full h-[30rem]"
            src="https://youtube.com/embed/UMfp6tvcPsI?feature=share"
            allowFullScreen
          ></iframe>
          <iframe
            className="rounded-lg w-full h-[30rem]"
            src="https://youtube.com/embed/sUerGm06kh4?feature=share"
            allowFullScreen
          ></iframe>
          <iframe
            className="rounded-lg w-full h-[30rem]"
            src="https://www.youtube.com/embed/7r387Jbqej4?si=jbw2Q86Gy6tGL2L2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
