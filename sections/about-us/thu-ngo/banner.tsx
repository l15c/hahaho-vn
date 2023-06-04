'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { MotionContainer, varFade } from '@/components/animate';

export default function Banner() {
  return (
    <MotionContainer>
      <section className="relative mx-auto h-[368px] max-w-[1920px]">
        <div
          className="absolute h-full w-full"
          style={{
            background:
              'linear-gradient(90deg, #F05A32 57%, rgba(240, 90, 50, 0) 70%',
          }}
        />
        <Image
          alt="Thư ngỏ"
          src="/images/background/thu-ngo.png"
          width={0}
          height={0}
          priority
          sizes="100vw"
          className="absolute right-0 z-[-1] h-full w-1/2 object-fill"
        />
        <div className="absolute grid h-full w-full text-white">
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="m-auto text-4xl  font-bold uppercase"
          >
            Thư ngỏ
          </m.p>
        </div>
      </section>
    </MotionContainer>
  );
}
