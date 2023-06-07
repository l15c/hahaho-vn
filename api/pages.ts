import { GET } from '.';
import { Config, Response } from '@/types/common';
import { LeadershipPage } from '@/types/page';

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
};

export default pagesApi;
