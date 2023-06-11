import Markdown from '@/components/Markdown';
import { ProductFeature } from '@/types/component';
import Image from 'next/image';

type Props = {
  color: string;
  features: ProductFeature[];
};
export default function Features({ color, features }: Props) {
  return (
    <div className="my-24">
      <p
        className="mb-24 bg-[#F8F8F9] py-12 text-center text-4xl font-bold uppercase"
        style={{ color }}
      >
        Tính năng của nền tảng <span className="lowercase">i</span>BPM 2.0
      </p>
      <div className="container mx-auto flex max-w-[1120px] flex-col px-10 md:px-0">
        {features.map((e, idx) => (
          <Item key={idx} {...e} />
        ))}
      </div>
    </div>
  );
}

function Item({ title, content, image }: ProductFeature) {
  return (
    <div className="flex justify-around border-b-2 border-primary py-4">
      <div className="relative mx-auto mr-[120px] w-[120px]">
        <Image
          src={`/api${image.url}`}
          alt={title}
          width={0}
          height={120}
          className="w-auto"
        />
        <div className="mt-3 w-[120px] text-2xl font-medium text-primary">
          {title}
        </div>
      </div>
      <div className="my-auto flex flex-grow flex-col gap-4 text-justify text-2xl leading-8">
        <Markdown data={content} />
      </div>
    </div>
  );
}
