import Image from "next/image";
import InfoSoft from "./infosoft.png";
import iBpm from "./ibpm.png";
import hahaho from "./hahaho.png";

export default function Timeline() {
  return (
    <div className="mx-auto mb-32 max-w-[1040px]">
      <div className="flex h-20 bg-primary text-white">
        <p className="m-auto text-4xl font-bold uppercase">
          Lịch sử hình thành
        </p>
      </div>
      <div className="mb-10 mt-24 grid grid-cols-11 text-justify text-2xl leading-9">
        <div className="contents">
          <div className="relative col-start-2 col-end-3 mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-black"></div>
            </div>
            <div className=" absolute top-0 flex text-center">
              <div className="relative my-auto mr-4 h-20 w-3 translate-x-1/2 bg-[#ED1C24]">
                <div className="absolute left-[95%] top-1/2 h-0 w-0 -translate-y-1/2 border-8 border-transparent border-l-[#ED1C24]" />
              </div>
              <p className="rotate-180 font-bold [writing-mode:vertical-rl]">
                2005
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-11 mr-auto w-full ">
            <Image src={InfoSoft} alt="Logo Infosoft" />
            <p className="my-8 mt-3 w-full">
              Thành lập
              <span className="font-bold"> Công ty Cổ phần Infosoft </span>
              <br />
              (Tiền thân của HAHAHO).
            </p>
          </div>
        </div>
        <div className="contents">
          <div className="relative col-start-2 col-end-3 mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-black"></div>
            </div>
            <div className=" absolute top-0 flex text-center">
              <div className="relative my-auto mr-4 h-20 w-3 translate-x-1/2 bg-product-e-office">
                <div className="absolute left-[95%] top-1/2 h-0 w-0 -translate-y-1/2 border-8 border-transparent border-l-product-e-office" />
              </div>
              <p className="rotate-180 font-bold [writing-mode:vertical-rl]">
                2008
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-11 mr-auto w-full ">
            <Image src={iBpm} alt="Logo iBPM" />
            <p className="my-8 mt-3 w-full">
              Ra mắt công cụ phần mềm
              <span className="font-bold"> iBPM Suite, </span> hỗ trợ triển khai
              tự động hóa quy trình nghiệp vụ quản lý phù hợp chuẩn quốc tế về
              lĩnh vực BPM (Business Process Management).
            </p>
          </div>
        </div>
        <div className="contents">
          <div className="relative col-start-2 col-end-3 mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-black"></div>
            </div>
            <div className=" absolute top-0 flex text-center">
              <div className="relative my-auto mr-4 h-20 w-3 translate-x-1/2 bg-[#4BDB07]">
                <div className="absolute left-[95%] top-1/2 h-0 w-0 -translate-y-1/2 border-8 border-transparent border-l-[#4BDB07]" />
              </div>
              <p className="rotate-180 font-bold [writing-mode:vertical-rl]">
                2011 - 2021
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-11 mr-auto w-full ">
            <p className="mb-8 w-full">
              Triển khai thành công các dự án chuyển đổi số cho các doanh nghiệp
              ở nhiều ngành nghề khác nhau như: Công viên Phần mềm Quang Trung
              (QTSC), Đại Quang Minh, Đồng Tâm Group, Hoa Sen Group, Mai Linh
              Group, PV Drilling Offshore, THACO Group, Trường Đại Học Sao Đỏ,
              v.v...
            </p>
          </div>
        </div>
        <div className="contents">
          <div className="relative col-start-2 col-end-3 mx-auto">
            <div className="flex h-full w-6 justify-center">
              <div className="pointer-events-none h-1/2 w-1 bg-black"></div>
            </div>
            <div className=" absolute top-0 flex text-center">
              <div className="relative my-auto mr-4 h-20 w-3 translate-x-1/2 bg-primary">
                <div className="absolute left-[95%] top-1/2 h-0 w-0 -translate-y-1/2 border-8 border-transparent border-l-primary" />
              </div>
              <p className="rotate-180 font-bold [writing-mode:vertical-rl]">
                2022
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-11 mr-auto w-full ">
            <Image src={hahaho} alt="Logo HAHAHO" />
            <p className="my-8 mt-3 w-full">
              Tái cấu trúc công ty với thương hiệu Hệ sinh thái số HAHAHO.
              <br />
              Hoàn thành việc nâng cấp phần mềm nền tảng chuyển đổi số iBPM 1.6
              lên 2.0.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
