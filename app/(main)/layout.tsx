import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { HEADER } from "@/config-global";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={`container grow mx-auto pt-[--header-desktop]`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
