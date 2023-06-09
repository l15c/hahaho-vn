import { GET } from '.';
import { Config, Response } from '@/types/common';
import { HomePage, LeadershipPage, PartnersPage, TypicalCustomerPage } from '@/types/page';

const pagesApi = {
  leaderships: (config?: Config) =>
    GET<Response<LeadershipPage>>('/api/leadership-page', {
      ...config,
      params: {
        populate: 'deep'
      },
    }),
  typicalCustomers: (config?: Config) =>
    GET<Response<TypicalCustomerPage>>('/api/customers-page', {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
  parnersPage: (config?: Config) =>
    GET<Response<PartnersPage>>('/api/partners-page', {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
  homePage: (config?:Config)=> 
 GET<Response<HomePage>>(`/api/home-page`, {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),

};

export default pagesApi;
