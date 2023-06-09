'use client';

import { MotionContainer, varFade } from '@/components/animate';
import { Banner } from '@/types/component';
import { m } from 'framer-motion';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props extends Banner {
  height?: number;
  classBg?: string;
  classImage?: string;
}

export default function Banner({
  title,
  image,
  height = 300,
  classBg,
  classImage = 'mix-blend-soft-light',
}: Props) {
  return (
    <MotionContainer>
      <section className="relative mx-auto max-w-[1920px]" style={{ height }}>
        <div
          className={twMerge('absolute h-full w-full bg-[#484848]', classBg)}
        />
        <Image
          alt={image.alternativeText || `Banner ${title}`}
          src={`/api${image.url}`}
          width={0}
          height={0}
          priority
          sizes="100vw"
          className={twMerge('h-full w-full object-fill', classImage)}
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
