import { Content } from '@/sections/about-us/lanh-dao';
import pagesApi from '@/api/pages';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'Đội ngũ lãnh đạo | HAHAHO',
  description: '',
};

export default async function Page() {
  const res = await pagesApi.leaderships();

  const { banner, leaderships } = res.data;

  return (
    <>
      <Banner {...banner} />
      <Content leaderships={leaderships} />
    </>
  );
}
