import {  Common, Media } from '@/types/common';

// ---------------------------------Elements---------------------------------
export interface Banner {
  title?: string;
  image: Media;
}

export interface Feature {
  mark: boolean;
  icon: Media;
  text: string;
}

export interface Flow {
  name: string;
  steps: StepFlow[];
}
export interface StepFlow {
  text: string;
  image: Media;
  content: Richtext;
}

export interface HistoryItem {
  content: Richtext;
  logo: Media;
  period: string;
  color: string;
}

export interface ImageText {
  text: string;
  image: Media;
  content: Richtext;
}

export interface Leadership {
  id: number;
  name: string;
  pronouns: string;
  position: string;
  role: string;
  content: string;
  avatar: Media;
}

//--------------------------------- Product-----------------------------------

export interface Advantage {
  image: Media;
  content: Richtext
}

export interface ProductBanner {
  name: string;
  description: Richtext;
  demoUrl: string;
  trialUrl: string;
  image: Media;
}

export interface ProductFeature {
  image: Media;
  title: string;
  contetn: Richtext;
}

// -------------------------------Shared---------------------------------

export interface Image {
  file: Media;
}

export interface Richtext {
  content: string;
}

export interface Seo{
  metaTitle: string;
  metaDescription: string;
  shareImage: Media;
}



// ---------------------------------Common---------------------------------

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

export interface ListMedia {
  title: string;
  images: Media[];
}

export type Customer = Common & {
  name: string;
  year: number;
  contents: Array<Richtext|Image>;
};

export interface ImageTitleContent {
  image: Media;
  content: string;
  stage: string;
}


export interface CustomerStory {
  id: number;
  Name: string;
  content1: string;
  content2: string;
  Image: Media[];
}