import React from "react";
import { BuilderContent } from "@builder.io/sdk";
import BlogDisplayProjectCard from "./DisplayProjectCardComponentes/BlogDisplayProjectCard";

type Props = {
  content: BuilderContent[];
  blogPostArray: BuilderContent[];
};

type DataType = {
  data: {
    githubUrl: string;
    projectPhoto: string;
    projectUrl: string;
    blogUrl: string;
    id: 1;
    techUsed: {
      title: string;
      image: string;
    }[];
    title: string;
  };
};
const BlogPostProjectDisplay = (props: Props) => {
  const { content, blogPostArray } = props;
  function hasBlogUrl(item: any): boolean {
    return Object.keys(item.data).includes("blogUrl");
  }
  const projectWithBlogPost = content.filter(hasBlogUrl);
  function mergePreviewWithProject(
    projectData: any,
    blogPreview: any
  ): Map<string, DataType> {
    const res = new Map();
    projectData.forEach((item: any) => {
      res.set(item.data.blogUrl, item);
    });
    blogPreview.forEach((item: any) => {
      const itemData = item.data;
      if (res.has(itemData.slug)) {
        const project = res.get(itemData.slug);
        res.set(itemData.slug, {
          ...project,
          data: {
            ...project.data,
            roleDisplayData: itemData.roleDisplayData,
          },
        });
      }
    });
    return res;
  }
  const iterableData = Array.from(
    mergePreviewWithProject(projectWithBlogPost, blogPostArray).values()
  );

  return (
    <div className="h-full flex flex-col gap-4 rounded-lg w-full lg:max-w-[936px]">
      {iterableData.map((data, index) => {
        return (
          <BlogDisplayProjectCard data={data.data} index={index} key={index} />
        );
      })}
    </div>
  );
};

export default BlogPostProjectDisplay;
