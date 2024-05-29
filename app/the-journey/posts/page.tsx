import React from "react";
import BlogTemplate from "../../../components/theJourneyComps/template/BlogTemplate";
import PreviewPosts from "../../../components/theJourneyComps/PreviewPosts";
import { getPosts } from "../../../sanity/sanity-utils";
import { PostType } from "../../../types/PostType";
import { GalleriesType, GalleryType } from "@/types/GalleryType";
import { getGalleries } from "@/sanity/sanity-utils";

type Props = {};
export const revalidate = 1;
const page = async (props: Props) => {
  const posts: PostType[] = await getPosts();
  const galleries: GalleriesType = await getGalleries();
  return (
    <BlogTemplate>
      <div className="min-h-screen w-full max-w-screen-xl px-4">
        {posts.length === 0 ? null : (
          <section className="flex flex-col gap-4 text-center font-spectral">
            <h3 className="md:text-[3rem]">View All Posts</h3>
            <div className="flex flex-col gap-[2rem] md:grid md:grid-cols-3 justify-items-center">
              {posts &&
                posts.map((post: PostType) => {
                  return (
                    <PreviewPosts key={post.slug} post={post} VARIANT="POST" />
                  );
                })}
            </div>
          </section>
        )}

        {galleries.length === 0 ? null : (
          <section className="flex flex-col gap-4 text-center font-spectral">
            <h3 className="md:text-[3rem]">View All Galleries</h3>
            <div className="flex flex-col w-full md:grid grid-cols-3 justify-items-center">
              {galleries &&
                galleries.map((gallery: GalleryType) => {
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
    </BlogTemplate>
  );
};

export default page;
