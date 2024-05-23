import React from "react";
import { getPosts } from "@/sanity/sanity-utils";
import { PostType } from "@/types/Project";
import PreviewPosts from "@/components/theJourneyComps/PreviewPosts";
import Navigation from "@/components/theJourneyComps/Navigation";
import Header from "@/components/theJourneyComps/header/Header";
import MostRecentPost from "@/components/theJourneyComps/MostRecentPost";
import BlogTemplate from "@/components/theJourneyComps/template/BlogTemplate";

type Props = {};

export const revalidate = 1;
const page = async (props: Props) => {
  const posts: PostType[] = await getPosts();
  const mostRecentPost = posts[0];

  return (
    <BlogTemplate>
      <div className="w-full max-w-screen-xl px-4">
        <Navigation />
        <Header mostRecentPost={mostRecentPost} />
        <div className="flex justify-center w-full pt-[2rem] md:justify-between md:pt-[114px]">
          <MostRecentPost mostRecentPost={mostRecentPost} />
          <div className="flex flex-col items-center justify-center md:justify-start gap-4">
            <h3 className="font-spectral lg:text-[1.5rem]">
              Most Recent Posts
            </h3>
            <div className="flex flex-col lg:flex-row gap-4">
              {posts &&
                posts.map((post: PostType) => {
                  return <PreviewPosts key={post.slug} post={post} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </BlogTemplate>
  );
};

export default page;
