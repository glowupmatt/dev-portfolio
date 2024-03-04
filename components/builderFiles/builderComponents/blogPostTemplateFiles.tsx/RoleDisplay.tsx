import React from "react";

type Props = {
  data: {
    id: number;
    title: string;
    content: string;
  }[];
  headerThreeStyles: string;
  paragraphStyles: string;
};

const RoleDisplay = (props: Props) => {
  const { data, headerThreeStyles, paragraphStyles } = props;
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col gap-[1.5rem]">
        {data.map((item) => (
          <li key={item.id} className="flex flex-col gap-[.2rem]">
            <h3 className={headerThreeStyles}>{item.title} :</h3>
            <p className={`${paragraphStyles}`}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleDisplay;
