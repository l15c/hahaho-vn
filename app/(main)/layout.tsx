import Footer from "./component/footer";
import Header from "./component/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="grow pt-[--header-desktop]">{children}</main>
      <Footer />
    </>
  );
}
