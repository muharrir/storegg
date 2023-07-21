"use client";
import Image from "next/image";
import React, { useState } from "react";

interface TopUpPaymentProps {
  method: string;
  type: string;
}

function TopUpPayment(props: TopUpPaymentProps) {
  const { method, type } = props;
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div
      className={`rounded-[26px] p-[30px] text-_blue cursor-pointer ${
        isClick
          ? "bg-[#CDF1FF]/50 border-2 border-[#00BAFF]"
          : "bg-_blueSky border-2 border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <h2 className="font-medium text-[28px]">{method}</h2>
        {isClick && (
          <Image
            src={"/icon/ic-check.svg"}
            alt="ic-check"
            width={20}
            height={20}
          />
        )}
      </div>
      <p className="text-lg">{type}</p>
    </div>
  );
}

export default TopUpPayment;
