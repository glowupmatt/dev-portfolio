import React from "react";

type Props = {
  roleData: {
    id: number;
    title: string;
    content: string;
  }[];
  headerFourStyles: string;
  paragraphStyles: string;
};

const RoleDisplay = (props: Props) => {
  const { roleData, headerFourStyles, paragraphStyles } = props;
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col gap-[1.5rem]">
        {roleData?.map((item) => (
          <li key={item.id} className="flex flex-col gap-[.2rem]">
            <h4 className={headerFourStyles}>{item.title} :</h4>
            <p className={`${paragraphStyles}`}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleDisplay;
