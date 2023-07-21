"use client";
import React, { useState } from "react";

function TransactionTab() {
  const tab = [
    { id: 1, text: "All Trx" },
    { id: 2, text: "Success" },
    { id: 3, text: "Pending" },
    { id: 4, text: "Failed" },
  ];

  const [activeMenuId, setActiveMenuId] = useState<number>(tab[0].id);

  const handleMenuItemClick = (itemId: number) => {
    setActiveMenuId(itemId);
  };

  return (
    <div className="mt-[30px] flex gap-x-[18px]">
      {tab.map((v, i) => (
        <div
          className={`rounded-full w-[112px] h-[40px] text-center flex items-center justify-center cursor-pointer select-none ${
            activeMenuId == v.id
              ? "bg-_blue text-white"
              : "bg-[#E7EAF5] text-_blue"
          }`}
          onClick={() => handleMenuItemClick(v.id)}
          key={i}
        >
          <h2>{v.text}</h2>
        </div>
      ))}
    </div>
  );
}

export default TransactionTab;
