"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { MotionContainer, varFade } from "@/components/animate";

export default function Banner() {
  return (
    <section className="relative mx-auto h-[300px] max-w-[1920px]">
      <MotionContainer>
        <div className="absolute h-full w-full bg-[#484848]/[.70]" />
        <Image
          alt="Hành trình phát triển"
          src="/images/background/hanh-trinh-phat-trien.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[300px] w-full object-fill"
        />
        <div className="absolute inset-0 grid h-full w-full text-center text-white">
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="m-auto text-5xl font-bold uppercase"
          >
            Hành trình phát triển của HAHAHO
          </m.p>
        </div>
      </MotionContainer>
    </section>
  );
}
