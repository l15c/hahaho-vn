import { TypicalCustomers } from "@/sections/homepage";
import { Banner } from "@/sections/khach-hang-va-doi-tac/khach-hang-tieu-bieu";
import CustomerStory from "@/sections/khach-hang-va-doi-tac/khach-hang-tieu-bieu/customer-story";

export const metadata = {
  title: "Khách hàng tiêu biểu | HAHAHO",
  description: "",
};

export default function Page() {
  return (
    <>
      <Banner />
      <h1 className="h-[100px] w-full bg-[#F8F8F9] py-9 text-center text-4xl font-semibold uppercase text-primary">
        Khác hàng tiêu biểu
      </h1>
      <p className="mx-auto w-[896px] py-6 text-justify text-2xl leading-[140%]">
        HAHAHO đã triển khai thành công nhiều dự án chuyển đổi số cho các doanh
        nghiệp tư nhân và nhà nước trong thời gian vừa qua, tiêu biểu là các
        giải pháp chuyển đổi số trong các lĩnh vực an ninh quốc phòng, sản xuất,
        dịch vụ, y tế và thương mại.
      </p>
      <TypicalCustomers />
      <h1 className="h-[100px] w-full bg-[#F8F8F9] py-9 text-center text-4xl font-semibold uppercase text-primary">
        câu chuyện khách hàng
      </h1>
      <CustomerStory/>
    </>
  );
}
