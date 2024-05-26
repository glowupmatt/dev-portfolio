export type ImageType = {
  src: string;
  alt: string;
};

type Author = {
  name: string;
};

export type Post = {
  title: string;
  slug: string;
  author: Author;
  mainImage: ImageType;
  category: string;
  publishedAt: string;
  body: any;
  excerpt: string;
};

type Preview = {
  title: string;
  author: string;
  media: ImageType;
  subtitle: string;
};

export type PostType = {
  title: string;
  slug: string;
  author: Author;
  mainImage: ImageType;
  leftSideImage: ImageType;
  rightSideImageList: ImageType[];
  category: string;
  publishedAt: string;
  body: any;
  excerpt: string;
  preview: Preview;
};
