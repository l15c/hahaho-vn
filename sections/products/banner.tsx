"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { MotionContainer, varFade } from "@/components/animate";

export default function Banner() {
  return (
    <MotionContainer>
      <section className="relative mx-auto h-[300px] max-w-[1920px] bg-[#484848]/[.45]">
        <div className="absolute h-full w-full bg-[#484848]/[.70]" />
        <Image
          priority={true}
          alt="Đối tác công nghệ"
          src="/images/background/san-pham.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[300px] w-full bg-[#484848]/[.70] object-fill"
        />
        <div className="absolute inset-0 grid h-full w-full text-white">
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="inset-0 m-auto text-4xl font-bold uppercase"
          >
            Sản phẩm
          </m.p>
        </div>
      </section>
    </MotionContainer>
  );
}
