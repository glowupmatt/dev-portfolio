/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  firstTextBody: {
    id: number;
    desc: string;
  }[];

  headerThreeStyles: string;
  paragraphStyles: string;
  sectionContainerStyles: string;
  headerFourStyles: string;
  diagramImage: string;
};

const FirstTextBody = (props: Props) => {
  const {
    headerThreeStyles,
    paragraphStyles,
    sectionContainerStyles,
    headerFourStyles,
    diagramImage,
    firstTextBody,
  } = props;
  return (
    <div className={`${sectionContainerStyles}`}>
      <h3 className={`text-center ${headerThreeStyles}`}>Overview</h3>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="">
          <h4 className={`${headerFourStyles}`}>Authorization:</h4>
          <ol className="flex flex-col gap-[1.5rem] list-decimal list-inside">
            {firstTextBody.map((item, index: number) => (
              <li key={item.id} className={`flex flex-col gap-[.2rem]`}>
                <p className={`${paragraphStyles}`}>
                  {index + 1}.) {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative w-full rounded-lg object-cover overflow-hidden h-[15rem] md:h-[27rem] lg:w-[40rem] xl:w-full xl:h-[40rem]">
          <img
            src={diagramImage}
            alt="auth-diagram"
            className="absolute w-full h-[20rem] top-[-4rem] md:top-[-13rem] md:h-[45rem] lg:top-0 lg:h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstTextBody;
