import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";

builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

export default async function Page(props: any) {
  const content = await builder
    .get("blog-page", {
      userAttributes: {
        urlPath: "/blog",
      },
    })
    .toPromise();
  return (
    <div className="flex flex-col p-[2rem] justify-center items-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-[#340d4ab5] min-h-screen">
      <div className="flex flex-col justify-center items-center w-full text-white text-center">
        <h4 className="text-[2rem] font-bold">Project Break Down</h4>
        <div className="w-full text-[.7rem] max-w-[27rem]">
          <p className="text-center">
            Here, I provide a comprehensive overview of specific projects from
            my portfolio, examining the employed technologies, articulating the
            rationale behind the architectural design, and detailing the user
            experience.
          </p>
        </div>
      </div>
      <RenderBuilderContent model={"blog-page"} content={content} />
    </div>
  );
}
