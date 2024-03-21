import React from "react";

type Props = {
  secondTextBody: {
    id: number;
    title: string;
    desc: string;
  }[];
  mainHighlight: {
    title: string;
    desc: string;
  };
  headerThreeStyles: string;
  paragraphStyles: string;
  sectionContainerStyles: string;
  headerFourStyles: string;
};

const SecondTextBody = (props: Props) => {
  const {
    mainHighlight,
    headerThreeStyles,
    paragraphStyles,
    sectionContainerStyles,
    headerFourStyles,
    secondTextBody,
  } = props;
  console.log(mainHighlight, "mainHighlight");
  return (
    <div className={`${sectionContainerStyles}`}>
      <div className="mb-[1rem]">
        <h3 className={`text-center ${headerThreeStyles}`}>
          {mainHighlight.title}
        </h3>
        <p className={`${paragraphStyles}`}>{mainHighlight.desc}</p>
      </div>
      <div>
        <ul className="flex flex-col gap-[1.5rem] list-decimal list-inside">
          {secondTextBody?.map((item) => (
            <li key={item.id} className="flex flex-col gap-[.2rem]">
              <h4 className={`${headerFourStyles}`}>{item.title}:</h4>
              <p className={`${paragraphStyles}`}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondTextBody;
