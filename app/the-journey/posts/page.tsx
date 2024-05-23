import React from "react";
import BlogTemplate from "../../../components/theJourneyComps/template/BlogTemplate";
import Navigation from "../../../components/theJourneyComps/Navigation";
import PreviewPosts from "../../../components/theJourneyComps/PreviewPosts";
import { getPosts } from "../../../sanity/sanity-utils";
import { PostType } from "../../../types/Project";

type Props = {};

const page = async (props: Props) => {
  const posts: PostType[] = await getPosts();
  console.log(posts);
  return (
    <BlogTemplate>
      <div className="min-h-screen w-full max-w-screen-xl px-4">
        <Navigation />
        <div className="flex flex-col gap-4 text-center font-spectral">
          <h3>View All Posts</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            {posts &&
              posts.map((post: PostType) => {
                return <PreviewPosts key={post.slug} post={post} />;
              })}
          </div>
        </div>
      </div>
    </BlogTemplate>
  );
};

export default page;
