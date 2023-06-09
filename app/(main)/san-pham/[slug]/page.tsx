import productApi from '@/api/product';
import OtherProducts from '@/app/(main)/san-pham/[slug]/component/other-products';
import Markdown from '@/components/Markdown';
import Image from 'next/image';
import Link from 'next/link';
import ProductBanner from './component/banner';

export const revalidate = 604800; // 7 days

export async function generateStaticParams() {
  const products = await productApi.getList();

  return products.data.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await productApi.getBySlug(params.slug);

  if (!data) return null;

  const {
    title,
    color,
    banner,
    description,
    features,
    featureImage,
    advantages,
  } = data;
  return (
    <div>
      <ProductBanner title={title} color={color} {...banner} />

      <div className="my-24 flex max-w-[1920px] items-center bg-[#F8F8F9]">
        <div
          className="px-0 py-6 text-center text-4xl leading-[140%] md:px-[240px]"
          style={{ color }}
        >
          <Markdown data={description} />
        </div>
      </div>

      {featureImage && (
        <div className="container relative mx-auto my-24 max-w-[726px]">
          <p
            className="mb-24 text-center text-4xl font-bold uppercase"
            style={{ color }}
          >
            Tính năng nổi bật
          </p>
          <Image
            src={`/api${featureImage.url}`}
            alt="Feature"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full"
          />
        </div>
      )}

      {/* Action */}
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

      <div className="container mx-auto mb-36 mt-24 flex max-w-[960px] flex-nowrap">
        {advantages.map((e, idx) => (
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
          <OtherProducts color={color} products={data.otherProducts} />
        </div>
      </div>
    </div>
  );
}
