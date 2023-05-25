"use client";

import Link from "next/link";
import Logo from "./logo";
import { HEADER } from "@/config-global";
import useOffSetTop from "@/hooks/useOffSetTop";

const HEADER_MENU = [
  {
    title: "Về chúng tôi",
    href: "#",
    menu: [
      { label: "Thư ngỏ", href: "#thu-ngo" },
      { label: "Hành trình phát triển", href: "#hanh-trinh" },
      { label: "Đội ngũ lãnh đạo", href: "#lanh-dao" },
    ],
  },
  {
    title: "Khách hàng & đối tác",
    href: "#",
    menu: [
      { label: "Khách hàng tiêu biểu", href: "#khach-hang" },
      { label: "Đối tác công nghệ", href: "#doi-tac" },
    ],
  },
  {
    title: "Sản phẩm",
    href: "#",
  },
  {
    title: "Quy trình dịch vụ & hợp tác",
    href: "#",
  },
  {
    title: "Tin tức",
    href: "#",
    menu: [
      { label: "Tin HAHAHO", href: "#" },
      { label: "Sự kiện", href: "#" },
      { label: "Thông cáo báo chí", href: "#" },
      { label: "Newsletter", href: "#" },
    ],
  },
  {
    title: "Liên hệ ",
    href: "#",
  },
];

export default function Header() {
  const isOffset = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <header
      className={`fixed w-full bg-white h-${HEADER.H_MOBILE} ${
        isOffset
          ? `shadow-lg md:h-${HEADER.H_DESKTOP_OFFSET}`
          : `md:h-${HEADER.H_DESKTOP}`
      } transition-all`}
    >
      <div
        className={`h-full max-w-[1440px] mx-auto lg:px-12 
        flex items-center justify-between 
         `}
      >
        {/* Site branding */}
        <div className="shrink-0 mr-9 h-14">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className=" md:flex md:grow justify-between">
          {HEADER_MENU.map((item) => (
            <div key={item.title} className="group relative">
              <Link href={item.href}>
                <p className=" uppercase items-center py-2">{item.title}</p>
              </Link>
              {item.menu && (
                <ul
                  className="
                    invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 absolute left-0 bg-primary-main text-white w-max p-1 transition ease-in duration-200
                   "
                >
                  {item.menu.map((menu) => (
                    <Link key={menu.label} href={menu.href}>
                      <li className="px-1 py-3">{menu.label}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
