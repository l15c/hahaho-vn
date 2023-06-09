import {Common, Media} from "@/types/common";
import {
  Advantage,
  Picture,
  ProductBanner,
  ProductFeature,
  Richtext,
} from '@/types/component';

export interface Product {
    banner: ProductBanner;
    description: Richtext;
    featureImage: Media;
    features: ProductFeature[];
    advantages: Advantage[];
    benefits: Richtext[];
    title: string;
    slug:string;
    color:string;
}

export interface GroupImage {
    title: string;
    images: Media[];
}
export type DynamicZone<T> = T & {
    __component: string;
    id: number;
}
export type Customer = Common & {
  id: number;
  name: string;
  year: number;
  contents: (DynamicZone<Richtext> | DynamicZone<Picture>)[];
};