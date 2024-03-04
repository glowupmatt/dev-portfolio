import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import BlogPostTemplate from "@/components/builderFiles/builderComponents/BlogPostTemplate";
import { marked } from "marked";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// Replace with your Public API Key
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
      // Include references, like the `author` ref
      options: { includeRefs: true },
      query: {
        // Get the specific article by handle
        "data.handle": props?.params?.page?.join("/"),
      },
    })
    .toPromise();
  // Create a new JSDOM window object
  console.log(content.data.textBody);
  const firstTextBody = content.data.textBody;
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden bg-gradient-to-b min-h-screen from-black via-slate-900 to-[#340d4ab5]">
        <div className="flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-2 max-w-[140rem] p-4">
          <BlogPostTemplate firstTextBody={firstTextBody} />
        </div>
        <RenderBuilderContent content={content} model="portfolio-blog" />
      </div>
    </>
  );
}
