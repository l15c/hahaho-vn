import Markdown from '@/components/Markdown';

type MaximProps = {
  description: string;
};

export default function Maxim({ description }: MaximProps) {
  return (
    <section>
      <p className="divider !gap-6 text-4xl font-bold uppercase text-primary before:h-[5px] before:bg-primary after:h-[5px] after:bg-primary">
        Phương châm triển khai
      </p>
      <div className="mb-24 mt-14 rounded-[20px] bg-primary px-16 py-7 text-2xl text-white">
        <Markdown data={description} />
      </div>
    </section>
  );
}
