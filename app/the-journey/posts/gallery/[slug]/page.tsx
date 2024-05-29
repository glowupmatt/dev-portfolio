import { getGallery } from "@/sanity/sanity-utils";
import React from "react";
import { GalleryType } from "@/types/GalleryType";
import BlogTemplate from "@/components/theJourneyComps/template/BlogTemplate";
import type { Metadata, ResolvingMetadata } from "next";
import GalleryTemplate from "@/components/theJourneyComps/template/GalleryTemplate";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;
  const data: GalleryType = await getGallery(slug);
  return {
    title: `MN | ${data?.title}`,
    description: data?.description,
  };
}

export const revalidate = 1;
const GalleryDisplay = async (props: Props) => {
  const data: GalleryType = await getGallery(props.params.slug);

  return (
    <BlogTemplate>
      <div className="flex flex-col gap-4">
        <h2 className="text-[1rem] tracking-widest md:text-[5rem] text-center font-bold font-spectral md:tracking-wider">
          {data?.title}
        </h2>
        <p className="text-[.6rem] md:text-[1rem] font-thin tracking-wide font-radio-canada text-center">
          {data?.description}
        </p>
        <GalleryTemplate VARIANT="HORIZONTAL" data={data} />
        <GalleryTemplate VARIANT="VERTICAL" data={data} />
      </div>
    </BlogTemplate>
  );
};

export default GalleryDisplay;
