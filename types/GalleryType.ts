export type ImageType = {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
  isLandscape: boolean;
};

export type GalleryType = {
  title: string;
  slug: string;
  description: string;
  images: ImageType[];
};

export type GalleriesType = GalleryType[];
