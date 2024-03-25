import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

export const metadata: Metadata = {
  title: "MN | Blog",
  description: "Matthew Nicholson Blog",
  icons: {
    icon: "../icon.png",
  },
};

export default async function Page(props: any) {
  const content = await builder
    .get("blog-page", {
      userAttributes: {
        urlPath: "/blog",
      },
    })
    .toPromise();
  return (
    <div className="relative">
      <Navigation />
      <div className="flex flex-col p-4 justify-center items-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-[#340d4ab5] min-h-screen">
        <p className="text-white font-semibold text-[1.5rem]">
          Explore my projects as I explain the transition from design to
          practical code implementation.
        </p>
        <div className="bg-black/50 w-full h-full p-4 rounded-md">
          <RenderBuilderContent model={"blog-page"} content={content} />
        </div>
      </div>
    </div>
  );
}
