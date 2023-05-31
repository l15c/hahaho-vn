import { PATH } from "@/routes/path";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Khách hàng & đối tác | HAHAHO",
  description: "",
};

export default function Page() {
  redirect(PATH.customer.tieuBieu);
}
