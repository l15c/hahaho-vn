'use client';

import Logo from '../logo';
import useOffSetTop from '@/hooks/useOffSetTop';
import Item from './Item';
import { PATH } from '@/routes/path';

const HEADER_MENU = [
  {
    title: 'Về chúng tôi',
    href: PATH.aboutUs.root,
    menu: [
      { label: 'Thư ngỏ', href: PATH.aboutUs.thuNgo },
      {
        label: 'Hành trình phát triển',
        href: PATH.aboutUs.hanhTrinh,
      },
      { label: 'Đội ngũ lãnh đạo', href: PATH.aboutUs.lanhDao },
    ],
  },
  {
    title: 'Khách hàng & đối tác',
    href: PATH.customer.root,
    menu: [
      { label: 'Khách hàng tiêu biểu', href: PATH.customer.tieuBieu },
      { label: 'Đối tác công nghệ', href: PATH.customer.doiTac },
    ],
  },
  {
    title: 'Sản phẩm',
    href: PATH.products.root,
  },
  {
    title: 'Quy trình dịch vụ & hợp tác',
    href: PATH.quyTrinh.root,
  },
  {
    title: 'Tin tức',
    href: PATH.news.root,
    menu: [
      { label: 'Tin HAHAHO', href: PATH.news.hahaho },
      { label: 'Sự kiện', href: PATH.news.suKien },
      { label: 'Thông cáo báo chí', href: PATH.news.thongCao },
      { label: 'Newsletter', href: PATH.news.newsletter },
    ],
  },
  {
    title: 'Liên hệ ',
    href: PATH.contact.root,
  },
];

export default function Header() {
  const isOffset = useOffSetTop(96);

  return (
    <header
      className={`fixed z-50 h-[--header-mobile] w-full bg-white ${
        isOffset
          ? `shadow-lg md:h-[--header-desktop-offset]`
          : `md:h-[--header-desktop]`
      } transition-all`}
    >
      <div
        className={`mx-auto flex h-full max-w-[1440px] 
        items-center justify-between lg:px-12 
         `}
      >
        {/* Site branding */}
        <div className="mr-9 h-14 shrink-0">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className=" justify-between md:flex md:grow">
          {HEADER_MENU.map((item) => (
            <Item key={item.href} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
