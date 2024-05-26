import React from "react";
import { Post } from "@/types/PostType";
import { GalleryType } from "@/types/GalleryType";
import PreviewPostBody from "./template/PreviewPostBody";
import GalleryPreview from "./template/GalleryPreviewBody";

type Props = {
  post?: Post;
  gallery?: GalleryType;
  VARIANT: "POST" | "GALLERY";
};

const PreviewPosts = (props: Props) => {
  const { post, VARIANT, gallery } = props;
  if (VARIANT === "POST") {
    if (!post) {
      return null;
    }
    return <PreviewPostBody post={post} />;
  }

  if (VARIANT === "GALLERY") {
    if (!gallery) {
      return null;
    }
    return <GalleryPreview gallery={gallery} />;
  }
};

export default PreviewPosts;
