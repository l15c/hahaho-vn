"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { MotionContainer, varFade } from "@/components/animate";

export default function Banner() {
  return (
    <MotionContainer>
      <section className="relative mx-auto h-[300px] max-w-[1920px]">
        <Image
          priority={true}
          alt="Đối tác công nghệ"
          src="/images/background/doi-tac-cong-nghe.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[300px] w-full bg-[#484848]/[.70] object-fill"
        />
        <div className="absolute grid h-full w-full text-white inset-0">
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="m-auto text-4xl font-bold uppercase inset-0"
          >
            Đối tác công nghệ
          </m.p>
        </div>
      </section>
    </MotionContainer>
  );
}
