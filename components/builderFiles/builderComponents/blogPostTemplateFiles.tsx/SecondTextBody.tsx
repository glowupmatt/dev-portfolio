import React from "react";

type Props = {
  mainFeatures: {
    id: number;
    title: string;
    desc: string;
  }[];
  headerThreeStyles: string;
  paragraphStyles: string;
  sectionContainerStyles: string;
  headerFourStyles: string;
};

const SecondTextBody = (props: Props) => {
  const {
    mainFeatures,
    headerThreeStyles,
    paragraphStyles,
    sectionContainerStyles,
    headerFourStyles,
  } = props;
  return (
    <div className={`${sectionContainerStyles}`}>
      <div className="mb-[1rem]">
        <h3 className={`text-center ${headerThreeStyles}`}>
          CRUD Functionality
        </h3>
        <p className={`${paragraphStyles}`}>
          The main feature of this product is its CRUD functionality. This
          allows the end user to add, edit, and delete tasks on a board as well
          as create a board. In order to maintain an organized state, I used the
          useContext hook natively to react. Creating two main pieces of state,
          which is the user data, and the selected board data. This was useful
          to keep track of the data that will be edited. deleted, or displayed
          to the end user. Using the useContext hook I was able to auto refresh
          the data when a user made a change to the board. This was done by
          using the useEffect hook to listen for changes to the database and
          then updating the state with the new data.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-[1.5rem] list-decimal list-inside">
          {mainFeatures.map((item) => (
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
