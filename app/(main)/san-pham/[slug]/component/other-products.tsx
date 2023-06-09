'use client';

import { Product } from '@/types/collection';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { CustomArrowProps } from 'react-slick';

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

type Props = {
  color: string;
  products: Product[];
};
export default function OtherProducts({ color, products }: Props) {
  const settings = {
    infinite: true,
    slidesToShow: products.length < 3 ? products.length : 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow color={color} />,
    prevArrow: <PrevArrow color={color} />,
  };
  return (
    <section className="my-18 max-w-none">
      <Slider
        {...settings}
        className="[& .slick-slide > div]:mx-auto mx-auto my-24 max-w-[1000px]"
      >
        {products.map(({ color, title, slug, logo, banner: { name } }) => {
          const _name = name.split('Phần mềm quản lý ').pop() ?? '';
          return (
            <div className="flex">
              <Link
                key={slug}
                href={`/san-pham${slug}`}
                className="group mx-auto block w-fit"
              >
                <div
                  className="relative mx-auto h-36 w-36 rounded-[20px]"
                  style={{ backgroundColor: color }}
                >
                  <Image
                    alt="Logo"
                    priority
                    src={`/api${logo.url}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-36 w-36 rounded-[20px] bg-[#636366] p-6 group-hover:bg-inherit"
                  />
                </div>

                <div style={{ color }}>
                  <p className="mx-auto mt-4 w-[200px] text-center font-bold uppercase text-black group-hover:text-inherit">
                    {title}
                  </p>
                  <p className="mx-auto mt-2 w-[200px] text-center text-black group-hover:text-inherit">
                    {name.includes('Phần mềm quản lý') && (
                      <>
                        Phần mềm quản lý
                        <br />
                      </>
                    )}
                    {_name}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
