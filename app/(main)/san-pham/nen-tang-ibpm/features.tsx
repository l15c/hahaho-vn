import Image from 'next/image';
import html from '@/utils/html-parser';

type Item = {
  title: string;
  imageUrl: string;
  description: string;
};

type Props = {
  color: string;
  features: Item[];
};
export default function Features({ color, features }: Props) {
  return (
    <div className="my-24">
      <p
        className="mb-24 text-center text-4xl font-bold uppercase bg-[#F8F8F9] py-12"
        style={{ color }}
      >
        Tính năng của nền tảng <span className="lowercase">i</span>BPM 2.0
      </p>
      <div className="flex flex-col px-10 md:px-0 max-w-[1120px] container mx-auto">
        {features.map((e, idx) => (
          <Item key={idx} {...e} />
        ))}
      </div>
    </div>
  );
}

function Item({ title, imageUrl, description }: Item) {
  return (
    <div className='flex justify-around border-b-2 border-primary py-4'>
        <div className="relative mx-auto w-[120px] mr-[120px]">
            <Image
                src={imageUrl}
                alt={title}
                width={0}
                height={120}
                className="w-auto"
            />
            <div className="mt-3 text-2xl font-medium text-primary w-[120px]">{html(title)}</div>
        </div>
        <div className='flex flex-col gap-4 flex-grow my-auto text-2xl leading-8 text-justify'>{html(description)}</div>
    </div>
  );
}
