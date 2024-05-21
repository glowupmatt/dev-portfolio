import React from "react";
import { getPosts } from "@/sanity/sanity-utils";
import PreviewPosts from "@/components/theJourneyComps/PreviewPosts";
import { PostType } from "@/types/Project";

type Props = {};

export const revalidate = 1;
const page = async (props: Props) => {
  const posts: PostType[] = await getPosts();

  return (
    <div>
      {posts &&
        posts.map((post: PostType) => {
          return <PreviewPosts key={post.slug} post={post} />;
        })}
    </div>
  );
};

export default page;
