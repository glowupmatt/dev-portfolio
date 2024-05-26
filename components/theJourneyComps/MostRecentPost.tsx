import React from "react";
import BlogRecentPost from "./template/homePageHeaderTemplate/BlogRecentPost";
import GalleryRecentPost from "./template/homePageHeaderTemplate/GalleryRecentPost";

type Props = {
  mostRecentPost: any;
};

const MostRecentPost = (props: Props) => {
  const { mostRecentPost } = props;
  if (mostRecentPost.category === "post") {
    return <BlogRecentPost mostRecentPost={mostRecentPost} />;
  }

  return <GalleryRecentPost mostRecentPost={mostRecentPost} />;
};

export default MostRecentPost;
