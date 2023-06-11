import { Product } from '@/types/collection';
import Image from 'next/image';
import Link from 'next/link';

type PropProduct = {
  productPlatform: Product;
  productInbusiness: Product[];
};

export default function Products({
  productPlatform,
  productInbusiness,
}: PropProduct) {
  return (
    <section>
      <div className=" border-b-[3px] border-primary" />
      <div className="flex  text-center">
        <div className="mt-4 w-full flex-grow">
          <p className="text-4xl font-bold uppercase">
            {productPlatform.title}
          </p>
          <p className="px-14 pt-3 text-2xl uppercase">
            {productPlatform.banner.name}
          </p>
        </div>
        <div className="divider mx-1 my-0 h-auto w-1 bg-primary" />
        <div className="mt-4 w-full flex-grow">
          <p className="text-4xl font-bold">INBUSINESS</p>
          <p className="px-14 pt-3 text-2xl uppercase">
            Bộ phần mềm đóng gói quy trình doanh nghiệp
          </p>
        </div>
      </div>
      <div className="mt-10 flex text-center">
        <div className="w-full flex-grow">
          <Link
            href={`/san-pham/${productPlatform.slug}`}
            className="mx-auto block w-fit"
          >
            <div
              style={{
                backgroundColor: productPlatform.color,
              }}
              className={`relative mx-auto w-fit rounded-3xl p-8`}
            >
              <Image
                alt="Platform"
                src={`/api${productPlatform.logo.url}`}
                width={120}
                height={120}
              />
            </div>
          </Link>
        </div>
        <div className="w-full flex-grow">
          <div className="ml-4 grid grid-cols-2 gap-5">
            {productInbusiness.map((e) => (
              <Link
                key={e.slug}
                href={`/san-pham/${e.slug}`}
                className="mx-auto block w-fit"
              >
                <div style={{ color: e.color }}>
                  <div
                    className={`relative m-auto flex h-36 w-36 rounded-[20px] p-8`}
                    style={{ backgroundColor: e.color }}
                  >
                    <Image
                      alt={e.title}
                      src={`/api/${e.logo.url}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="m-auto h-auto w-auto"
                    />
                  </div>
                  <p className="mx-auto mt-4 font-bold uppercase">{e.title}</p>
                  <p className="mx-auto w-[132px]">
                    {e.banner.name}
                    <br />
                    {/* {e.title} */}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
