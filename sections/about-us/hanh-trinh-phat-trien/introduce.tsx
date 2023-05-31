import Photo1 from "./photo-1.png";
import Vision from "./vision.svg";
import Mission from "./mission.svg";
import Diamond from "./diamond.svg";
import Image from "next/image";
export default function Introduce() {
  return (
    <div className="mx-auto mb-32 mt-20 max-w-[1040px]">
      <div className="flex">
        <div className="mr-8 h-full bg-primary px-3 py-1 text-center font-extrabold uppercase  text-white">
          <p className="text-[56px] leading-none">18</p>
          <p className="text-2xl">năm</p>
        </div>
        <p className="flex-grow text-justify text-2xl">
          kinh nghiệm hoạt động trong lĩnh vực công nghệ thông tin và tư vấn
          giải pháp chuyển đổi số, HAHAHO là đơn vị tiên phong phát triển nền
          tảng chuyển đổi số iBPM và các giải pháp inBusiness đáp ứng nhu cầu
          quản lý và lãnh đạo của doanh nghiệp Việt Nam.
        </p>
      </div>
      <div className="relative mb-14 mt-6 h-44 w-full">
        <div className="absolute h-full w-full bg-[#000]/[.14]" />
        <Image
          src={Photo1}
          alt="Photo"
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-baseline">
        <div className="col-span-1 grid justify-center gap-4">
          <Image src={Vision} alt="Tầm nhìn" className="mx-auto" />
          <p className="text-center text-4xl font-bold uppercase text-primary">
            Tầm nhìn
          </p>
          <p className="mx-auto max-w-[240px] text-justify">
            HAHAHO là nhà phát triển{" "}
            <span className="font-bold">nền tảng chuyển đổi số iBPM</span> và
            các <span className="font-bold">giải pháp inBusiness,</span> tự động
            hóa quy trình nghiệp vụ quản lý, lãnh đạo của doanh nghiệp{" "}
            <span className="font-bold">“MAKE IN VIETNAM”</span> top 5 của Việt
            Nam.
          </p>
        </div>
        <div className="col-span-1 grid justify-center gap-4">
          <Image src={Mission} alt="Sứ mệnh" className="mx-auto" />
          <p className="text-center text-4xl font-bold uppercase text-primary">
            Sứ mệnh
          </p>
          <p className="mx-auto max-w-[260px] text-justify">
            HAHAHO mong muốn tạo ra một hệ sinh thái chuyển đổi số bằng việc
            <span className="font-bold"> “Liên kết sức mạnh số” </span>
            để tạo ra giá trị phát triển bền vững, gia tăng hiệu quả và không
            ngừng đổi mới, đáp ứng sự thay đổi về chất lượng kinh doanh và đời
            sống của con người.
          </p>
        </div>
        <div className="col-span-1 grid justify-center gap-4">
          <Image src={Diamond} alt="Giá trị cốt lõi" className="mx-auto" />
          <p className="text-center text-4xl font-bold uppercase text-primary">
            Giá trị cốt lõi
          </p>
          <p className="mx-auto max-w-[240px] text-justify">
            <span className="font-bold">Tiên phong</span> đổi mới từ
            <span className="font-bold"> sức mạnh tập thể. </span>{" "}
            <span className="font-bold">Thích nghi </span>
            nhanh chóng để
            <span className="font-bold"> kiên định</span> đến cùng.
          </p>
        </div>
      </div>
    </div>
  );
}
