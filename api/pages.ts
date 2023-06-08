import { GET } from '.';
import { Config, Response } from '@/types/common';
import { LeadershipPage, TypicalCustomerPage } from '@/types/page';

const pagesApi = {
  leaderships: (config?: Config) =>
    GET<Response<LeadershipPage>>('/api/leadership-page', {
      ...config,
      params: {
        populate: {
          Banner: { populate: '*' },
          Leaderships: { populate: '*' },
        },
      },
    }),
  typicalCustomers: (config?: Config) =>
    GET<Response<TypicalCustomerPage>>('/api/customers-page', {
      ...config,
      params: {
        populate: 'deep,4',
      },
    }),
};

export default pagesApi;
