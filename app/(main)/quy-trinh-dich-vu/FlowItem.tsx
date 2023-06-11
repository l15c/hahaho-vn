import { StepFlow } from '@/types/component';
import Image from 'next/image';
import React from 'react';

type Props = {
  flow: StepFlow[];
};

const FlowItem = ({ flow }: Props) => {
  return (
    <div>
      <div className="flex justify-center px-44  ">
        {flow.map((item, index) => {
          return (
            <div key={index} className="mx-1">
              <div className=" flex h-[220px] w-[104px] flex-col justify-between rounded-[62.5px] bg-primary py-4 pt-4">
                <div className="text-center ">
                  <div className="mx-auto w-7 rounded-full border-2 border-white ">
                    <p className="text-base text-white">{index + 1}</p>
                  </div>
                </div>
                <div>
                  <p className="mx-2 mt-4 text-center text-xs text-white">
                    {item.text}
                  </p>
                </div>
                <div className="mx-auto flex h-[72px] w-[72px] items-center rounded-full border-2 border-white bg-white">
                  <Image
                    alt={item.text}
                    src={`/api${item.icon.url}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className="m-auto h-auto w-auto "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FlowItem;
