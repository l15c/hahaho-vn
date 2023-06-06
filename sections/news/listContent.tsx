'use client'

import {  usePathname } from "next/navigation";
import Link from 'next/link';

type Props = {};
const listPage = [
  { name: "Tin HAHAHO", link: "/tin-tuc/tin-hahaho" },
  { name: "Sự Kiện", link: "/tin-tuc/su-kien" },
  { name: "Thông cáo báo chí", link: "/tin-tuc/thong-cao-bao-chi" },
  { name: "Newsletter", link: "/tin-tuc/newsletter" },
];
const ListContent = (props: Props) => {
 const pathname = usePathname();
  const currentPage =listPage.filter((item) => item.link === pathname);

  return (
    <>
      <div className="relative mx-auto mt-8 grid w-[1116px] grid-cols-2 place-content-between ">
        <div className="dropdown ">
          <input
            type="text"
            className="group h-14 w-[350px] max-w-xs rounded-md border-2 border-primary p-4 pr-2 text-2xl  "
            value={currentPage[0].name}
            style={{
              background:
                "url('/assets/arrowIcon.svg') no-repeat right 10px center",
            }}
          />
          <ul
            tabIndex={0}
            className="dropdown-content menu flex h-60 w-[320px] flex-col justify-around rounded-md border-[2px] border-primary bg-base-100 text-black !opacity-100"
          >
            {listPage.map((item, index) => (
              <li
                key={index}
                className="group menu-title flex h-14 text-left align-middle text-black !opacity-100 hover:bg-primary hover:text-white"
              >
                <Link
                  href={item.link}
                  className=" my-auto text-2xl font-normal !opacity-100  group-hover:text-white "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid justify-items-end">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="group h-14 w-[350px] max-w-xs rounded-md border-2 border-primary p-4 pr-2 text-2xl placeholder:italic"
            style={{
              background:
                "url('/assets/searchIcon.svg') no-repeat right 10px center",
            }}
          />
        </div>
      </div>
      <div className="mb-36 grid h-[500px] w-full place-items-center ">
        <p className=" text-5xl font-bold text-black opacity-30">
          Chưa có bài viết
        </p>
      </div>
    </>
  );
};

export default ListContent;
