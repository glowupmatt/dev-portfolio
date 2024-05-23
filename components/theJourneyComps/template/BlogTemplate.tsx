import React from "react";

type Props = {
  children: React.ReactNode;
};

const BlogTemplate = (props: Props) => {
  const { children } = props;
  return (
    <div className="min-h-screen bg-[#25292B] text-white flex md:justify-center md:items-center">
      {children}
    </div>
  );
};

export default BlogTemplate;
