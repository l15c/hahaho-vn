import MotionLazyContainer from "@/components/animate/MotionLazyContainer";
import "./globals.css";
import { Roboto } from "next/font/google";
// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["vietnamese"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${roboto.className} flex min-h-screen flex-col`}>
        <MotionLazyContainer>{children}</MotionLazyContainer>
      </body>
    </html>
  );
}
