import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="Logo"
        src="/logo/4.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: "100%", width: "auto" }}
        priority
      />
    </Link>
  );
}
