import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import BlogPostTemplate from "@/components/builderFiles/builderComponents/BlogPostTemplate";

builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogArticle(props: PageProps) {
  const content: any = await builder.getAll("blog-post-data", {
    prerender: false,
    query: {
      "data.slug": props.params.slug,
    },
  });

  const processedContent = content[0]?.data;
  const projectTitle = processedContent?.postName;
  const mainHighlight = processedContent?.firstFunctionalityDescription;
  const roleData = processedContent?.roleDisplayData;
  const firstTextBody = processedContent?.firstTextBody;
  const secondTextBody = processedContent?.secondTextBody;
  const diagramImage = processedContent?.textBodyImageOne;
  const headerImage = processedContent?.headerImage;
  const functionOne = processedContent?.functionFeature;
  return (
    <>
      <div className="flex justify-center overflow-hidden bg-gradient-to-b min-h-screen from-black via-slate-900 to-[#340d4ab5]">
        <div className="flex flex-col gap-[4rem] w-full md:gap-[6rem] lg:gap-2 max-w-[45rem] p-4 py-[3rem]">
          <BlogPostTemplate
            firstTextBody={firstTextBody}
            secondTextBody={secondTextBody}
            roleData={roleData}
            mainHighlight={mainHighlight}
            diagramImage={diagramImage}
            headerImage={headerImage}
            projectTitle={projectTitle}
            functionOne={functionOne}
          />
        </div>
        <RenderBuilderContent content={content} model="blog-post-data" />
      </div>
    </>
  );
}
