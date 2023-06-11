import pagesApi from '@/api/pages';
import Banner from '@/components/Banner';
import Content from './component/content';

export const metadata = {
  title: 'Đội ngũ lãnh đạo | HAHAHO',
  description: '',
};

export default async function Page() {
  const res = await pagesApi.leaderships();

  const { banner, leaderships } = res.data;

  return (
    <section className="mb-48">
      <Banner {...banner} />
      <Content leaderships={leaderships} />
    </section>
  );
}
