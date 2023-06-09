import pagesApi from "@/api/pages";
import {
  Banner,
  Maxim,
  Products,
} from "../../sections/homepage";
import Slider from '@/components/SliderImage';

export const metadata = {
  title: "Trang chủ | HAHAHO",
  description: "",
};

export default async function Home() {
  const res = await pagesApi.homePage();

  const {
    title,
    banner,
    description,
    customersLogo,
    partnersLogo,
    productPlatform,
    productInbusiness,
  } = res.data;
  
  return (
    <>
      <Banner {...{ title, ...banner }} />
      <div className="mx-auto mt-24 max-w-[896px]">
        <Maxim description={description} />
        <p className="mb-16 text-center text-4xl font-bold uppercase text-primary">
          Sản phẩm
        </p>
        <Products productInbusiness={productInbusiness} productPlatform={productPlatform}/>
      </div>
      <div className="mt-16 h-[100px] w-full bg-[#f8f8f9] text-center text-4xl font-bold uppercase leading-[100px] text-primary">
        Khách hàng tiêu biểu
      </div>
      <Slider listLogo={customersLogo} />
      <div className="h-[100px] w-full bg-[#f8f8f9] text-center text-4xl font-bold uppercase leading-[100px] text-primary">
        Đối tác công nghệ
      </div>
      <Slider listLogo={partnersLogo} />
    </>
  );
}
