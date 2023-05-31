import Image from "next/image";
import quoteSvg from "./quote.svg";
import sign from "./sign.png";

export default function Letter() {
  return (
    <div className="mx-auto mb-48 mt-20 max-w-[948px] text-2xl">
      <Image
        src={quoteSvg}
        alt="quote-svg"
        className="absolute -translate-x-full -translate-y-full"
      />
      <div className="flex flex-col gap-8 text-justify">
        <p className="indent-8">
          Kính gửi <span className="font-bold">Quý Khách hàng & Đối tác,</span>
        </p>
        <p className="indent-8">
          Với hơn 17 năm kinh nghiệm hoạt động trong lĩnh vực công nghệ thông
          tin và tư vấn giải pháp chuyển đổi số, chúng tôi đã làm việc với nhiều
          khách hàng ở nhiều lĩnh vực, quy mô khác nhau. Chúng tôi đúc kết được
          một chủ trương triển khai phù hợp, thành công cho các chương trình
          chuyển đổi số của khách hàng là{" "}
          <span className="font-bold">“Một vốn - Bốn lời”.</span>
        </p>
        <p className="indent-8">
          <span className="font-bold">Một vốn - Bốn lời</span> là Quý khách chỉ
          đầu tư 1 “vốn” và nhận được 4 “lời”, cụ thể “lời” như sau:
        </p>
        <ul className="list-disc">
          <li className="mb-1.5 ml-4 pl-4">
            <span className="font-bold">Lời khen:</span> Tăng sự trải nghiệm của
            khách hàng, nhân viên và nhà cung cấp bằng việc chuyển đổi số các
            quy trình mà chưa có phần mềm có sẵn nào đáp ứng được.
          </li>
          <li className="mb-1.5 ml-4 pl-4">
            <span className="font-bold">Lời nhanh:</span> Chương trình chuyển
            đổi số được chia thành nhiều hạng mục, xong hạng mục nào thì sử dụng
            ngay hạng mục đó;
          </li>
          <li className="mb-1.5 ml-4 pl-4">
            <span className="font-bold">Lời ròng tăng:</span> Hiệu quả chuyển
            đổi số phát huy ngay trong kỳ báo cáo tài chính;
          </li>
          <li className="mb-1 ml-4 pl-4">
            <span className="font-bold">Lời mãi:</span> Vì khách hàng được
            chuyển giao để làm chủ công nghệ nên khách hàng có thể không ngừng
            ứng dụng sáng kiến số vào hoạt động quản lý, sản xuất, kinh doanh.
          </li>
        </ul>
        <p className="indent-8">
          Trong thực tế, chúng tôi đã triển khai thành công chủ trương trên cho
          nhiều khách hàng như Đồng Tâm, Hoa Sen, Mai Linh, THACO Group,...
        </p>
        <p className="indent-8">
          Và với kết quả tích cực này, chúng tôi cam kết sẽ tiếp tục đồng hành
          với quý vị để nâng cao năng lực sản xuất, kinh doanh và quản trị của
          tổ chức và doanh nghiệp, thích ứng với sự chuyển biến của cuộc cách
          mạng công nghiệp lần thứ IV.
        </p>
        <p className="indent-8">Trân trọng cảm ơn!</p>
      </div>
      <p className="text-right font-bold uppercase">
        CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ
      </p>
      <Image src={sign} alt="Sign" className="ml-auto translate-x-[18%]" />
      <p className="mr-24 text-right font-bold capitalize">Trần Ngọc Dũ</p>
    </div>
  );
}
