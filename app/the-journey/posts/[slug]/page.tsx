import React from "react";
import BlogTemplate from "../../../../components/theJourneyComps/template/BlogTemplate";
import Navigation from "../../../../components/theJourneyComps/Navigation";
import { getPost } from "../../../../sanity/sanity-utils";

type Props = {
  params: {
    slug: string;
  };
};

const page = async (props: Props) => {
  const {
    params: { slug },
  } = props;
  const post = await getPost(slug);
  console.log(post);
  return (
    <BlogTemplate>
      <div className="min-h-screen w-full max-w-screen-xl px-4">
        <Navigation />
        <div className="flex flex-col gap-4 text-center font-spectral"></div>
      </div>
    </BlogTemplate>
  );
};

export default page;
