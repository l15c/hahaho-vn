import Image from 'next/image';
import { PATH } from '@/routes/path';
import Link from 'next/link';

const { hrm, crm, eOffice, task } = PATH.products;
const PRODUCTS = [
  {
    url: eOffice,
    color: '#00529C',
    name: 'E-Office Management',
    title: 'Văn phòng điện tử',
    iconUrl: '/svg/e-office.svg',
  },
  {
    url: task,
    color: '#ED2224',
    name: 'Task Management',
    title: 'Công việc & Dự án',
    iconUrl: '/svg/task.svg',
  },
  {
    url: crm,
    color: '#CC6C28',
    name: 'Customer Relationship Management',
    title: 'Quan hệ khách hàng',
    iconUrl: '/svg/crm.svg',
  },
  {
    url: hrm,
    color: '#198754',
    name: 'Human Resource Management',
    title: 'Nguồn nhân lực',
    iconUrl: '/svg/hrm.svg',
  },
];
export default function Products() {
  return (
    <section>
      <div className=" border-b-[3px] border-primary" />
      <div className="flex  text-center">
        <div className="mt-4 w-full flex-grow">
          <p className="text-4xl font-bold">NỀN TẢNG iBPM 2.0</p>
          <p className="px-14 pt-3 text-2xl uppercase">
            Bộ công cụ tự động hóa quy trình doanh nghiệp
          </p>
        </div>
        <div className="divider mx-1 my-0 h-auto w-1 bg-primary" />
        <div className="mt-4 w-full flex-grow">
          <p className="text-4xl font-bold">INBUSINESS</p>
          <p className="px-14 pt-3 text-2xl uppercase">
            Bộ phần mềm đóng gói quy trình doanh nghiệp
          </p>
        </div>
      </div>
      <div className="mt-10 flex text-center">
        <div className="w-full flex-grow">
          <Link href={PATH.products.ibpm}>
            <div className="relative mx-auto w-fit rounded-3xl bg-primary p-8">
              <Image
                alt="Platform"
                src="/images/platform.png"
                width={120}
                height={120}
              />
            </div>
          </Link>
        </div>
        <div className="w-full flex-grow">
          <div className="grid grid-cols-2 gap-5">
            {PRODUCTS.map((e) => (
              <Link key={e.url} href={e.url}>
                <div style={{color:e.color}}>
                  <div
                    className={`relative m-auto flex h-36 w-36 rounded-[20px] p-8`}
                    style={{backgroundColor:e.color}}
                  >
                    <Image
                      alt={e.name}
                      src={e.iconUrl}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="m-auto h-auto w-auto"
                    />
                  </div>
                  <p className="mx-auto mt-4 font-bold uppercase">{e.name}</p>
                  <p>
                    Phần mềm quản lý
                    <br />
                    {e.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
