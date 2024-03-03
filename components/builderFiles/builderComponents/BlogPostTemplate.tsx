"use client";

import React from "react";

type Props = {};

const BlogPostTemplate = (props: Props) => {
  return (
    <section>
      <div className="text-white">
        <h2>Kanban Project Break Down</h2>
        <ul>
          <li>
            <h3>Challenge</h3>
            <p>
              Provide a user friendly task management app that allows a user to
              do basic CRUD functions to keep better track of their task.
            </p>
          </li>
          <li>
            <h3>My Role</h3>
            <p>Web Developer</p>
          </li>
          <li>
            <h3>Tools Used</h3>
            <p>
              Next.js, TypeScript, Tailwind CSS, MongoDB, Next Auth, ShadCn,
              Figma, Jest Testing
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3>Overview</h3>
        <ul>
          <li>
            For this project I am using Next auth. Here is a diagram on how I
            planned out the architecture for the user&apos;s journey.
            <img />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogPostTemplate;
