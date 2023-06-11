import pagesApi from '@/api/pages';
import Flows from '@/app/(main)/quy-trinh-dich-vu/Flows';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'Quy trình dịch vụ | HAHAHO',
  description: '',
};

export default async function Page() {
  const res = await pagesApi.flowPage();
  const { banner, flows } = res.data;

  return (
    <section className="mb-24">
      <Banner {...banner} />
      <Flows flows={flows} />
    </section>
  );
}
