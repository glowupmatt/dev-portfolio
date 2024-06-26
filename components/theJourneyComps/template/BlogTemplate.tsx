import React from "react";
import Navigation from "../Navigation";

type Props = {
  children: React.ReactNode;
};

const BlogTemplate = (props: Props) => {
  const { children } = props;
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#25292B] to-gray-600 text-white flex md:justify-center md:items-center">
      <div className="w-full max-w-screen-xl px-4">
        <Navigation />
        {children}
      </div>
    </div>
  );
};

export default BlogTemplate;
