import {
  Banner,
  Maxim,
  Products,
  TypicalCustomers,
  TechnologyPartner
} from "../../sections/homepage";

export const metadata = {
  title: "Trang chủ | HAHAHO",
  description: "",
};

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mx-auto mt-24 max-w-[896px]">
        <Maxim />
        <p className="mb-16 text-center text-4xl font-bold uppercase text-primary">
          Sản phẩm
        </p>
        <Products />
      </div>
      <div className="mt-16 h-[100px] w-full bg-[#f8f8f9] text-center text-4xl font-bold uppercase leading-[100px] text-primary">
        Khách hàng tiêu biểu
      </div>
      <TypicalCustomers listLogo={[] as any} />
      <div className="h-[100px] w-full bg-[#f8f8f9] text-center text-4xl font-bold uppercase leading-[100px] text-primary">
        Đối tác công nghệ
      </div>
      <TechnologyPartner />
    </>
  );
}
