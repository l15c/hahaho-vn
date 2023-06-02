import exp from 'constants';
import Image from 'next/image';
import React from 'react'

type Props = {
  steps:number
  description:string
}

const Step = (prop: Props ) => {
  return (
    <div className=" flex h-[220px] w-[104px] flex-col justify-between rounded-[62.5px] bg-primary py-4 pt-4">
      <div className="text-center ">
        <div className="mx-auto w-7 rounded-full border-2 border-white ">
          <p className="text-base text-white">{prop.steps}</p>
        </div>
      </div>
      <div>
        <p className="mx-2 mt-4 text-center text-xs text-white">
          {prop.description}
        </p>
      </div>
        <div className="mx-auto h-[72px] w-[72px] rounded-full border-2 border-white bg-white flex items-center">
          <Image
            alt={prop.steps.toString()}
            src="/assets/step1.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="m-auto h-auto w-auto "
          />
      </div>
    </div>
  );
}
export default Step;