import React from "react";
import { getGalleries, getPosts } from "@/sanity/sanity-utils";
import { PostType } from "@/types/PostType";
import { GalleriesType, GalleryType } from "@/types/GalleryType";
import GalleryPreview from "@/components/theJourneyComps/GalleryPreview";
import PreviewPosts from "@/components/theJourneyComps/PreviewPosts";
import Header from "@/components/theJourneyComps/header/Header";
import MostRecentPost from "@/components/theJourneyComps/MostRecentPost";
import BlogTemplate from "@/components/theJourneyComps/template/BlogTemplate";

type Props = {};

export const revalidate = 1;
const page = async (props: Props) => {
  const posts: PostType[] = await getPosts();
  const mostRecentPost = posts[0];
  const galleries: GalleriesType = await getGalleries();
  return (
    <BlogTemplate>
      <Header mostRecentPost={mostRecentPost} />
      <div className="flex justify-center w-full pt-[2rem] md:justify-between md:pt-[114px]">
        <MostRecentPost mostRecentPost={mostRecentPost} />
        <div className="flex flex-col gap-8 lg:w-[35rem]">
          <section className="flex flex-col items-center justify-center md:justify-start gap-4">
            <h3 className="font-spectral lg:text-[1.5rem]">
              Most Recent Posts
            </h3>
            <div className="flex flex-col lg:flex-row gap-4">
              {posts &&
                posts.map((post: PostType) => {
                  return <PreviewPosts key={post.slug} post={post} />;
                })}
            </div>
          </section>

          <section>
            <h3 className="font-spectral lg:text-[1.5rem] text-center mb-4">
              Recent Galleries
            </h3>
            <div className="flex flex-col lg:flex-row gap-4">
              {galleries &&
                galleries.map((gallery: GalleryType) => {
                  return (
                    <GalleryPreview key={gallery.slug} gallery={gallery} />
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </BlogTemplate>
  );
};

export default page;
