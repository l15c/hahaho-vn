"use client";

import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";

const LOGO = [
  "vnpt.png",
  "hpt.png",
  "sao-bac-dau.png",
  "ctin.png",
  "viettel.png",
  "lever.png",
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

export default function TechnologyPartner() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="my-18 max-w-none">
      <div className="h-[100px] w-full bg-[#f8f8f9] text-center text-4xl font-bold uppercase leading-[100px] text-primary">
        Đối tác công nghệ
      </div>

      <Slider {...settings} className="mx-auto my-24 max-w-[1000px]">
        {LOGO.map((url) => (
          <div key={url} className="relative h-24">
            <Image
              alt="Logo"
              src={`/logo/partners/${url}`}
              width={0}
              height={0}
              sizes="100vh"
              className="mx-auto h-full w-auto object-scale-down"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
