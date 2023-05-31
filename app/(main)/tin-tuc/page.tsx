import {redirect} from "next/navigation";
import {PATH} from "@/routes/path";

export const metadata = {
  title: "Tin tức | HAHAHO",
  description: "",
};

export default function Page() {
  redirect(PATH.news.hahaho)
}
