import pagesApi from '@/api/pages';
import Banner from '@/components/Banner';
import CustomerStory from './customer-story';
import Slider from '@/components/SliderImage';

export const metadata = {
  title: 'Khách hàng tiêu biểu | HAHAHO',
  description: '',
};

export default async function Page() {
  const res = await pagesApi.typicalCustomers();
  const { banner, description, logo, customers } = res.data;
  return (
    <>
      <Banner {...banner} />
      <h1 className="h-[100px] w-full bg-[#F8F8F9] py-9 text-center text-4xl font-semibold uppercase text-primary">
        Khách hàng tiêu biểu
      </h1>
      <p className="mx-auto w-[896px] py-6 text-justify text-2xl leading-[140%]">
        {description}
      </p>
      <Slider listLogo={logo} />
      <h1 className="h-[100px] w-full bg-[#F8F8F9] py-9 text-center text-4xl font-semibold uppercase text-primary">
        câu chuyện khách hàng
      </h1>
      <CustomerStory listStory={customers} />
    </>
  );
}
