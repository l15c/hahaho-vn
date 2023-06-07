import { Media } from '@/types/common';

export interface Banner {
  Title?: string;
  Description?: string;
  SubTitle?: string;
  Image: Media;
}

export interface Leadership {
  id: number;
  Name: string;
  Pronouns: string;
  Position: string;
  Role: string;
  Content: string;
  Avatar: Media;
}

export interface Customer {
  Name: string;
  Year: number;
  Content1: string;
  Content2: string;
  Images: Media[];
}

export interface ImageTitleContent {
  Image: Media;
  Content: string;
  Stage: string;
}

export interface Flow {
  Type: string;
  StepAction: StepFlow[];
}

export interface StepFlow {
  Action: string;
  Image: Media;
}
