import { Content } from '@/sections/about-us/lanh-dao';
import pagesApi from '@/api/pages';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'Đội ngũ lãnh đạo | HAHAHO',
  description: '',
};

export default async function Page() {
  const res = await pagesApi.leaderships();

  const {
    Banner: {
      Title,
      Image: {
        data: {
          attributes: { url },
        },
      },
    },
    Leaderships,
  } = res.data.attributes;

  return (
    <>
      <Banner title={Title} imageUrl={url} />
      <Content leaderships={Leaderships} />
    </>
  );
}
