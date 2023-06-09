import pagesApi from "@/api/pages";
import { Slider, TechnologyPartner } from "@/sections/homepage";
import Banner from '@/components/Banner';

export const metadata = {
  title: "Đối tác công nghệ | HAHAHO",
  description: "",
};

export default async function Page() {
  const res = await pagesApi.parnersPage();

  const {
    banner,
    logo
  }= res.data
  return (
    <>
      <Banner {...banner} />
      <Slider listLogo={logo} />
    </>
  );
}
