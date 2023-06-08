import { Banner, Customer, CustomerStory, Flow, HistoryItem, Image, ImageText, Leadership, Product, ProductBanner, Richtext } from '@/types/component';
import { Media } from './common';


export interface HomePage {
  banner: ProductBanner;
  description: Richtext;
  productPlatform: ImageText[];
  productInbusiness:Product[];
  cutomerLogo: Media[];
  partnerLogo: Image[];
  title:string;
}

export interface LeadershipPage {
  Banner: Banner;
  Leaderships: Leadership[];
}

export interface FlowPage {
  banner: Banner;
  flows: Flow[];
}

export interface TypicalCustomerPage {
  banner: Banner;
  description: string;
  logo: Media[];
  customer:Customer[];
}
export interface DevelopmentJourneyPage{
  banner: Banner;
  description: string;
  image: Media;
  slogans: ImageText[];
  history: HistoryItem[];
} 

export interface PartnersPage{
  banner: Banner;
  logo: Image[];
}

export interface OpentLetturePage{
  banner: Banner;
  content: Richtext;
  signature: Image;
  signer: string;
}


