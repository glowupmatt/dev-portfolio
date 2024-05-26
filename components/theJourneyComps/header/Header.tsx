import React from "react";
import PostHeader from "../template/homePageHeaderTemplate/PostHeader";
import GalleryHeader from "../template/homePageHeaderTemplate/GalleryHeader";

type Props = {
  mostRecentPost: any;
};

const Header = (props: Props) => {
  const { mostRecentPost } = props;
  if (mostRecentPost.category === "post") {
    return <PostHeader mostRecentPost={mostRecentPost} />;
  }

  return <GalleryHeader mostRecentPost={mostRecentPost} />;
};

export default Header;
