'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { MotionContainer, varFade } from '@/components/animate';
type Props = {
  bannerData: object;
  height: number;
}

export default function Banner({ bannerData, height }: Props) {
  return (
    <MotionContainer>
      <section
        className="relative mx-auto  max-w-[1920px]"
        style={{ height: height }}
      >
        <div className="absolute h-full w-full bg-[#484848]" />
        <Image
          alt="Banner đội ngũ lãnh đạo"
          src="/images/lanh-dao/banner.png"
          width={0}
          height={0}
          priority
          sizes="100vw"
          className="h-full w-full object-fill mix-blend-soft-light"
        />
        <div className="absolute top-0 grid h-full w-full text-white">
          <m.p
            variants={varFade({ durationIn: 0.7 }).inDown}
            className="m-auto text-4xl font-bold uppercase"
          >
            Đội ngũ lãnh đạo
          </m.p>
        </div>
      </section>
    </MotionContainer>
  );
}
