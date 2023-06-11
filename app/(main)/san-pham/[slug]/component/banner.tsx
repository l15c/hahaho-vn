'use client';

import { MotionContainer, varFade } from '@/components/animate';
import Markdown from '@/components/Markdown';
import { ProductBanner as Banner } from '@/types/component';
import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends Banner {
  title: string;
  color: string;
}

export default function ProductBanner({
  color,
  name,
  title,
  demoUrl,
  trialUrl,
  description,
  image,
}: Props) {
  return (
    <MotionContainer>
      <section className="relative mx-auto h-[500px] max-w-[1920px] overflow-hidden lg:h-[624px]">
        <div
          className="absolute h-full w-full"
          style={{
            background: `linear-gradient(89.2deg, ${color} 23.48%, rgba(0, 0, 0, 0) 100%)`,
          }}
        />
        <div className="absolute z-[-1] h-full w-full bg-[#fff]/[0.57]" />
        <Image
          alt={name}
          src={`/api${image.url}`}
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="absolute right-0 z-[-2] h-full w-auto object-contain bg-blend-color"
        />
        <div className="absolute flex h-full w-full px-10 md:px-28">
          <div className="my-auto mr-0 w-full text-white lg:mr-16 lg:w-1/2">
            <m.p
              variants={varFade({ durationIn: 0.7 }).inLeft}
              className="text-4xl font-bold uppercase"
            >
              {title}
            </m.p>
            <m.p
              variants={varFade({ durationIn: 0.7 }).inLeft}
              className="mt-2 text-2xl font-medium uppercase"
            >
              {name}
            </m.p>
            <m.div
              variants={varFade({ durationIn: 0.7 }).inUp}
              className="mt-5 text-justify"
            >
              <Markdown data={description} />
            </m.div>
            <div className="mt-4 flex gap-4 md:mt-9">
              <Link href={demoUrl!}>
                <m.button
                  variants={varFade({ durationIn: 1 }).in}
                  className="btn-primary btn h-11 w-[148px] rounded-[50px] border-none bg-white text-sm font-bold uppercase hover:bg-white hover:brightness-90"
                  style={{ color }}
                >
                  Live-Demo
                </m.button>
              </Link>
              <Link href={trialUrl!}>
                <m.button
                  variants={varFade({ durationIn: 1 }).in}
                  className="btn-primary btn h-11 w-[148px] rounded-[50px] border-none bg-white text-sm font-bold uppercase hover:bg-white hover:brightness-90"
                  style={{ color }}
                >
                  Dùng thử
                </m.button>
              </Link>
            </div>
          </div>
          <div className="my-auto hidden w-1/2 lg:block">
            <Image
              src={`/api${image.url}`}
              alt={name!}
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-auto w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </MotionContainer>
  );
}
