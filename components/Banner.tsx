'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { MotionContainer, varFade } from '@/components/animate';
import { Banner } from '@/types/component';

export default function Banner({ title, image }: Banner) {
  return (
    <MotionContainer>
      <section className="relative mx-auto h-[300px] max-w-[1920px]">
        <div className="absolute h-full w-full bg-[#484848]" />
        <Image
          alt={image.alternativeText || `Banner ${title}`}
          src={`/api${image.url}`}
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
            {title}
          </m.p>
        </div>
      </section>
    </MotionContainer>
  );
}
