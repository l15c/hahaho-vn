import Image from 'next/image';
import Frame from './frame.svg';
import { paramCase } from 'param-case';
import { Leadership } from '@/types/component';
import Markdown from '@/components/Markdown';

interface Props {
  leaderships: Leadership[];
}
export default function Content({ leaderships }: Props) {
  return (
    <div className="my-10 grid grid-cols-10 gap-y-12">
      {leaderships.map((e, idx) => (
        <div
          key={paramCase(e.name)}
          className={`${
            idx === 0 ? 'col-span-full' : 'col-span-5'
          } flex flex-col`}
        >
          <Item {...e} />
        </div>
      ))}
    </div>
  );
}

function Item({ pronouns, name, avatar, position, role, content }: Leadership) {
  return (
    <>
      <div className="mx-auto">
        <label
          htmlFor={`info-${paramCase(name)}`}
          className="relative cursor-pointer"
        >
          <Image src={Frame} alt="Frame" className="mx-auto" />
          <Image
            src={`/api${avatar.url}`}
            alt={avatar.alternativeText || name}
            width={250}
            height={250}
            priority
            className="absolute inset-0 h-full w-full scale-75 rounded-full object-contain"
          />
        </label>
      </div>
      <div className="mx-auto grid gap-1 text-center text-2xl">
        <p className="uppercase">{pronouns}</p>
        <p className="font-extrabold uppercase">{name}</p>
        <p>{role}</p>
        <p>{position}</p>
      </div>
      <input
        type="checkbox"
        id={`info-${paramCase(name)}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`info-${paramCase(name)}`}
        className="modal cursor-pointer"
      >
        <label
          className="modal-box relative grid max-w-[1400px] grid-cols-10 rounded-none bg-white p-0"
          htmlFor=""
        >
          <label
            htmlFor={`info-${paramCase(name)}`}
            className="absolute right-10 top-8 cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.4818 17.025C20.1727 17.7159 20.1727 18.7908 19.4818 19.4818C19.1363 19.8273 18.714 19.9808 18.2534 19.9808C17.7927 19.9808 17.3704 19.8273 17.025 19.4818L10 12.4568L2.97505 19.4818C2.62956 19.8273 2.20729 19.9808 1.74664 19.9808C1.28599 19.9808 0.863724 19.8273 0.518234 19.4818C-0.172745 18.7908 -0.172745 17.7159 0.518234 17.025L7.54319 10L0.518234 2.97505C-0.172745 2.28407 -0.172745 1.20921 0.518234 0.518234C1.20921 -0.172745 2.28407 -0.172745 2.97505 0.518234L10 7.54319L17.025 0.518234C17.7159 -0.172745 18.7908 -0.172745 19.4818 0.518234C20.1727 1.20921 20.1727 2.28407 19.4818 2.97505L12.4568 10L19.4818 17.025Z" />
            </svg>
          </label>
          <div className="col-span-6 flex flex-col gap-y-4 bg-[#F8F8F9] px-20 py-16 text-justify text-lg">
            <Markdown data={content} />
          </div>
          <div className="col-span-4 my-10 flex flex-col">
            <div className="mx-auto">
              <div className="relative cursor-pointer">
                <Image src={Frame} alt="Frame" className="mx-auto" />
                <Image
                  src={`/api${avatar.url}`}
                  alt={avatar.alternativeText || name}
                  width={250}
                  height={250}
                  priority
                  className="absolute inset-0 h-full w-full scale-75 rounded-full object-contain"
                />
              </div>
            </div>
            <div className="mx-auto grid gap-1 text-center text-2xl">
              <p className="uppercase">{pronouns}</p>
              <p className="font-extrabold uppercase">{name}</p>
              <p>{role}</p>
              <p>{position}</p>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
