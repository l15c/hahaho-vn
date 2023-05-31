"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { MotionContainer, varFade } from "@/components/animate";

export default function Banner() {
  return (
    <section className="max-w-[1920px] mx-auto relative h-[462px]">
      <MotionContainer>
        <div
          className="absolute h-full w-full"
          style={{
            background:
              "linear-gradient(96.79deg, #F05A32 53%, rgba(240, 90, 50, 0) 80%",
          }}
        />
        <Image
          alt="Homepage"
          src="/images/background/homepage.png"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-0 z-[-1] h-full w-1/2"
        />
        <div className="absolute grid h-full w-full px-[104px] py-28 text-white">
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="text-4xl font-bold uppercase"
          >
            CÔNG TY CỔ PHẦN CÔNG NGHỆ HỆ SINH THÁI SỐ HAHAHO
          </m.p>
          <m.p
            variants={varFade({ durationIn: 0.7 }).inLeft}
            className="mt-3 text-2xl font-medium uppercase"
          >
            HAHAHO DIGITAL ECOSYSTEMS TECHNOLOGY JOINT STOCK COMPANY
          </m.p>
          <m.p
            variants={varFade({ durationIn: 0.7 }).inUp}
            className="mt-5 max-w-[780px]"
          >
            HAHAHO là đơn vị tiên phong phát triển nền tảng chuyển đổi số iBPM
            và các giải pháp inBusiness đáp ứng nhu cầu quản lý và lãnh đạo của
            doanh nghiệp Việt Nam.
          </m.p>
          <m.label
            variants={varFade({ durationIn: 1 }).in}
            htmlFor="btn-contact"
            className=" btn-primary btn mt-9 h-11 w-[148px] rounded-[50px] bg-white text-sm font-bold uppercase text-primary hover:bg-white hover:brightness-90"
          >
            Liên hệ ngay
          </m.label>
        </div>
      </MotionContainer>
    </section>
  );
}
