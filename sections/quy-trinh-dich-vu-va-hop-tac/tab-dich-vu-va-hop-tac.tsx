"use client";

import React, { useState } from "react";
import QuyTrinh from "./quy-trinh";
import { Flow } from "@/types/component";
import { twMerge } from "tailwind-merge";

type Props = {
  flows:Flow[]
};

const TabDichVuVaHopTac = ({flows}: Props) => {
  
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
      <QuyTrinh flow={flows[tab]} />
    </>
  );
};
export default TabDichVuVaHopTac;
