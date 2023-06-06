"use client";

import React, { useState } from "react";
import QuyTrinh from "./quy-trinh";

type Props = {};
const hoptac = [
  { step: 1, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
  { step: 2, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
  { step: 3, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
  { step: 4, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
  { step: 5, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
  { step: 6, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
  { step: 7, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
  { step: 8, description: 'Tìm hiểu, tiếp nhận, khảo sát yêu cầu khách hàng ' },
];

const TabDichVuVaHopTac = (props: Props) => {
  const [tab, setTab] = useState("dich-vu");
  const handleChangeTab = () => {
    if (tab === "dich-vu") {
      setTab("hop-tac");
    } else {
      setTab("dich-vu");
    }
  };
  return (
    <>
      <div className="mb-14 mt-8 flex justify-center text-center">
        <h1
          className={`inset-0 mx-2 cursor-pointer text-4xl font-bold uppercase leading-[140%] ${
            tab === 'dich-vu'
              ? 'text-primary'
              : 'text-black opacity-50 hover:text-primary'
          } `}
          onClick={handleChangeTab}
        >
          Quy trình dịch vụ
        </h1>
        <div className="h-14 border-2 border-[#b1b1b2] "></div>
        <h1
          className={`mx-2 cursor-pointer text-4xl font-bold uppercase leading-[140%] ${
            tab === 'hop-tac'
              ? 'text-primary'
              : 'text-black opacity-50 hover:text-primary'
          }`}
          onClick={handleChangeTab}
        >
          Quy trình hợp tác
        </h1>
      </div>
      <QuyTrinh quytrinh={hoptac} />
    </>
  );
};
export default TabDichVuVaHopTac;
