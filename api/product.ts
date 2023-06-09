import { GET } from '@/api/index';
import { Product } from '@/types/collection';
import { Config, Pagination, Response } from '@/types/common';

const productApi = {
  getList: (deep?: number, config?: Config) =>
    GET<Response<Product[]>>('/api/products', {
      ...config,
      params: {
        populate: `deep${deep ? `,${deep}` : ''}`,
      },
    }),
  getListBasic: (pagination?: Pagination, config?: Config) =>
    GET<Response<Product[]>>('/api/products', {
      ...config,
      params: {
        ...(pagination && { pagination }),
        populate: {
          logo: { populate: 1 },
          banner: { populate: 1 },
        },
      },
    }),

  async getBySlug(
    slug: string,
    config?: Config
  ): Promise<(Product & { otherProducts: Product[] }) | null> {
    const data = await GET<Response<Product[]>>('/api/products', {
      ...config,
      params: {
        filters: {
          slug: {
            $eqi: slug,
          },
        },
        populate: 'deep',
      },
    });

    if (data.data.length !== 0) {
      const dataOther = await this.getListBasic({ pageSize: 4 });

      return {
        ...data.data[0],
        otherProducts: dataOther.data,
      };
    } else return null;
  },
};

export default productApi;
