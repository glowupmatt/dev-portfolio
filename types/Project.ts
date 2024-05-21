type Image = {
  src: string;
  alt: string;
};

type Author = {
  name: string;
};

type Category = {
  title: string;
  description: string;
};

export type Post = {
  title: string;
  slug: string;
  author: Author;
  mainImage: Image;
  categories: Category[];
  publishedAt: string;
  body: any;
  excerpt: string;
};

type Preview = {
  title: string;
  author: string;
  media: Image;
  subtitle: string;
};

export type PostType = {
  title: string;
  slug: string;
  author: Author;
  mainImage: Image;
  categories: Category[];
  publishedAt: string;
  body: any;
  excerpt: string;
  preview: Preview;
};
