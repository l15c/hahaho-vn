import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";

const FOOTER = [
  {
    title: "Về chúng tôi",
    items: [
      {
        label: "Thư ngỏ",
        href: "#0",
      },
      {
        label: "Hành trình phát triển",
        href: "#0",
      },
      {
        label: "Đội ngũ lãnh đạo",
        href: "#0",
      },
    ],
  },
  {
    title: "Khách hàng & đối tác",
    items: [
      {
        label: "Khách hàng tiêu biểu",
        href: "#0",
      },
      {
        label: "Đối tác công nghệ",
        href: "#0",
      },
    ],
  },
  {
    title: "Sản phẩm",
  },
  {
    title: "Quy trình dịch vụ & hợp tác",
  },
  {
    title: "Tin tức",
    items: [
      {
        label: "Tin HAHAHO",
        href: "#0",
      },
      {
        label: "Sự kiện",
        href: "#0",
      },
      {
        label: "Thông cáo báo chí",
        href: "#0",
      },
      {
        label: "Newsletter",
        href: "#0",
      },
    ],
  },
  {
    title: "Liên hệ",
  },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-14">
      <div className="grid grid-cols-12 my-8">
        <div className="col-span-12 lg:col-span-8 grid gap-2">
          <div className="h-24">
            <Logo />
          </div>
          <div className="grid gap-5 text-lg">
            <p>
              <span className="text-primary-main font-bold">
                Trụ sở chính:&nbsp;
              </span>
              Số 11A Hồng Hà, Phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh
            </p>
            <p>
              <span className="text-primary-main font-bold">
                Xưởng sản xuất, dịch vụ:&nbsp;
              </span>
              A75/6K/16 Bạch Đằng, Phường 2, Quận Tân Bình, Thành phố Hồ Chí
              Minh
            </p>
            <p>
              <span className="text-primary-main font-bold">Hotline: </span>
              <Link href="tel:+842873034668">028 7303 4668</Link>
            </p>
            <p>
              <span className="text-primary-main font-bold">Email: </span>
              <Link href="mailto:info@hahaho.vn">info@hahaho.vn</Link>
            </p>
          </div>
          <div className="flex gap-5 mt-6">
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
          <div className="h-full w-full bg-red-300 text-black">
            PLUGIN PAGE FACEBOOK
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-8 md:col-span-4 lg:col-span-2">
          <h6 className="font-bold mb-4 uppercase text-lg text-primary-main">
            {FOOTER[0].title}
          </h6>
          {FOOTER[0]?.items && (
            <ul className="text-sm">
              {FOOTER[0].items.map((item) => (
                <li key={item.label} className="mb-4">
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
          <h6 className="font-bold mb-4 uppercase text-lg text-primary-main">
            {FOOTER[1].title}
          </h6>
          {FOOTER[1]?.items && (
            <ul className="text-sm">
              {FOOTER[1].items.map((item) => (
                <li key={item.label} className="mb-4">
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
          <h6 className="font-bold mb-4 uppercase text-lg text-primary-main">
            {FOOTER[2].title}
          </h6>
          {FOOTER[2]?.items && (
            <ul className="text-sm">
              {FOOTER[2].items.map((item) => (
                <li key={item.label} className="mb-4">
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
          <h6 className="font-bold mb-4 uppercase text-lg text-primary-main">
            {FOOTER[3].title}
          </h6>
          {FOOTER[3]?.items && (
            <ul className="text-sm">
              {FOOTER[3].items.map((item) => (
                <li key={item.label} className="mb-4">
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
          <h6 className="font-bold mb-4 uppercase text-lg text-primary-main">
            {FOOTER[4].title}
          </h6>
          {FOOTER[4]?.items && (
            <ul className="text-sm">
              {FOOTER[4].items.map((item) => (
                <li key={item.label} className="mb-4">
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
    </footer>
  );
}

// {FOOTER.map((block) => (
//   <div
//     key={block.title}
//     className="col-span-8 md:col-span-4 lg:col-span-2"
//   >
//     <h6 className="font-bold mb-4 uppercase text-lg text-primary-main">
//       {block.title}
//     </h6>
//     {block?.items && (
//       <ul className="text-sm">
//         {block.items.map((item) => (
//           <li key={item.label} className="mb-4">
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
