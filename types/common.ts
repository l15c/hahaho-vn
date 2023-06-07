import { AxiosRequestConfig } from 'axios';

export type Config<D = any> = AxiosRequestConfig<D>;

// Strapi
export type Meta = {};

export interface Media {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      url: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export type Attributes<T> =  {
  createdAt: string;
  updatedAt: string;
  publishedAt:string;
} & T

export type ListResponse<> = {};

export type Response<T> = {
  data: {
    id: number;
    attributes: Attributes<T>;
  };
  meta: Meta;
};
