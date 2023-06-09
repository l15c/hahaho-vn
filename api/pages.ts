import { Config, Response } from '@/types/common';
import {
  DevelopmentJourneyPage,
  LeadershipPage,
  OpenLetterPage,
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
};

export default pagesApi;
