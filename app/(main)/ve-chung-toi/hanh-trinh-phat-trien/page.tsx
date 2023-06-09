import pagesApi from '@/api/pages';
import Banner from '@/components/Banner';
import Markdown from '@/components/Markdown';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export const metadata = {
  title: 'Hành trình phát triển | HAHAHO',
  description: '',
};

export default async function Page() {
  const data = await pagesApi.developmentJourney();
  const { banner, description, image, slogans, history } = data.data;
  return (
    <>
      <Banner {...banner} classBg="bg-[#484848]/[70]" />

      <div className="mx-auto mb-32 mt-20 max-w-[1040px]">
        <div className="flex">
          <div className="mr-8 h-full bg-primary px-3 py-1 text-center font-extrabold uppercase text-white">
            <p className="text-[56px] leading-none">
              {new Date().getFullYear() - 2005}
            </p>
            <p className="text-2xl">năm</p>
          </div>
          <p className="flex-grow text-justify text-2xl">{description}</p>
        </div>
        <div className="relative mb-14 mt-6 h-44 w-full">
          <div className="absolute h-full w-full bg-[#000]/[.14]" />
          <Image
            src={`/api${image.url}`}
            alt="Photo"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="h-full w-full"
          />
        </div>

        {/* */}
        <div className="grid grid-cols-3 items-baseline">
          {slogans.map((item) => (
            <div
              key={item.text}
              className="col-span-1 grid justify-center gap-4"
            >
              <Image
                src={`/api${item.image.url}`}
                alt={item.text || 'SVG'}
                width={0}
                height={0}
                className="mx-auto h-fit w-fit"
              />
              <p className="text-center text-4xl font-bold uppercase text-primary">
                {item.text}
              </p>
              <div className="mx-auto max-w-[240px] text-justify">
                <Markdown data={item.content} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Timeline */}
      <div className="mx-auto mb-32 max-w-[1040px]">
        <div className="flex h-20 bg-primary text-white">
          <p className="m-auto text-4xl font-bold uppercase">
            Lịch sử hình thành
          </p>
        </div>
        <div className="mb-10 mt-24 grid grid-cols-11 text-justify text-2xl leading-9">
          {history.map((item, idx) => (
            <div key={idx} className="contents">
              <div className="relative col-start-2 col-end-3 mx-auto">
                <div className="flex h-full w-6 items-center justify-center">
                  <div
                    className={twMerge(
                      'pointer-events-none h-full w-1',
                      idx !== history.length - 1 && 'bg-black'
                    )}
                  ></div>
                </div>
                <div className=" absolute top-0 flex text-center">
                  <div
                    className="relative my-auto mr-4 h-20 w-3 translate-x-1/2"
                    style={{ backgroundColor: item.color }}
                  >
                    <div
                      className="absolute left-[95%] top-1/2 h-0 w-0 -translate-y-1/2 border-8 border-transparent"
                      style={{ borderLeftColor: item.color }}
                    />
                  </div>
                  <p className="rotate-180 font-bold [writing-mode:vertical-rl]">
                    {item.period}
                  </p>
                </div>
              </div>
              <div className="col-start-4 col-end-11 mr-auto w-full ">
                {item?.logo && (
                  <Image
                    src={`/api${item.logo.url}`}
                    alt={item.period}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-10 w-fit"
                  />
                )}
                <div className="mb-8 w-full">
                  <Markdown data={item.content} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
