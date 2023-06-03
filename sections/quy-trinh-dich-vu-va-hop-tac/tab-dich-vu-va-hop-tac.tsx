"use client";

import React, { useState } from "react";
import QuyTrinhDichVu from "./quy-trinh-dich-vu";
import QuyTrinhHopTac from "./quy-trinh-hop-tac";

type Props = {};

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
            tab === "dich-vu"
              ? "text-primary"
              : "text-black opacity-50 hover:text-primary"
          } `}
          onClick={handleChangeTab}
        >
          Quy trình dịch vụ
        </h1>
        <div className="h-14 border-2 border-[#b1b1b2] "></div>
        <h1
          className={`mx-2 cursor-pointer text-4xl font-bold uppercase leading-[140%] ${
            tab === "hop-tac"
              ? "text-primary"
              : "text-black opacity-50 hover:text-primary"
          }`}
          onClick={handleChangeTab}
        >
          Quy trình hợp tác
        </h1>
      </div>
      {tab === "dich-vu" ? <QuyTrinhDichVu /> : <QuyTrinhHopTac />}
    </>
  );
};
export default TabDichVuVaHopTac;
