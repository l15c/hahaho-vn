import { AxiosRequestConfig } from 'axios';

export type Config<D = any> = AxiosRequestConfig<D>;

// Strapi
export type Meta = {
  pagination: Pagination & {
    pageCount: number;
    total: number;
  };
};

export type Pagination = {
  page?: number;
  pageSize?: number;
};

export interface Media {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface Common {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type ListResponse<> = {};

export type Response<T> = {
  data: {
    id: number;
  } & T;
  meta: Meta;
};

export type FormContact = {
  customerName: string;
  product?: string;
  companyName: string;
  email?: string;
  phoneNumber: string;
};
