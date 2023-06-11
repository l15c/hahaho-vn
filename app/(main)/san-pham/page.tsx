import pagesApi from '@/api/pages';
import { Products } from '@/sections/homepage';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'Sản phẩm | HAHAHO',
  description: '',
};

export default async function Page() {
  const res = await pagesApi.productPage();
  const { banner, productInbusinesses, productPlatform } = res.data;
  return (
    <>
      <Banner {...banner} />
      <div className="mx-auto mt-8 max-w-[896px] pb-32 pt-0">
        <Products
          productInbusiness={productInbusinesses}
          productPlatform={productPlatform}
        />
      </div>
    </>
  );
}
