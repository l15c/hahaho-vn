import productApi from '@/api/product';
import Markdown from '@/components/Markdown';
import Image from 'next/image';
import Link from 'next/link';
import ProductBanner from '../[slug]/component/banner';
import OtherProducts from '../[slug]/component/other-products';
import Features from './features';

export default async function Page() {
  const data = await productApi.getBySlug('nen-tang-ibpm');

  if (!data) return null;

  const {
    title,
    color,
    banner,
    description,
    features = [],
    advantages,
    benefits,
    otherProducts,
  } = data;
  return (
    <div>
      <ProductBanner title={title} color={color} {...banner} />

      <div className="my-24 flex max-w-[1920px] items-center bg-[#F8F8F9]">
        <div className="mx-auto px-0 py-6 text-center text-4xl font-bold uppercase leading-[140%] text-primary md:px-[240px]">
          <Markdown data={description} />
        </div>
      </div>
      <div className="mx-auto mb-[150px] grid max-w-[1200px] grid-cols-6 gap-5">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className={`${
              (idx + 2) % 5 === 0 ? 'col-start-2' : ''
            } col-span-2 mx-auto h-[280px] rounded-[20px] bg-primary p-9 text-justify text-2xl text-white`}
          >
            <Image
              src="/svg/check.svg"
              alt="Check icon"
              width={35}
              height={35}
              className="mx-auto mb-4"
            />
            <Markdown data={item.content} />
          </div>
        ))}
      </div>

      <Features color={color} features={features} />

      <div className="flex justify-center gap-4">
        <Link href={banner.demoUrl}>
          <button className="btn h-11 w-[148px] rounded-[50px] border-none bg-[#636366] text-white hover:bg-[#636366] hover:brightness-90">
            Live Demo
          </button>
        </Link>
        <Link href={banner.trialUrl}>
          <button className="btn h-11 w-[148px] rounded-[50px] border-none bg-[#636366] text-white hover:bg-[#636366] hover:brightness-90">
            Dùng thử
          </button>
        </Link>

        <label
          htmlFor="btn-contact"
          className="btn h-11 w-[148px] rounded-[50px] border-none text-white hover:brightness-90"
          style={{ backgroundColor: color }}
        >
          Liên hệ tư vấn
        </label>
      </div>

      <div className="my-24 flex max-w-[1920px] items-center bg-[#F8F8F9]">
        <p className="mx-auto px-0 py-6 text-center text-4xl font-bold uppercase text-primary md:px-[240px]">
          Ưu điểm của nền tảng <span className="lowercase">i</span>BPM 2.0
        </p>
      </div>
      <div className="container mx-auto mb-36 mt-24 flex max-w-[960px] flex-nowrap">
        {advantages!.map((e, idx) => (
          <div key={idx} className="flex w-1/3 flex-col items-center">
            <Image
              src={`/api${e.image.url}`}
              alt="Description"
              width={200}
              height={200}
              className="fill-primary"
            />
            <div
              className="max-w-[225px] text-justify text-2xl"
              style={{ color }}
            >
              <Markdown data={e.content} />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-48 max-w-[1920px]">
          <p
            className="mb-24 w-full px-0 py-6 text-center text-4xl font-semibold uppercase"
            style={{ color }}
          >
            Các sản phẩm khác
          </p>
          <OtherProducts color={color} products={otherProducts} />
        </div>
      </div>
    </div>
  );
}
