import Image from "next/image";

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
          <div className="relative mx-auto w-fit rounded-3xl bg-primary p-8">
            <Image
              alt="Platform"
              src="/images/platform.png"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="w-full flex-grow">
          <div className="grid grid-cols-2 gap-5">
            <div className="text-product-e-office">
              <div className="relative m-auto flex h-36 w-36 rounded-[20px] bg-product-e-office p-8 ">
                <Image
                  alt="E Office"
                  src="/svg/e-office.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="m-auto h-auto w-auto"
                />
              </div>
              <p className="mx-auto mt-4 font-bold uppercase">
                E-office management
              </p>
              <p>
                Phần mềm quản lý
                <br />
                Văn phòng điện tử
              </p>
            </div>

            <div className="text-product-task">
              <div className="relative m-auto flex h-36 w-36 rounded-[20px] bg-product-task p-8 ">
                <Image
                  alt="E Office"
                  src="/svg/task.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="m-auto h-auto w-auto"
                />
              </div>
              <p className="mx-auto mt-4 font-bold uppercase">
                Task Management
              </p>
              <p>
                Phần mềm quản lý
                <br />
                Công việc & Dự án
              </p>
            </div>

            <div className="text-product-crm">
              <div className="relative m-auto flex h-36 w-36 rounded-[20px] bg-product-crm p-8 ">
                <Image
                  alt="E Office"
                  src="/svg/crm.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="m-auto h-auto w-auto"
                />
              </div>
              <p className="mx-auto mt-4 font-bold uppercase">
                Customer relationship management
              </p>
              <p>
                Phần mềm quản lý <br /> Quan hệ khách hàng
              </p>
            </div>

            <div className="text-product-hrm">
              <div className="relative m-auto flex h-36 w-36 rounded-[20px] bg-product-hrm p-8 ">
                <Image
                  alt="E Office"
                  src="/svg/hrm.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="m-auto h-auto w-auto"
                />
              </div>
              <p className="mx-auto mt-4 font-bold uppercase">
                Human resource management
              </p>
              <p>
                Phần mềm quản lý <br /> Nguồn nhân lực
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
