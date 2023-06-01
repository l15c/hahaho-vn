import { Products } from "@/sections/homepage";
import { Banner } from "@/sections/products";

export const metadata = {
  title: "Sản phẩm | HAHAHO",
  description: "",
};

export default function Page() {
  return (
    <>
      <Banner />
      <div className="mx-auto max-w-[896px] pb-32 pt-0 mt-8">
      <Products />
      </div>
    </>
  );
}
