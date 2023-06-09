import pagesApi from "@/api/pages";
import Banner from '@/components/Banner';
import TabDichVuVaHopTac from "@/sections/quy-trinh-dich-vu-va-hop-tac/tab-dich-vu-va-hop-tac";

export const metadata = {
  title: "Quy trình dịch vụ | HAHAHO",
  description: "",
};

export default async function Page() {
    const res = await pagesApi.flowPgae();
    const { banner, flows } = res.data;
  return (
    <section className="mb-24">
      <Banner {...banner} />
      <TabDichVuVaHopTac flows={flows}/>
    </section>
  );
}
