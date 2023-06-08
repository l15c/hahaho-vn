"use client";

import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import {Customer} from "@/types/collection";


type ContentStory={}

function Thaco(props: ContentStory) {
  return (
    <>
      <div className="mx-auto w-[896px]">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-[30px] w-[320px] flex-1 bg-primary" />
          <div className=" flex items-baseline">
            <p className="mx-2 text-[64px] font-bold text-primary ">2022</p>
            <p className="text-center text-[48px] font-bold uppercase text-black">
              Thaco group
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-[896px] justify-between">
          <p className="w-[420px] text-justify text-2xl leading-[140%]">
            THACO là tập đoàn lớn hoạt động trong nhiều lĩnh vực, bao gồm nhiều
            công ty, phòng ban và văn phòng trải dài từ Bắc tới Nam, nên công
            tác quản lý văn bản trình ký phải qua nhiều cấp bậc và mất nhiều
            thời gian.
          </p>
          <Image
            alt="THACO"
            src="/images/thaco1.png"
            width={420}
            height={230}
          />
        </div>
        <div className="mx-auto flex w-[896px] justify-between ">
          <Image
            alt="THACO"
            src="/images/thaco2.png"
            width={420}
            height={230}
          />
          <p className="mt-4 w-[420px] text-justify text-2xl leading-[140%]">
            HAHAHO đã tham gia triển khai dự án chuyển đổi số và tự động hóa các
            quy trình nghiệp vụ quản lý thuộc khối văn phòng tập đoàn, đặc biệt
            là quy trình quản lý văn bản trình ký tích hợp chữ ký số.
            <br />
            <strong>&#8226; Quy mô người dùng: 200 users </strong>
          </p>
        </div>
      </div>
    </>
  );
}
function MaiLinh(props: ContentStory) {
  return (
    <>
      <div className="mx-auto w-[896px]">
        <div className="mb-16 flex items-center gap-8">
          <div className=" h-[30px] w-[320px] flex-1 bg-primary" />
          <div className=" flex items-baseline">
            <p className=" mr-2  text-[64px] font-bold text-primary ">2021</p>
            <p className="  text-center text-[48px] font-bold uppercase text-black">
              Mai linh
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-[896px] justify-between">
          <p className="w-[430px] text-justify text-2xl leading-[140%]">
            Tập đoàn Mai Linh bao gồm các Khối, Ban, Phòng, Bộ phận; các công ty
            thành viên, công ty con và các chi nhánh hiện hữu trên 63 tỉnh,
            thành với hơn 2.000 nhân viên thường xuyên có nhu cầu xử lý về tài
            liệu, hồ sơ, văn bản của các chức năng hành chính, nhân sự, văn
            phòng... đặc biệt là quy trình quản lý văn bản trình ký.
          </p>
          <p className="w-[430px] text-justify text-2xl leading-[140%]">
            HAHAHO đã hoàn thiện dự án “Văn phòng Điện tử”, hỗ trợ chuyển đổi số
            và tự động hóa toàn bộ các quy trình nghiệp vụ, đặc biệt là quy
            trình quản lý văn bản và tích hợp chữ ký số.
            <br />
            <br />
            <strong>&#8226; Quy mô người dùng: &#62; 2000 users </strong>
          </p>
        </div>
        <div className="mx-auto flex w-[896px] justify-between">
          <Image
            alt="THACO"
            src="/images/mailinh.png"
            width={898}
            height={359}
          />
        </div>
      </div>
    </>
  );
}

function DongTam(props: ContentStory) {
  return (
    <>
      <div className="mx-auto w-[896px]">
        <div className="mb-16 flex items-center gap-8">
          <div className=" flex items-baseline">
            <p className=" mx-2 text-[64px] font-bold text-primary ">2019</p>
            <p className=" text-center text-[48px] font-bold uppercase text-black">
              Đồng tâm group
            </p>
          </div>
          <div className=" h-[30px] w-[320px] flex-1 bg-primary" />
        </div>
        <div className="mx-auto flex w-[896px] justify-between">
          <Image
            alt="THACO"
            src="/images/mailinh1.png"
            width={420}
            height={230}
          />
          <p className="w-[420px] text-justify text-2xl leading-[140%]">
            Đồng Tâm là tập đoàn bao gồm các Khối, Ban, Phòng, Bộ phận; các công
            ty thành viên, công ty con và các chi nhánh trực thuộc Đồng Tâm với
            hơn 1.000 nhân viên thường xuyên tác nghiệp các nghiệp vụ quản lý,
            kinh doanh, sản xuất, cung ứng, hành chính, nhân sự, văn phòng,
            CNTT... bằng phương pháp truyền thống.
          </p>
        </div>
        <div className="mx-auto flex w-[896px] justify-between ">
          <p className="w-[420px] text-justify text-2xl leading-[140%]">
            HAHAHO đã tham gia triển khai dự án chuyển đổi số và tự động hóa các
            quy trình nghiệp vụ quản lý thuộc khối văn phòng tập đoàn, đặc biệt
            là quy trình quản lý văn bản trình ký tích hợp chữ ký số.
            <br />
            <strong>&#8226; Quy mô người dùng: 200 users </strong>
          </p>
          <Image
            alt="THACO"
            src="/images/mailinh2.png"
            width={420}
            height={230}
          />
        </div>
      </div>
    </>
  );
}
function HoaSen(props: ContentStory) {
  return (
    <>
      <div className="mx-auto w-[896px]">
        <div className="mb-16 flex items-center gap-8">
          <div className=" h-[30px] w-[320px] flex-1 bg-primary" />
          <div className=" flex items-baseline">
            <p className=" mx-2 text-[64px] font-bold text-primary ">2016</p>
            <p className=" mx-2 text-center text-[48px] font-bold uppercase text-black">
              Hoa sen group
            </p>
          </div>
        </div>
        <div className="flex justify-between ">
          <p className="w-[420px] text-justify text-2xl leading-[140%]">
            THACO là tập đoàn lớn hoạt động trong nhiều lĩnh vực, bao gồm nhiều
            công ty, phòng ban và văn phòng trải dài từ Bắc tới Nam, nên công
            tác quản lý văn bản trình ký phải qua nhiều cấp bậc và mất nhiều
            thời gian.
          </p>
          <Image
            alt="THACO"
            src="/images/hoasen1.png"
            width={440}
            height={230}
          />
        </div>
        <div className="flex justify-between">
          <Image
            alt="THACO"
            src="/images/hoasen2.png"
            width={420}
            height={230}
          />
          <p className="m-4 w-[420px] text-justify text-2xl leading-[140%]">
            HAHAHO đã tham gia triển khai dự án chuyển đổi số và tự động hóa các
            quy trình nghiệp vụ quản lý thuộc khối văn phòng tập đoàn, đặc biệt
            là quy trình quản lý văn bản trình ký tích hợp chữ ký số.
            <br />
            <strong>&#8226; Quy mô người dùng: 200 users </strong>
          </p>
        </div>
      </div>
    </>
  );
}


//button arrow

function NextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !-right-[60px] !h-[50px] !w-[50px] before:!content-[''] `}
      style={{ backgroundImage: "url(/images/right-arrow.png)" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
   const settings = {
     infinite: true,
     slidesToShow: 5,
     slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
   };
  return (
    <div
      className={`${className} !-left-[60px] !h-[50px] !w-[50px] before:!content-[''] `}
      style={{ backgroundImage: "url(/images/left-arrow.png)" }}
      onClick={onClick}
    />
  );
}
const ListStory = [
  { index: 1, component: <Thaco /> },
  { index: 2, component: <HoaSen /> },
  { index: 3, component: <DongTam /> },
  { index: 4, component: <MaiLinh /> },


];
type Props = {
  listStory: Customer[];
};


export default function CustomerStory(props: Props) {  
   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
   };
  return (
    <div className="my-16">
      <Slider {...settings} className="mx-auto h-fit w-[996px]">
        {ListStory.map((story) => (
          <div key={story.index} className="relative h-fit">
            {story.component}
          </div>
        ))}
      </Slider>
    </div>
  );} 

;



