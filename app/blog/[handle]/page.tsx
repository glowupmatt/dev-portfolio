import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import Head from "next/head";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function BlogArticle(props: PageProps) {
  const content = await builder
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

  return (
    <>
      <Head>
        {/* Render meta tags from custom field */}
        <title>{content?.data.title}</title>
        <meta name="description" content={content?.data.blurb} />
        <meta name="og:image" content={content?.data.image} />
      </Head>
      <div>
        <div>{content?.data.title}</div>
        {/* Render the Builder drag/droped content */}
        <RenderBuilderContent
          content={content}
          model="portfolio-blog"
        />
      </div>
    </>
  );
}