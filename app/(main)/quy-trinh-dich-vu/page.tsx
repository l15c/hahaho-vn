import { Banner } from "@/sections/quy-trinh-dich-vu-va-hop-tac";
import TabDichVuVaHopTac from "@/sections/quy-trinh-dich-vu-va-hop-tac/tab-dich-vu-va-hop-tac";

export const metadata = {
  title: "Quy trình dịch vụ | HAHAHO",
  description: "",
};

export default function Page() {
  return (
    <section className="mb-24">
      <Banner />
      <TabDichVuVaHopTac/>
    </section>
  );
}
