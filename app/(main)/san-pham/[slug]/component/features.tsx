import { ProductFeature } from '@/types/component';

type Props = {
  color: string;
  features: ProductFeature[];
};
export default function Features({ color, features }: Props) {
  return (
    <div className="container mx-auto my-24 max-w-[726px]">
      <p
        className="mb-24 text-center text-4xl font-bold uppercase"
        style={{ color }}
      >
        Tính năng nổi bật
      </p>
      <div className="grid grid-cols-12 gap-x-5 gap-y-10 px-10 md:px-0">
        {features.map((e, idx) => (
          <div key={idx} className="col-span-6 md:col-span-3">
            {/*<Item {...e} />*/}
          </div>
        ))}
      </div>
    </div>
  );
}

// function Item({ title, }: ProductFeature) {
//   return (
//     <div className="relative mx-auto w-fit">
//       {mark && (
//         <Image
//           src="/svg/mark.svg"
//           alt={title}
//           width={30}
//           height={43}
//           className="absolute right-0 top-0 -translate-y-1/2 translate-x-full"
//         />
//       )}
//       <Image
//         src={imageUrl}
//         alt={title}
//         width={0}
//         height={98}
//         className="w-auto"
//       />
//       <p className="mt-6 text-2xl font-medium">{html(title)}</p>
//     </div>
//   );
// }
