'use client';

import Image from 'next/image';
import Slider, { CustomArrowProps } from 'react-slick';
import Link from 'next/link';
import { PATH } from '@/routes/path';

function NextArrow(props: { color: string } & CustomArrowProps) {
  const { onClick, color } = props;
  return (
    <div
      className={`absolute -right-[60px] top-1/2 h-[36px] w-[36px] -translate-y-1/2 rotate-[135deg] cursor-pointer rounded-[4px] border-l-4 border-t-4 border-solid`}
      style={{ borderColor: color }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: { color: string } & CustomArrowProps) {
  const { color, onClick } = props;
  return (
    <div
      className="absolute -left-[60px] top-1/2 h-[36px] w-[36px] -translate-y-1/2 rotate-[-45deg] cursor-pointer rounded-[4px] border-l-4 border-t-4 border-solid"
      style={{ borderColor: color }}
      onClick={onClick}
    />
  );
}
type Item = {
  iconUrl: string;
  name: string;
  title: string;
  url: string;
  color: string;
};
type Props = {
  color: string;
  products: Item[];
};
export default function OtherProducts({ color, products }: Props) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow color={color} />,
    prevArrow: <PrevArrow color={color} />,
  };
  console.log(products);
  return (
    <section className="my-18 max-w-none">
      <Slider {...settings} className="mx-auto my-24 max-w-[1000px]">
        {products.map(({ color, iconUrl, name, title, url }) => {
          const _title = title.split('Phần mềm quản lý ').pop() ?? '';
          return (
            <Link
              key={url}
              href={url}
              className="group"

            >
              <div className="relative mx-auto h-36 w-36 rounded-[20px]" style={{ backgroundColor: color }}>
                <Image
                    alt="Logo"
                    priority
                    src={iconUrl}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className=" h-36 w-36 rounded-[20px] bg-[#636366] p-6 group-hover:bg-inherit"
                />
              </div>

              <div style={{ color }}>
                <p className="mx-auto mt-4 w-[200px] text-center font-bold uppercase text-black group-hover:text-inherit">
                  {name}
                </p>
                <p className="mx-auto mt-2 w-[200px] text-center text-black group-hover:text-inherit">
                  {url !== PATH.products.ibpm && (
                    <>
                      Phần mềm quản lý
                      <br />
                    </>
                  )}
                  {_title}
                </p>
              </div>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}
