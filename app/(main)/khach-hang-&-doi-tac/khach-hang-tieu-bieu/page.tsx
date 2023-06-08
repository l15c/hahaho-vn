import pagesApi from "@/api/pages";
import { TypicalCustomers } from "@/sections/homepage";
import Banner from '@/components/Banner';
import CustomerStory from "@/sections/khach-hang-va-doi-tac/khach-hang-tieu-bieu/customer-story";

export const metadata = {
  title: "Khách hàng tiêu biểu | HAHAHO",
  description: "",
};

export default async function Page() {
  const res = await pagesApi.typicalCustomers();
  // console.log(res.data.logo)
  const {
    banner: {
      image: {url},
      },
    description,
    logo,
    customer,
  } = res.data;

  return (
    <>
      <Banner imageUrl={url}/>
      <h1 className="h-[100px] w-full bg-[#F8F8F9] py-9 text-center text-4xl font-semibold uppercase text-primary">
        Khác hàng tiêu biểu
      </h1>
      <p className="mx-auto w-[896px] py-6 text-justify text-2xl leading-[140%]">
        {description}
      
      </p>
      <TypicalCustomers listLogo={logo} />
      <h1 className="h-[100px] w-full bg-[#F8F8F9] py-9 text-center text-4xl font-semibold uppercase text-primary">
        câu chuyện khách hàng
      </h1>
      {/* <CustomerStory listStory={customer} /> */}
    </>
  );
}
