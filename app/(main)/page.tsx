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
        <Products />
      </div>
      <TypicalCustomers />
      <TechnologyPartner />
    </>
  );
}
