'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { MotionContainer, varFade } from '@/components/animate';
import { ProductBanner } from '@/types/component';

type Prop = ProductBanner & { title: string };

export default function Banner({ title, name, description, image }: Prop) {
  return (
    <section className="relative mx-auto h-[462px] max-w-[1920px]">
      <MotionContainer>
        <div
          className="absolute h-full w-full"
          style={{
            background:
              'linear-gradient(96.79deg, #F05A32 53%, rgba(240, 90, 50, 0) 80%',
          }}
        />
        <Image
          alt="Homepage"
          src={`/api${image.url}`}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-0 z-[-1] h-full w-1/2"
        />
        <div className="absolute grid h-full w-full px-[104px] py-28 text-white">
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="text-4xl font-bold uppercase"
          >
            {title}
          </m.p>
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="mt-3 text-2xl font-medium uppercase"
          >
            {name}
          </m.p>
          <m.p
            variants={varFade({ durationIn: 0.7 }).inUp}
            className="mt-5 max-w-[780px]"
          >
            {description}
          </m.p>
          <m.label
            variants={varFade({ durationIn: 1 }).in}
            htmlFor="btn-contact"
            className=" btn-primary btn mt-9 h-11 w-[148px] rounded-[50px] bg-white text-sm font-bold uppercase text-primary hover:bg-white hover:brightness-90"
          >
            Liên hệ ngay
          </m.label>
        </div>
      </MotionContainer>
    </section>
  );
}
