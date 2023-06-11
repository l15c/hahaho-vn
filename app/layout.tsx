import ToasterProvider from '@/app/providers/ToastProvider';
import MotionLazyContainer from '@/components/animate/MotionLazyContainer';
import { Roboto } from 'next/font/google';
import 'slick-carousel/slick/slick-theme.css';
// slick-carousel
import 'slick-carousel/slick/slick.css';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['vietnamese'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${roboto.className} flex min-h-screen flex-col`}>
        <ToasterProvider />
        <MotionLazyContainer>{children}</MotionLazyContainer>
      </body>
    </html>
  );
}
