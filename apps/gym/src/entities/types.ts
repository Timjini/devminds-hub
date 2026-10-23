import * as Icons from "lucide-react";

export interface JsonApiResource<T> {
  id: string;
  type: string;
  attributes: T;
}

export interface JsonApiResponse<T> {
  data: JsonApiResource<T>[];
}

export interface JsonApiSingleResponse<T> {
  data: JsonApiResource<T>;
}


export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  likes?: string;
  link: string;
  tagSentence: string;
  icon: keyof typeof Icons;
}


export interface ImageItem {
  id: string;
  src: string;
  alt: string;
}
