"use client";

import Image from "next/image";
import Slider from "react-slick";

const LOGO = [
  "BTTM.png",
  "CNS.png",
  "dai-quang-minh.png",
  "dong-tam.png",
  "hoa-sen.png",
  "mai-linh.png",
];

export default function TypicalCustomers() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
