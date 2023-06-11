'use client';

import DynamicZoneRenderer from '@/components/dynamicZoneRenderer';
import { Customer } from '@/types/collection';
import Slider, { CustomArrowProps } from 'react-slick';

function NextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !-right-[60px] !h-[50px] !w-[50px] before:!content-[''] `}
      style={{ backgroundImage: 'url(/images/right-arrow.png)' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !-left-[60px] !h-[50px] !w-[50px] before:!content-[''] `}
      style={{ backgroundImage: 'url(/images/left-arrow.png)' }}
      onClick={onClick}
    />
  );
}

type Props = {
  listStory: Customer[];
};

const classStyle = 'col-span-full w-full h-full object-cover pb-4';

export default function CustomerStory({ listStory }: Props) {
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
      <Slider {...settings} className="mx-auto h-fit w-[996px] ">
        {listStory.map((customer) => (
          <>
            <div className="mx-auto w-[896px] ">
              <div
                className={`mb-16 flex items-center gap-6 ${
                  customer.id % 2 == 0 ?? 'flex-wrap-reverse'
                }`}
              >
                <div className="h-[30px] w-[320px] flex-1 bg-primary" />
                <div
                  className={` flex items-baseline ${
                    customer.id % 2 == 0 ?? 'flex-wrap-reverse'
                  }`}
                >
                  <p className="mx-2 text-[64px] font-bold text-primary ">
                    {customer.year}
                  </p>
                  <p className="text-center text-[48px] font-bold uppercase text-black">
                    {customer.name}
                  </p>
                </div>
              </div>
              <div className="mx-auto grid w-[896px]  grid-cols-2 gap-4">
                {customer.contents.map((item, index) =>
                  customer.contents.length - 1 === index && index % 2 === 0
                    ? DynamicZoneRenderer(item, classStyle)
                    : DynamicZoneRenderer(item)
                )}
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}
