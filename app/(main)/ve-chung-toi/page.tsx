import { PATH } from "@/routes/path";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Về chúng tôi | HAHAHO",
  description: "",
};

export default function AboutUs() {
  redirect(PATH.aboutUs.thuNgo);
}
