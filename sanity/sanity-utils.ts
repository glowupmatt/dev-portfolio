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
        category, 
        excerpt,
      }
    `,
  );
}

export async function getPost(slug: string) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  });

  return client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0] { 
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
        "rightSideImageList": rightSideImageList[]{
          "src": asset->url, 
          "alt": alt, 
          "description": description
        },
        category,
        excerpt,
        body 
      }
    `,
    { slug },
  );
}

export async function getGalleries() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  });

  return client.fetch(
    groq`
    *[_type == "gallery"] { 
        title, 
        "slug": slug.current, 
        description,
        publishedAt,
        category,
        "images": images[] {
          asset->{
            _id,
            url
          },
          alt,
          isLandscape
        }
      }
    `,
  );
}

export async function getGallery(slug: string) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  });

  return client.fetch(
    groq`
    *[_type == "gallery" && slug.current == $slug][0] { 
        title, 
        "slug": slug.current, 
        description,
        "images": images[] {
          asset->{
            _id,
            url
          },
          alt,
          isLandscape
        }
      }
    `,
    { slug },
  );
}
