import Link from "next/link";
import Logo from "../logo";
import Image from "next/image";
import Script from "next/script";
import BannerFooter from "./banner-footer";
import { PATH } from "@/routes/path";

const FOOTER = [
  {
    title: "Về chúng tôi",
    href: PATH.aboutUs.root,
    items: [
      { label: "Thư ngỏ", href: PATH.aboutUs.thuNgo },
      {
        label: "Hành trình phát triển",
        href: PATH.aboutUs.hanhTrinh,
      },
      { label: "Đội ngũ lãnh đạo", href: PATH.aboutUs.lanhDao },
    ],
  },
  {
    title: "Khách hàng & đối tác",
    href: PATH.customer.root,
    items: [
      { label: "Khách hàng tiêu biểu", href: PATH.customer.tieuBieu },
      { label: "Đối tác công nghệ", href: PATH.customer.doiTac },
    ],
  },
  {
    title: "Sản phẩm",
    href: PATH.products.root,
  },
  {
    title: "Quy trình dịch vụ & hợp tác",
    href: PATH.quyTrinh.root,
  },
  {
    title: "Tin tức",
    href: PATH.news.root,
    items: [
      { label: "Tin HAHAHO", href: PATH.news.hahaho },
      { label: "Sự kiện", href: PATH.news.suKien },
      { label: "Thông cáo báo chí", href: PATH.news.thongCao },
      { label: "Newsletter", href: PATH.news.newsletter },
    ],
  },
  {
    title: "Liên hệ",
    href: PATH.contact.root,
  },
];

export default function Footer() {
  return (
    <>
      <div id="fb-root"/>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0"
        nonce="iCdHa59O"
      ></Script>
      <footer >
        <BannerFooter />
        <div className="px-14 mx-auto w-full max-w-[1440px]">
          <div className="my-8 grid grid-cols-12">
            <div className="col-span-12 grid gap-2 lg:col-span-8">
              <div className="h-24 w-fit">
                <Logo />
              </div>
              <div className="grid gap-5 text-lg">
                <p>
                  <span className="font-bold text-primary">
                    Trụ sở chính:&nbsp;
                  </span>
                  Số 11A Hồng Hà, Phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh
                </p>
                <p>
                  <span className="font-bold text-primary">
                    Xưởng sản xuất, dịch vụ:&nbsp;
                  </span>
                  A75/6K/16 Bạch Đằng, Phường 2, Quận Tân Bình, Thành phố Hồ Chí
                  Minh
                </p>
                <p>
                  <span className="font-bold text-primary">Hotline: </span>
                  <Link href="tel:+842873034668">028 7303 4668</Link>
                </p>
                <p>
                  <span className="font-bold text-primary">Email: </span>
                  <Link href="mailto:info@hahaho.vn">info@hahaho.vn</Link>
                </p>
              </div>
              <div className="mt-6 flex gap-5">
                <Link
                  href="https://www.linkedin.com/company/hahaho-jsc/mycompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="LinkedIn"
                    src="/socials/linkedin.svg"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/hahaho.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="Facebook"
                    src="/socials/facebook.svg"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="https://zalo.me/2838016898950139714"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="Zalo"
                    src="/socials/zalo.svg"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="ml-auto flex h-full w-full">
                <div
                  className="fb-page ml-auto"
                  data-href="https://www.facebook.com/hahaho.vn"
                  data-show-posts="true"
                  data-width="380"
                  data-height="320"
                  data-small-header="false"
                  data-adapt-container-width="false"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/hahaho.vn"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/hahaho.vn" />
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20 grid grid-cols-12 gap-4">
            <div className="col-span-8 md:col-span-4 lg:col-span-2">
              <h6 className="mb-4 text-lg font-bold uppercase text-primary">
                {FOOTER[0].title}
              </h6>
              {FOOTER[0]?.items && (
                <ul className="text-sm">
                  {FOOTER[0].items.map((item) => (
                    <li key={item.label} className="mb-4 text-base">
                      <Link
                        href={item.href}
                        className="transition duration-150 ease-in-out"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-3">
              <h6 className="mb-4 text-lg font-bold uppercase text-primary">
                {FOOTER[1].title}
              </h6>
              {FOOTER[1]?.items && (
                <ul className="text-sm">
                  {FOOTER[1].items.map((item) => (
                    <li key={item.label} className="mb-4 text-base">
                      <Link
                        href={item.href}
                        className="transition duration-150 ease-in-out"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-2">
              <h6 className="mb-4 text-lg font-bold uppercase text-primary">
                {FOOTER[2].title}
              </h6>
              {FOOTER[2]?.items && (
                <ul className="text-sm">
                  {FOOTER[2].items.map((item) => (
                    <li key={item.label} className="mb-4 text-base">
                      <Link
                        href={item.href}
                        className="transition duration-150 ease-in-out"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-3">
              <h6 className="mb-4 text-lg font-bold uppercase text-primary">
                {FOOTER[3].title}
              </h6>
              {FOOTER[3]?.items && (
                <ul className="text-sm">
                  {FOOTER[3].items.map((item) => (
                    <li key={item.label} className="mb-4 text-base">
                      <Link
                        href={item.href}
                        className="transition duration-150 ease-in-out"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-span-8 md:col-span-4 lg:col-span-2">
              <h6 className="mb-4 text-lg font-bold uppercase text-primary">
                {FOOTER[4].title}
              </h6>
              {FOOTER[4]?.items && (
                <ul className="text-sm">
                  {FOOTER[4].items.map((item) => (
                    <li key={item.label} className="mb-4 text-base">
                      <Link
                        href={item.href}
                        className="transition duration-150 ease-in-out"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// {FOOTER.map((block) => (
//   <div
//     key={block.title}
//     className="col-span-8 md:col-span-4 lg:col-span-2"
//   >
//     <h6 className="font-bold mb-4 uppercase text-lg text-primary">
//       {block.title}
//     </h6>
//     {block?.items && (
//       <ul className="text-sm">
//         {block.items.map((item) => (
//           <li key={item.label} className="mb-4 text-base">
//             <Link
//               href={item.href}
//               className="transition duration-150 ease-in-out"
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// ))}
