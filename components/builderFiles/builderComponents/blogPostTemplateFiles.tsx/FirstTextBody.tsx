/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  firstTextBody: {
    id: number;
    desc: string;
  }[];
  functionOne: string;
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
    functionOne,
  } = props;
  return (
    <div className={`${sectionContainerStyles}`}>
      <h3 className={`text-center ${headerThreeStyles}`}>Overview</h3>
      <div className="flex flex-col gap-8">
        <div>
          <h4 className={`${headerFourStyles}`}>{functionOne}:</h4>
          <ol className="flex flex-col gap-[1.5rem] list-decimal list-inside">
            {firstTextBody?.map((item, index: number) => (
              <li key={item.id} className={`flex flex-col gap-[.2rem]`}>
                <p className={`${paragraphStyles}`}>
                  {index + 1}.) {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex justify-center w-full rounded-lg object-cover overflow-hidden xl:w-full xl:h-[36rem]">
          <img
            src={diagramImage}
            alt="auth-diagram"
            className="w-full h-full lg:top-0 lg:w-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstTextBody;
