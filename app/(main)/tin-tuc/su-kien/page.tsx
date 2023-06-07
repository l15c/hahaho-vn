import { Banner } from '@/sections/news';
import ListContent from '@/sections/news/ListContent';

export const metadata = {
  title: 'Sự kiện | HAHAHO',
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
