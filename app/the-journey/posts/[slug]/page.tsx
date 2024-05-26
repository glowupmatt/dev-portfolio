import React from "react";
import BlogTemplate from "../../../../components/theJourneyComps/template/BlogTemplate";
import { getPost } from "../../../../sanity/sanity-utils";
import Image from "next/image";
import { PostType } from "@/types/PostType";
import PostViewHeader from "@/components/theJourneyComps/template/PostViewHeader";
type Props = {
  params: {
    slug: string;
  };
};
type Span = {
  _type: "span";
  _key: string;
  marks: any[];
  text: string;
};

type Block = {
  _type: "block";
  _key: string;
  style: string;
  markDefs: any[];
  children: Span[];
};
type RightSideImageType = {
  src: string;
  alt: string;
};

export const revalidate = 1;
const page = async (props: Props) => {
  const {
    params: { slug },
  } = props;
  const post: PostType = await getPost(slug);

  return (
    <BlogTemplate>
      <PostViewHeader
        postTitle={post.title}
        postImage={post.mainImage}
        excerpt={post.excerpt}
      />
      <div className="min-h-screen w-full max-w-screen-xl px-4">
        <div className=" flex flex-col gap-[2rem] md:grid grid-cols-3">
          <Image
            src={post.leftSideImage.src}
            alt={post.leftSideImage.alt}
            width={1080}
            height={1920}
          />
          <div className="flex flex-col gap-4 text-center font-spectral">
            {post.body.map((block: Block, index: number) => {
              return <p key={block._key + index}>{block.children[0].text}</p>;
            })}
          </div>
          <div className="flex flex-col gap-4">
            {post.rightSideImageList &&
              post.rightSideImageList.map(
                (image: RightSideImageType, index: number) => {
                  return (
                    <div
                      key={image.src + index}
                      className="w-full h-[242px] relative"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                },
              )}
          </div>
        </div>
      </div>
    </BlogTemplate>
  );
};

export default page;
