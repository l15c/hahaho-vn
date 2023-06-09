'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

const OPTIONS = [
  'iBPM - Bộ công cụ tự động hóa quy trình nghiệp vụ',
  'inBusiness - Bộ phần mềm đóng gói tinh hoa quản trị doanh nghiệp',
];
export default function FormContact() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const {
        // @ts-ignore
        name: { value: customerName },
        option: { value: product },
        company: { value: companyName },
        email: { value: email },
        phone: { value: phoneNumber },
      } = e.currentTarget;

      await axios.post('api/customer-contacts', {
        data: {
          customerName,
          product,
          companyName,
          email,
          phoneNumber,
        },
      });
      setLoading(false);
      toast.success('Gửi yêu cầu thành công');
      router.push('/');
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex h-32 w-full items-center bg-primary text-[34px] font-bold text-white">
        <div className="mx-9 flex h-20 w-20 rounded-full bg-white opacity-90">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            className="m-auto fill-primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <PathPhone />
          </svg>
        </div>

        <p>
          Hotline
          <br />
          028 7303 4668
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid h-[540px] w-full gap-4 px-24 py-11"
      >
        <div className="h-fit">
          <label htmlFor="name" className="block font-medium text-primary">
            Họ và tên (*):
          </label>
          <input
            type="text"
            name="name"
            className="h-10 w-full border-b border-primary"
            required
            disabled={loading}
          />
        </div>
        <div className="mt-1 h-fit">
          <label className="block font-medium text-primary">
            Sản phẩm/Giải pháp bạn quan tâm:
          </label>
          {OPTIONS.map((opt, idx) => (
            <div key={idx} className="form-control h-10">
              <label className="label cursor-pointer">
                <span className="label-text mr-2">{opt}</span>
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  className="radio checked:bg-primary"
                  disabled={loading}
                  defaultChecked
                  required
                />
              </label>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="company" className="block font-medium text-primary">
            Tên doanh nghiệp:
          </label>
          <input
            type="text"
            name="company"
            className="h-10 w-full border-b border-primary"
            disabled={loading}
          />
        </div>
        <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-5 sm:space-y-0">
          <div className="grow">
            <label htmlFor="email" className="block font-medium text-primary">
              Email:
            </label>
            <input
              name="email"
              type="email"
              className="h-10 w-full border-b border-primary"
              disabled={loading}
            />
          </div>
          <div className="grow">
            <label htmlFor="phone" className="block font-medium text-primary">
              Số điện thoại (*):
            </label>
            <input
              name="phone"
              type="text"
              pattern="(84|+84|0[3|5|7|8|9])+([0-9]{8})"
              className="h-10 w-full border-b border-primary"
              required
              disabled={loading}
            />
          </div>
        </div>
        <button
          type="submit"
          className={twMerge(
            'btn-primary btn mx-auto rounded-[50px] text-white',
            loading && 'loading'
          )}
        >
          Gửi thông tin
        </button>
      </form>
    </div>
  );
}

const PathPhone = () => (
  <>
    <path d="M34.3962 17.3824C34.2362 17.3824 34.0827 17.3188 33.9696 17.2056C33.8564 17.0925 33.7929 16.939 33.7929 16.779C33.7929 8.18738 27.0052 1.20669 18.6429 1.20669C18.4829 1.20669 18.3294 1.14312 18.2163 1.02997C18.1031 0.916824 18.0396 0.763361 18.0396 0.603344C18.0396 0.443327 18.1031 0.289864 18.2163 0.176715C18.3294 0.0635664 18.4829 0 18.6429 0C27.6629 0 34.9996 7.52974 34.9996 16.7911C34.9964 16.949 34.9314 17.0994 34.8186 17.2099C34.7058 17.3205 34.5542 17.3824 34.3962 17.3824Z" />
    <path d="M27.8202 17.3821C27.6602 17.3821 27.5067 17.3185 27.3936 17.2054C27.2804 17.0922 27.2169 16.9388 27.2169 16.7787C27.2459 14.4721 26.3602 12.2477 24.7535 10.5924C23.1468 8.93708 20.9499 7.98548 18.6433 7.94578C18.4833 7.94578 18.3299 7.88221 18.2167 7.76906C18.1036 7.65591 18.04 7.50245 18.04 7.34243C18.04 7.18242 18.1036 7.02895 18.2167 6.91581C18.3299 6.80266 18.4833 6.73909 18.6433 6.73909C21.2683 6.77566 23.7715 7.85195 25.6039 9.73183C27.4362 11.6117 28.4481 14.1417 28.4175 16.7667C28.4191 16.8464 28.4049 16.9257 28.3757 16.9999C28.3464 17.0741 28.3028 17.1418 28.2472 17.199C28.1917 17.2562 28.1254 17.3019 28.0521 17.3333C27.9788 17.3647 27.9 17.3813 27.8202 17.3821ZM31.3799 30.0644C30.6097 31.606 29.5171 32.964 28.1762 34.0465C27.6976 34.4257 27.1448 34.7006 26.5536 34.8534C25.9623 35.0061 25.3456 35.0334 24.7431 34.9334C19.2708 34.0042 13.8829 31.6029 8.50715 26.3176C3.37269 20.8091 0.965346 15.1859 0.0603294 9.56878C-0.0398327 8.9517 -0.0150774 8.3208 0.133127 7.71347C0.281332 7.10614 0.549969 6.53475 0.923112 6.03318C1.96663 4.65317 3.30153 3.52015 4.83278 2.71478C4.97986 2.56035 5.15677 2.43741 5.35279 2.3534C5.54881 2.26939 5.75984 2.22607 5.9731 2.22607C6.18637 2.22607 6.3974 2.26939 6.59342 2.3534C6.78944 2.43741 6.96635 2.56035 7.11343 2.71478L12.4289 8.23538C12.7525 8.58271 12.9324 9.03977 12.9324 9.51447C12.9324 9.98918 12.7525 10.4462 12.4289 10.7936L8.66402 14.8782C10.2629 18.3836 16.1696 24.4653 19.5604 26.1064L23.5365 22.2269C23.6995 22.0635 23.8933 21.9338 24.1065 21.8453C24.3198 21.7568 24.5485 21.7113 24.7793 21.7113C25.0102 21.7113 25.2389 21.7568 25.4522 21.8453C25.6654 21.9338 25.8591 22.0635 26.0222 22.2269L31.392 27.657C31.5501 27.8154 31.6753 28.0036 31.7603 28.2106C31.8453 28.4176 31.8885 28.6394 31.8874 28.8632C31.8863 29.087 31.8409 29.3084 31.7538 29.5145C31.6667 29.7207 31.5396 29.9076 31.3799 30.0644Z" />
  </>
);
