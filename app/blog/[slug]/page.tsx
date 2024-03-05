import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import BlogPostTemplate from "@/components/builderFiles/builderComponents/BlogPostTemplate";

builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function BlogArticle(props: PageProps) {
  const content: any = await builder
    .get("portfolio-blog", {
      prerender: false,
      options: { includeRefs: true },
      query: {
        "data.handle": props?.params?.page?.join("/"),
      },
    })
    .toPromise();
  const mainHighlight = content.data.appFunctionalityDesc;
  const roleData = content.data.roleDisplayData;
  const secondTextBody = content.data.secondTextBody;
  const firstTextBody = content.data.textBody;
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden bg-gradient-to-b min-h-screen from-black via-slate-900 to-[#340d4ab5]">
        <div className="flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-2 max-w-[100rem] p-4 py-[3rem]">
          <BlogPostTemplate
            firstTextBody={firstTextBody}
            secondTextBody={secondTextBody}
            roleData={roleData}
            mainHighlight={mainHighlight}
          />
        </div>
        <RenderBuilderContent content={content} model="portfolio-blog" />
      </div>
    </>
  );
}
