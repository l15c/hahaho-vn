"use client";

import {  Media } from "@/types/common";
import { GroupImage } from "@/types/collection";
import Image from "next/image";
import  SlickSlider ,{ CustomArrowProps } from "react-slick";

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
 
export default function Slider({listLogo}: Props ) {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    slidesToShow: listLogo?.images.length > 5 ? 5 : listLogo?.images.length,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: true,
  };
  return (
    <section className="mt-8 max-w-none ">
      <SlickSlider
        {...settings}
        className="mx-auto my-24 max-h-24 max-w-[1000px]"
      >
        {listLogo.images.map((logo) => (
          <div
            key={logo.id}
            className="relative mx-8 h-24 !w-fit max-w-[200px]"
          >
            <Image
              alt="Logo"
              src={`/api${logo.url}`}
              width={0}
              height={0}
              sizes="100vh"
              className=" align-center mx-auto h-full w-auto object-scale-down"
            />
          </div>
        ))}
      </SlickSlider>
    </section>
  );
}
