import { Banner } from '@/sections/news';
import ListContent from '@/sections/news/ListContent';

export const metadata = {
  title: 'Thông cáo báo chí | HAHAHO',
  description: '',
};

export default function Page() {
  return (
    <>
      <Banner />
      <ListContent />
    </>
  );
}
