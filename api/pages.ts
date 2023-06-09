import { Config, Response } from '@/types/common';
import {
  DevelopmentJourneyPage,
  FlowPage,
  HomePage,
  LeadershipPage,
  OpenLetterPage,
  PartnersPage,
  ProductPage,
  TypicalCustomerPage,
} from '@/types/page';
import { GET } from '.';

const pagesApi = {
  leaderships: (config?: Config) =>
    GET<Response<LeadershipPage>>('/api/leadership-page', {
      ...config,
      params: {
        populate: 'deep',
      },
    }),
  typicalCustomers: (config?: Config) =>
    GET<Response<TypicalCustomerPage>>('/api/customers-page', {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
  openLetter: (config?: Config) =>
    GET<Response<OpenLetterPage>>('/api/open-letter', {
      ...config,
      params: {
        populate: 'deep',
      },
    }),

  developmentJourney: (config?: Config) =>
    GET<Response<DevelopmentJourneyPage>>('/api/development-journey-page', {
      ...config,
      params: {
        populate: 'deep',
      },
    }),
  parnersPage: (config?: Config) =>
    GET<Response<PartnersPage>>('/api/partners-page', {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
  homePage: (config?: Config) =>
    GET<Response<HomePage>>(`/api/home-page`, {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
  productPage: (config?: Config) =>
    GET<Response<ProductPage>>(`/api/product-page`, {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
  flowPgae: (config?: Config) =>
    GET<Response<FlowPage>>(`/api/flow-page`, {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
};

export default pagesApi;
