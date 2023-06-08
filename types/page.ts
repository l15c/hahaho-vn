import {
  Banner,
  Flow,
  HistoryItem,
  Image,
  ImageText,
  Leadership,
  ProductBanner,
  Richtext,
} from '@/types/component';
import { Media } from './common';
import {Customer, GroupImage, Product} from "@/types/collection";

export interface HomePage {
  banner: ProductBanner;
  description: Richtext;
  productPlatform: ImageText[];
  productInbusiness: Product[];
  cutomerLogo: Media[];
  partnerLogo: Image[];
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
  customer: Customer[];
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
  logo: Image[];
}

export interface OpentLetturePage {
  banner: Banner;
  content: Richtext;
  signature: Image;
  signer: string;
}
