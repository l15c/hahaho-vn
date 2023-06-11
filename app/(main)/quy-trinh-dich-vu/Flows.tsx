'use client';

import { Flow } from '@/types/component';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import FlowItem from './FlowItem';

type Props = {
  flows: Flow[];
};

const Flows = ({ flows }: Props) => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="mb-14 mt-8 flex justify-center text-center">
        {flows.map((item, index) => (
          <>
            <h1
              className={twMerge(
                'inset-0 mx-2 cursor-pointer text-4xl font-bold uppercase leading-[140%] text-black opacity-50 hover:text-primary ',
                tab === index && 'text-primary opacity-100'
              )}
              onClick={() => setTab(index)}
            >
              {item.name}
            </h1>
            {index !== flows.length - 1 && (
              <div className="h-14 border-2 border-[#b1b1b2] " />
            )}
          </>
        ))}
      </div>
      <FlowItem flow={flows[tab].step} />
    </>
  );
};
export default Flows;
