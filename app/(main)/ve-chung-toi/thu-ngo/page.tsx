import { Letter } from '@/sections/about-us/thu-ngo';
import pagesApi from '@/api/pages';
import Banner from '@/components/Banner';
import Markdown from '@/components/Markdown';
import Image from 'next/image';
import quoteSvg from '@/public/svg/quote.svg';
import watermark from '@/public/svg/watermark.svg';

export const metadata = {
  title: 'Thư ngỏ | HAHAHO',
  description: '',
};

export default async function Page() {
  const data = await pagesApi.openLetter();

  const { banner, content, signature, signer } = data.data;

  return (
    <>
      <Banner
        {...banner}
        height={368}
        classImage="absolute right-0 w-1/2 -z-[1]"
        classBg="bg-gradient-90 from-primary from-[57%] to-70%"
      />
      <div className="mx-auto mb-48 mt-20 max-w-[948px] text-2xl">
        <Image
          src={quoteSvg}
          alt="quote-svg"
          className="absolute -translate-x-full -translate-y-full"
        />
        <div className="relative flex flex-col gap-8 text-justify [&>p]:indent-8 [&>ul>li]:mb-1.5 [&>ul>li]:ml-4 [&>ul>li]:pl-4 [&>ul]:list-disc">
          <Markdown data={content} />
          <Image
            src={watermark}
            alt="watermark"
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <p className="text-right font-bold uppercase">
          CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ
        </p>
        <Image
          src={`/api${signature.url}`}
          alt="Sign"
          width={650}
          height={250}
          className="ml-auto translate-x-[18%]"
        />
        <p className="mr-24 text-right font-bold capitalize">{signer}</p>
      </div>
    </>
  );
}
