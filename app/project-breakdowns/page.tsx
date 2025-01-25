import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import BlogPostProjectDisplay from "@/components/blogComponents/BlogPostProjectDisplay";

builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

export const metadata: Metadata = {
  title: "MN | Project Breakdowns",
  description: "Matthew Nicholson Blog",
  icons: {
    icon: "../icon.png",
  },
};

export default async function Page(props: any) {
  const [content] = await Promise.all([
    builder.getAll("blog-post-data", {
      fields: "data",
    }),
  ]);

  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex flex-col p-4 justify-center items-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-[#340d4ab5] min-h-screen gap-6">
        <p className="text-white font-bold text-center text-[1rem] lg:text-[1.5rem] max-w-[936px] mt-[5rem]">
          Explore my projects as I explain the transition from design to
          practical code implementation.
        </p>

        <BlogPostProjectDisplay blogPostArray={content} />
        <RenderBuilderContent model={"project-data"} content={content} />
      </div>
    </div>
  );
}
