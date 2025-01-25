import React from "react";
import { BuilderContent } from "@builder.io/sdk";
import BlogDisplayProjectCard from "./DisplayProjectCardComponentes/BlogDisplayProjectCard";

type Props = {
  blogPostArray: BuilderContent[];
};

const BlogPostProjectDisplay = (props: Props) => {
  const { blogPostArray } = props;

  const iterableData = blogPostArray;

  return (
    <div className="h-full flex flex-col gap-4 rounded-lg w-full lg:grid grid-cols-2">
      {iterableData.map((data, index) => {
        return (
          <BlogDisplayProjectCard data={data.data} index={index} key={index} />
        );
      })}
    </div>
  );
};

export default BlogPostProjectDisplay;
