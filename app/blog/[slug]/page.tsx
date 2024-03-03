"use client";

import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import BlogPostTemplate from "@/components/builderFiles/builderComponents/BlogPostTemplate";

// Replace with your Public API Key
// builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

// interface PageProps {
//   params: {
//     page: string[];
//   };
// }
type PageProps = any;

// export default async function BlogArticle(props: PageProps) {
export default function BlogArticle(props: PageProps) {
  // const content = await builder
  //   .get("portfolio-blog", {
  //     prerender: false,
  //     // Include references, like the `author` ref
  //     options: { includeRefs: true },
  //     query: {
  //       // Get the specific article by handle
  //       "data.handle": props?.params?.page?.join("/"),
  //     },
  //   })
  //   .toPromise();
  // console.log(content.data.textBody, "content");
  return (
    <>
      <div className="flex flex-col p-[2rem] justify-center items-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-[#340d4ab5] min-h-screen">
        <BlogPostTemplate />
        {/* <RenderBuilderContent content={content} model="portfolio-blog" /> */}
      </div>
    </>
  );
}
