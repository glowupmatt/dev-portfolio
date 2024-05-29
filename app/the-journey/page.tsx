import React from "react";
import { getGalleries, getPosts } from "@/sanity/sanity-utils";
import { PostType } from "@/types/PostType";
import { GalleriesType, GalleryType } from "@/types/GalleryType";
import PreviewPosts from "@/components/theJourneyComps/PreviewPosts";
import Header from "@/components/theJourneyComps/header/Header";
import MostRecentPost from "@/components/theJourneyComps/MostRecentPost";
import BlogTemplate from "@/components/theJourneyComps/template/BlogTemplate";

type Props = {};

export const revalidate = 1;
const page = async (props: Props) => {
  const posts: PostType[] = await getPosts();
  const galleries: GalleriesType = await getGalleries();
  const combined = [...posts, ...galleries];
  const mostRecentPost = [...combined].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )[0];

  return (
    <BlogTemplate>
      <Header mostRecentPost={mostRecentPost} />
      <div className="flex justify-center w-full pt-[2rem] md:justify-between md:pt-[114px] gap-8 xl:gap-0">
        <MostRecentPost mostRecentPost={mostRecentPost} />
        <div className="flex flex-col gap-8 lg:w-[35rem]">
          {posts.length === 0 ? null : (
            <section className="flex flex-col items-center justify-center md:justify-start gap-4">
              <h3 className="font-spectral lg:text-[1.5rem]">
                Most Recent Posts
              </h3>
              <div className="flex flex-col md:grid grid-cols-2 gap-4">
                {posts &&
                  posts
                    .filter((_, index: number) => {
                      return index <= 3;
                    })
                    .map((post: PostType) => {
                      return (
                        <PreviewPosts
                          key={post.slug}
                          post={post}
                          VARIANT="POST"
                        />
                      );
                    })}
              </div>
            </section>
          )}

          {galleries.length === 0 ? null : (
            <section>
              <h3 className="font-spectral lg:text-[1.5rem] text-center mb-4">
                Recent Galleries
              </h3>
              <div className="flex flex-col md:grid grid-cols-2 gap-4">
                {galleries &&
                  galleries
                    .filter((_, index: number) => {
                      return index <= 3;
                    })
                    .map((gallery: GalleryType) => {
                      return (
                        <PreviewPosts
                          key={gallery.slug}
                          gallery={gallery}
                          VARIANT="GALLERY"
                        />
                      );
                    })}
              </div>
            </section>
          )}
        </div>
      </div>
    </BlogTemplate>
  );
};

export default page;
