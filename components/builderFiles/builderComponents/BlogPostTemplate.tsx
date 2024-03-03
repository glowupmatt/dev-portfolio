/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

type Props = {};

const BlogPostTemplate = (props: Props) => {
  const data = [
    {
      id: 1,
      title: "Challenge ",
      content:
        "Provide a user friendly task management app that allows a user to do basic CRUD functions to keep better track of their tasks.",
    },
    {
      id: 2,
      title: "My Role",
      content: "Web Developer",
    },
    {
      id: 3,
      title: "Tools Used",
      content:
        "Next.js, TypeScript, Tailwind CSS, MongoDB, Next Auth, ShadCn, Figma, Jest Testing",
    },
  ];

  const authData = [
    {
      id: 1,
      desc: "For this project I am using Next auth. Here is a diagram on how I planned out the architecture for the user's journey.",
      img: "/project-brakdowns/auth-diagram.png",
    },
    {
      id: 2,
      desc: 'When the user visits the home page they are greeted with a login "/Register" page. If the user is logged in or there is a current session object then they will be automatically redirected to the kanban page.',
    },
    {
      id: 3,
      desc: "The user will have to sign in with their email or create an account with their email and password.",
    },
    {
      id: 4,
      desc: "Once the user creates an account or logins in, Next Auth will check or create an account with the input values and create a new session attached to the values.",
    },
    {
      id: 5,
      desc: "Then the server will forward the session credentials to the client granting access.",
    },
  ];

  const mainFeatures = [
    {
      id: 1,
      title: "Create",
      desc: "The user can create a new task by clicking the add button and filling out the form. The form will then be submitted to the server and saved to the database. The user will then see the new task on the kanban board.",
    },
    {
      id: 2,
      title: "Read",
      desc: "The user can read all of their tasks on the kanban board. The user can also read the details of the task by clicking on the task card.",
    },
    {
      id: 3,
      title: "Update",
      desc: "The user can update the task by clicking on the task card and editing the form. The form will then be submitted to the server and updated in the database. The user will then see the updated task on the kanban board.",
    },
    {
      id: 4,
      title: "Delete",
      desc: "The user can delete the task by clicking on the task card and clicking the delete button. The task will then be deleted from the database and the user will no longer see the task on the kanban board.",
    },
  ];
  return (
    <section className="text-white flex flex-col gap-[1.5rem]">
      <h2 className="text-[2rem] font-bold text-center leading-[2rem]">
        Kanban Project Break Down
      </h2>
      <div className="flex flex-col">
        <ul className="flex flex-col gap-[1.5rem]">
          {data.map((item) => (
            <li key={item.id} className="flex flex-col gap-[.2rem]">
              <h3 className="text-[1.2rem] font-bold">{item.title} :</h3>
              <p className="text-[.8rem] font-[500]">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[2rem] font-bold text-center">Overview</h3>
        <div>
          <h4 className="text-[1.2rem] font-bold mb-[.4rem]">Authorization:</h4>
          <ol className="flex flex-col gap-[1.5rem] list-decimal list-inside">
            {authData.map((item, index) => (
              <li key={item.id} className="flex flex-col gap-[.2rem]">
                <p className="text-[.8rem] font-[500]">
                  {index + 1}.) {item.desc}
                </p>
                {item.img && (
                  <img
                    src={item.img}
                    alt="auth-diagram"
                    className="object-cover w-[16rem] h-[11rem]"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <div className="mb-[1rem]">
            <h3 className="text-[2rem] font-bold text-center">
              CRUD Functionality
            </h3>
            <p className="text-[.8rem] font-[500]">
              The main feature of this product is its CRUD functionality. This
              allows the end user to add, edit, and delete tasks on a board as
              well as create a board. In order to maintain an organized state, I
              used the useContext hook natively to react. Creating two main
              pieces of state, which is the user data, and the selected board
              data. This was useful to keep track of the data that will be
              edited. deleted, or displayed to the end user. Using the
              useContext hook I was able to auto refresh the data when a user
              made a change to the board. This was done by using the useEffect
              hook to listen for changes to the database and then updating the
              state with the new data.
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-[1.5rem] list-decimal list-inside">
              {mainFeatures.map((item) => (
                <li key={item.id} className="flex flex-col gap-[.2rem]">
                  <h4 className="text-[1.2rem] font-bold">{item.title}: </h4>
                  <p className="text-[.8rem] font-[500]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostTemplate;
