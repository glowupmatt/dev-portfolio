import React from "react";

type Props = {
  posts: any;
};

const BlogBody = (props: Props) => {
  const posts = props.posts;
  return <div>BlogBody</div>;
};

export default BlogBody;
