"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { MotionContainer, varFade } from "@/components/animate";

export default function Banner() {
  return (
    <section className="relative mx-auto h-[300px] max-w-[1920px] ">
      <MotionContainer>
        <div className="absolute h-full w-full bg-[#484848]/[.45]" />
        <Image
          alt="Khách hàng tiêu biểu"
          src="/images/background/khach-hang-tieu-bieu.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[300px] w-full bg-[#484848]/[.70] object-fill"
        />
      </MotionContainer>
    </section>
  );
}
