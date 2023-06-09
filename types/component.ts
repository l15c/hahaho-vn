import { Media } from '@/types/common';

// ---------------------------------Elements---------------------------------
export interface Banner {
  title?: string;
  name?: string;
  demoUrl?: string;
  trialUrl?: string;
  description?: string;
  image: Media;
}

export interface Feature {
  mark: boolean;
  icon: Media;
  text: string;
}

export interface Flow {
  name: string;
  step: StepFlow[];
}

export interface StepFlow {
  text: string;
  image: Media;
}

export interface HistoryItem {
  content: string;
  logo?: Media;
  period: string;
  color: string;
}

export interface ImageText {
  text: string;
  image: Media;
  content: string;
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
  content: string
}

export interface ProductBanner {
  name: string;
  description: string;
  demoUrl: string;
  trialUrl: string;
  image: Media;
}

export interface ProductFeature {
  image: Media;
  title: string;
  content: string;
}

// -------------------------------Shared---------------------------------

export interface Picture {
  file: Media;
}

export interface Richtext {
  content: string;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  shareImage: Media;
}
