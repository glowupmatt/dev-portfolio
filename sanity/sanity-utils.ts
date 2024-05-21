import { createClient, groq } from "next-sanity";

export async function getPosts() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  });

  return client.fetch(
    groq`
    *[_type == "post"] | order(publishedAt desc) { 
        title, 
        "slug": slug.current, 
        publishedAt,
        "mainImage": {
          "src": mainImage.asset->url, 
          "alt": mainImage.alt
        },
        "leftSideImage": {
          "src": leftSideImage.asset->url, 
          "alt": leftSideImage.alt
        },
        "rightSideImageList": rightSideImageList[]->{
          "src": asset->url, 
          "alt": alt, 
          "description": description
        },
        categories, 
        excerpt,
        body 
      }
    `,
  );
}
