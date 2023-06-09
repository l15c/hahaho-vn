import { Common, Media } from '@/types/common';
import {
  Advantage,
  Image,
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

export type Customer = Common & {
  name: string;
  year: number;
  contents: Array<Richtext | Image>;
};
