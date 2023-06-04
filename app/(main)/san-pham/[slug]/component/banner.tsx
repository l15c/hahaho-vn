'use client';

import { MotionContainer, varFade } from '@/components/animate';
import Image from 'next/image';
import { m } from 'framer-motion';
import Link from "next/link";
import html from "@/utils/html-parser";

type Props = {
  color: string;
  name: string;
  title: string;
  demoUrl: string;
  trialUrl: string;
  description: string;
  imageUrl: string;
};
export default function ProductBanner({
  color,
  name,
  title,
  demoUrl,
  trialUrl,
  description,
  imageUrl,
}: Partial<Props>) {
  return (
    <MotionContainer>
      <section className="relative mx-auto h-[500px] max-w-[1920px] lg:h-[624px] overflow-hidden">
        <div
          className="absolute h-full w-full"
          style={{
            background: `linear-gradient(89.2deg, ${color} 23.48%, rgba(0, 0, 0, 0) 100%)`,
          }}
        />
        <div className='absolute h-full w-full bg-[#fff]/[0.57] z-[-1]' />
        <Image
          alt={name!}
          src={imageUrl!}
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
          className="absolute right-0 z-[-2] h-full w-auto object-contain bg-blend-color"
        />
        <div className="absolute flex h-full w-full px-10 md:px-28">
          <div className="my-auto w-full text-white lg:w-1/2 mr-0 lg:mr-8">
            <m.p
              variants={varFade({ durationIn: 0.7 }).inLeft}
              className="text-4xl font-bold uppercase"
            >
              {name}
            </m.p>
            <m.p
              variants={varFade({ durationIn: 0.7 }).inLeft}
              className="mt-2 text-2xl font-medium uppercase"
            >
              {title}
            </m.p>
            <m.p variants={varFade({ durationIn: 0.7 }).inUp} className="mt-5 text-justify">
              {html(description!)}
            </m.p>
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
              src={imageUrl!}
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
