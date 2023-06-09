import {
  Banner,
  Flow,
  HistoryItem,
  Picture,
  ImageText,
  Leadership,
  ProductBanner,
  Richtext,
} from '@/types/component';
import { Media } from './common';
import { Customer, GroupImage, Product } from '@/types/collection';

export interface HomePage {
  banner: ProductBanner;
  description: string;
  productPlatform: Product;
  productInbusiness: Product[];
  customersLogo: GroupImage;
  partnersLogo: GroupImage;
  title: string;
}


export interface LeadershipPage {
  banner: Banner;
  leaderships: Leadership[];
}

export interface FlowPage {
  banner: Banner;
  flows: Flow[];
}

export interface TypicalCustomerPage {
  banner: Banner;
  description: string;
  logo: GroupImage;
  customers: Customer[];
}
export interface DevelopmentJourneyPage {
  banner: Banner;
  description: string;
  image: Media;
  slogans: ImageText[];
  history: HistoryItem[];
}

export interface PartnersPage {
  banner: Banner;
  logo: GroupImage;
}

export interface OpenLetterPage {
  banner: Banner;
  content: string;
  signature: Media;
  signer: string;
}

export interface ProductPage {
  banner: Banner;
  productPlatform: Product;
  productInbusinesses: Product[];
}
