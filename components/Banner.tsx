'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { MotionContainer, varFade } from '@/components/animate';

interface Props {
    title?:string;
    imageUrl:string;
}
export default function Banner({title,imageUrl}:Props) {
    return (
        <MotionContainer>
            <section className="relative mx-auto h-[300px] max-w-[1920px]">
                <div className="absolute h-full w-full bg-[#484848]" />
                <Image
                    alt={`Banner ${title}`}
                    src={`/api${imageUrl}`}
                    width={0}
                    height={0}
                    priority
                    sizes="100vw"
                    className="h-full w-full object-fill mix-blend-soft-light"
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
