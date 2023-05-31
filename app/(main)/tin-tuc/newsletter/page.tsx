import {
  Banner,
  Introduce,
  Timeline,
} from "@/sections/about-us/hanh-trinh-phat-trien";

export const metadata = {
  title: "Newsletter | HAHAHO",
  description: "",
};

export default function Page() {
  return (
    <>
      <Banner />
      <Introduce />
      <Timeline />
    </>
  );
}
