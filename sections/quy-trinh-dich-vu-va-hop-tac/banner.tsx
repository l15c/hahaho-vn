"use client";

import Image from "next/image";
import { MotionContainer, varFade } from "@/components/animate";

export default function Banner() {
  return (
    <section className="relative mx-auto h-[300px] max-w-[1920px] ">
      <MotionContainer>
        <div className="absolute h-full w-full bg-[#484848]/[.70]" />
        <Image
          priority={true}
          alt="Quy trình dịch vụ và hợp tác"
          src="/images/background/quy-trinh-dich-vu-va-hop-tac.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[300px] w-full bg-[#484848]/[.70] object-fill"
        />
      </MotionContainer>
    </section>
  );
}
