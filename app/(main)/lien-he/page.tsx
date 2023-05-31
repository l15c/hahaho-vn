import Image from "next/image";
import FormContact from "@/app/(main)/component/footer/form-contact";

export const metadata = {
  title: "Liên hệ | HAHAHO",
  description: "",
};

export default function Page() {
  return (
    <div className="relative mx-auto h-[884px] max-w-[1920px]">
      <div className="absolute h-full w-full bg-[#D9D9D9]/[.25]" />
      <Image
        src="/images/background/lien-he.png"
        alt="Background liên hệ"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full object-fill"
      />
      <div className="absolute left-1/2 top-1/2 min-w-[600px] -translate-x-1/2 -translate-y-1/2 bg-white">
        <FormContact />
      </div>
    </div>
  );
}
