import Link from 'next/link';
import Image from 'next/image';
import { PATH } from '@/routes/path';
import ProductBanner from './component/banner';
import Features from './component/features';
import OtherProducts from './component/other-products';
import html from "@/utils/html-parser";

export const revalidate = 604800; // 7 days

const { hrm, crm, eOffice, task, ibpm } = PATH.products;
const SLUGS = [hrm, crm, eOffice, task].map((url) => ({
  slug: url.split('/').pop(),
}));

const DATA = [
  {
    url: eOffice,
    color: '#00529C',
    name: 'E-Office Management',
    title: 'Phần mềm quản lý Văn phòng điện tử',
    iconUrl: '/svg/e-office.svg',
    demoUrl: '#',
    trialUrl: '#',
    description:
        '<strong>Phần mềm quản lý Văn phòng điện tử </strong>cho phép thao tác xử lý các nghiệp vụ bao gồm văn bản, đề xuất, báo cáo, tờ trình,… Tất cả được giải quyết và lưu trữ trên cùng hệ thống giúp cho việc tương tác, trao đổi thông tin nhanh chóng và hiệu quả.',
    imageUrl: '/images/san-pham/banner-e-office.png',
    slogan: '<strong style="color: #00529C">Phần mềm quản lý văn phòng điện tử </strong>tích hợp<strong style="color: #00529C"> chữ ký số </strong>do pháp luật quy định.',
    features: [
      {
        title: 'Trình ký',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Chữ ký số',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Tài liệu',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Thông báo',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Thư nội bộ',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Tin nhắn nội bộ',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Lịch làm việc',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Mobile App',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
    ],
    benefit: [
      {
        imageUrl: '/images/san-pham/benefit.png',
        content:'<strong style="color: #00529C">Tiết kiệm </strong>thời gian, chi phí và<strong style="color: #00529C"> nâng cao </strong>hiệu quả xử lý công việc.',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Tích hợp<strong style="color: #00529C"> chữ ký số </strong>xác thực trên môi trường số đảm bảo tính<strong style="color: #00529C"> pháp lý, toàn vẹn </strong>và<strong style="color: #00529C"> bất khả từ.</strong>',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Giúp tập thể<strong style="color: #00529C"> nắm bắt </strong>được thông tin hoạt động của tổ chức một cách<strong style="color: #00529C"> nhanh chóng </strong>và<strong style="color: #00529C"> chính xác.</strong>',

      },
    ],
  },
  {
    url: task,
    color: '#ED2224',
    iconUrl: '/svg/task.svg',
    demoUrl: '#',
    trialUrl: '#',
    name: 'Task Management',
    title: 'Phần mềm quản lý Công việc & Dự án',
    description:
        '<strong>Phần mềm quản lý Công việc & Dự án </strong>đáp ứng đầy đủ chức năng quản lý điều hành, giám sát, cho phép làm việc và giao việc từ xa, quản lý tiến độ và thảo luận tập trung theo từng công việc. Ngoài ra, phần mềm còn cung cấp hệ thống báo cáo đa dạng và thông minh.',
    imageUrl: '/images/san-pham/banner-task.png',
    slogan: '<strong style="color: #ED2224">Phần mềm quản lý công việc & dự án </strong>cung cấp công cụ đánh giá<strong style="color: #ED2224"> KPI cho nhân sự được giao việc.</strong>',

    features: [
      {
        title: 'Dự án',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Công việc',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Hạng mục',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Nhóm dự án',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Đề nghị',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Chỉ đạo',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Dashboard',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Mobile App',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
    ],
    benefit: [
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: '<strong style="color: #ED2224">Nắm rõ mục tiêu </strong>của dự án, công việc của bản thân và của nhóm.',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Cung cấp các công cụ hỗ trợ<strong style="color: #ED2224"> lập kế hoạch logic </strong>và<strong style="color: #ED2224"> trực quan.</strong>',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content:'<strong style="color: #ED2224">Dễ dàng theo sát </strong>tiến độ<strong style="color: #ED2224"> đo lường </strong>năng suất, hiệu quả và báo cáo công việc.',
      },
    ],
  },
  {
    url: crm,
    color: '#CC6C28',
    iconUrl: '/svg/crm.svg',
    demoUrl: '#',
    trialUrl: '#',
    name: 'Customer Relationship Management',
    title: 'Phần mềm quản lý Quan hệ khách hàng',
    description:
        '<strong>Phần mềm quản lý Quan hệ khách hàng </strong>giúp doanh nghiệp quản lý và phân tích các tương tác dữ liệu trong suốt vòng đời khách hàng, với mục tiêu cải thiện quan hệ khách hàng và thúc đẩy tăng trưởng về mặt doanh số.',
    imageUrl: '/images/san-pham/banner-crm.png',
    slogan: '<strong style="color: #CC6C28">Phần mềm quản lý quan hệ khách hàng </strong>cung cấp công cụ đánh giá<strong style="color: #CC6C28"> KPI cho nhân sự kinh doanh.</strong>',

    features: [
      {
        title: 'Khách hàng',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Bán hàng',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Chăm sóc',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Marketing',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Mua hàng',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Kho hàng',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Dashboard',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Mobile App',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
    ],
    benefit: [
      {
        imageUrl: '/images/san-pham/benefit.png',
        content:'<strong style="color: #CC6C28">Đánh giá </strong>khả năng chăm sóc, khai thác tập khách hàng của các<strong style="color: #CC6C28"> nhân viên chăm sóc khách hàng.</strong>',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Hỗ trợ đưa ra các chương trình<strong style="color: #CC6C28"> tiếp cận và tiếp thị hiệu quả.</strong>',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Hỗ trợ các công cụ giúp khách hàng có những<strong style="color: #CC6C28"> trải nghiệm tốt khi mua hàng.</strong>',
      },
    ],
  },
  {
    url: hrm,
    color: '#198754',
    iconUrl: '/svg/hrm.svg',
    demoUrl: '#',
    trialUrl: '#',
    name: 'Human Resource Management',
    title: 'Phần mềm quản lý Nguồn nhân lực',
    description:
        '<strong>Phần mềm quản lý Nguồn nhân lực </strong>giúp doanh nghiệp quản lý, tối ưu, đánh giá các nghiệp vụ liên quan đến quá trình làm việc của nhân sự từ giai đoạn tuyển dụng, phỏng vấn, thử việc, đào tạo, chính thức nhận việc cho đến hết quá trình tham gia công tác.',
    imageUrl: '/images/san-pham/banner-hrm.png',

    slogan:'<strong style="color: #198754">Phần mềm quản lý nguồn nhân lực </strong>cung cấp công cụ đánh giá<strong style="color: #198754"> KPI toàn diện </strong>cho nhân sự.',

    features: [
      {
        title: 'Hồ sơ nhân sự',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Tuyển dụng',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Đào tạo',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'KPI toàn diện',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: true,
      },
      {
        title: 'Chấm công',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Tính lương',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Nghỉ phép',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
      {
        title: 'Mobile App',
        imageUrl: '/svg/products/e-office/chu-ky-so.svg',
        mark: false,
      },
    ], //<strong style="color: #198754"></strong>'
    benefit: [
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Nắm rõ<strong style="color: #198754"> năng lực, phẩm chất </strong>của<strong style="color: #198754"> nguồn nhân lực.</strong>',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Công cụ hỗ trợ<strong style="color: #198754"> lập kế hoạch nguồn nhân lực nhanh chóng </strong>phục vụ cho chiến lược, kế hoạch của tổ chức và doanh nghiệp.',
      },
      {
        imageUrl: '/images/san-pham/benefit.png',
        content: 'Công cụ đáp ứng <strong style="color: #198754"> nhanh chóng, chính xác, đầy đủ </strong> các chính sách, quy định của tổ chức và doanh nghiệp đối với nhân sự.',
      },
    ],
  },
  {
    url: ibpm,
    color: '#F05A32',
    iconUrl: '/images/platform.png',
    demoUrl: '#',
    trialUrl: '#',
    name: 'Nền tảng iBPM 2.0',
    title: 'Bộ công cụ Tự động hóa Quy trình nghiệp vụ',
    description: 'Giải pháp chuyển đổi số được xây dựng trên <strong>nền tảng chuyển đổi số iBPM theo chuẩn BPMN 2.0 (ISO/IEC 19510:2013),</strong> với nhiều tính năng mạnh mẽ và linh hoạt, rút ngắn thời gian triển khai ứng dụng.',
    imageUrl: '/images/san-pham/banner-ibpm.png',
    slogan: '',
    features: [],
    benefit: [],
  },
];

export async function generateStaticParams() {
  return SLUGS;
}

async function getProduct(slug: string) {
  const product = DATA.find((e) => e.url.split('/').pop() === slug);
  const otherProducts = DATA.filter((e) => e.url.split('/').pop() !== slug);

  return {
    ...product,
    otherProducts: otherProducts.map(
      ({ iconUrl, name, title, url, color }) => ({
        iconUrl,
        name,
        title,
        url,
        color,
      })
    ),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await getProduct(params.slug);
  if (typeof res === 'undefined') return null;
  const {
    name,
    title,
    description,
    demoUrl,
    trialUrl,
    imageUrl,
    color,
    features,
    benefit,
    slogan,
  } = res!;
  return (
    <div>
      <ProductBanner
        {...{ name, title, description, demoUrl, trialUrl, imageUrl, color }}
      />

      <div className="my-24 flex max-w-[1920px] items-center bg-[#F8F8F9]">
        <p className="px-0 py-6 text-center text-4xl leading-[140%] md:px-[240px]">
          {html(slogan!)}
        </p>
      </div>

      <Features color={color!} features={features!} />

      <div className="flex justify-center gap-4">
        <Link href={demoUrl!}>
          <button className="btn h-11 w-[148px] rounded-[50px] border-none bg-[#636366] text-white hover:bg-[#636366] hover:brightness-90">
            Live Demo
          </button>
        </Link>
        <Link href={trialUrl!}>
          <button className="btn h-11 w-[148px] rounded-[50px] border-none bg-[#636366] text-white hover:bg-[#636366] hover:brightness-90">
            Dùng thử
          </button>
        </Link>

        <label
          htmlFor="btn-contact"
          className="btn h-11 w-[148px] rounded-[50px] border-none text-white hover:brightness-90"
          style={{ backgroundColor: color }}
        >
          Liên hệ tư vấn
        </label>
      </div>

      <div className="container mx-auto mb-36 mt-24 flex max-w-[960px] flex-nowrap">
        {benefit!.map((e, idx) => (
          <div key={idx} className="flex w-1/3 flex-col items-center">
            <Image
              src={e.imageUrl}
              alt="Description"
              width={200}
              height={200}
              className="fill-primary"
            />
            <p className="max-w-[225px] text-justify text-2xl">
              {html(e.content!)}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-48 max-w-[1920px]">
          <p
            className="mb-24 w-full px-0 py-6 text-center text-4xl font-semibold uppercase"
            style={{ color }}
          >
            Các sản phẩm khác
          </p>
          <OtherProducts color={color!} products={res.otherProducts!} />
        </div>
      </div>
    </div>
  );
}