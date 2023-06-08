"use client";

import {  Media } from "@/types/common";
import { GroupImage } from "@/types/collection";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";

const LOGO = [
  "BTTM.png",
  "CNS.png",
  "dai-quang-minh.png",
  "dong-tam.png",
  "hoa-sen.png",
  "mai-linh.png",
  "BVNK-Nam_SG.png",
  "PV-Drilling.png",
  "QTSC.png",
  "thaco.png",
  "vietsovpetro.png",
  "VNPT.png",
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

type Props = {
  listLogo: GroupImage;
};
 
export default function TypicalCustomers({listLogo}: Props ) {
  const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: listLogo?.images.length > 5 ? 5 : listLogo?.images.length,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="mt-8 max-w-none ">
      <Slider {...settings} className="mx-auto my-24 max-w-[1000px]">
        {listLogo.images.map((logo) => (
          <div key={logo.id} className="relative h-24">
            <Image
              alt="Logo"
              src={`/api${logo.url}`}
              width={0}
              height={0}
              sizes="100vh"
              className=" h-full w-auto mx-auto object-scale-down"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
