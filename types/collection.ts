import { Common, Media } from '@/types/common';
import {
  Advantage,
  Picture,
  ProductBanner,
  ProductFeature,
  Richtext,
} from '@/types/component';

export interface Product {
  title: string;
  slug: string;
  color: string;
  logo: Media;
  banner: ProductBanner;
  description: string;
  featureImage: Media;
  features: ProductFeature[];
  advantages: Advantage[];
  benefits: Richtext[];
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
