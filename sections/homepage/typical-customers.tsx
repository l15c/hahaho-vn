"use client";

import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";

const LOGO = [
  "BTTM.png",
  "CNS.png",
  "dai-quang-minh.png",
  "dong-tam.png",
  "hoa-sen.png",
  "mai-linh.png",
];
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
  return (
    <div
      className={`${className} !-left-[60px] !h-[50px] !w-[50px] before:!content-[''] `}
      style={{ backgroundImage: "url(/images/left-arrow.png)" }}
      onClick={onClick}
    />
  );
}

export default function TypicalCustomers() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="mt-36 max-w-none">
      <div className="h-[100px] w-full bg-[#f8f8f9] text-center text-4xl font-bold uppercase leading-[100px] text-primary">
        Khách hàng tiêu biểu
      </div>

      <Slider {...settings} className="my-24 max-w-[1000px] mx-auto">
        {LOGO.map((url) => (
          <div key={url} className="relative h-24">
            <Image
              alt="Logo"
              src={`/logo/customers/${url}`}
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto h-full w-auto object-scale-down"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
