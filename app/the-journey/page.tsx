import React from "react";
import { getPosts } from "@/sanity/sanity-utils";
import { PostType } from "@/types/Project";
import PreviewPosts from "@/components/theJourneyComps/PreviewPosts";
import Navigation from "@/components/theJourneyComps/Navigation";
import Header from "@/components/theJourneyComps/header/Header";
import MostRecentPost from "@/components/theJourneyComps/MostRecentPost";

type Props = {};

export const revalidate = 1;
const page = async (props: Props) => {
  const posts: PostType[] = await getPosts();
  const mostRecentPost = posts[0];

  return (
    <div className="min-h-screen bg-[#25292B] text-white">
      <Navigation />
      <Header mostRecentPost={mostRecentPost} />
      <div className="flex justify-between w-full">
        <MostRecentPost />
        <div className="flex flex-col">
          {posts &&
            posts.map((post: PostType) => {
              return <PreviewPosts key={post.slug} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default page;
