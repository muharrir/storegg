import Image from "next/image";
import React from "react";

interface StepItemProps {
  icon: "step1" | "step2" | "step3";
  title: string;
  desc1: string;
  desc2: string;
}

function StepItem(props: StepItemProps) {
  const { icon, title, desc1, desc2 } = props;
  return (
    <div className="p-[30px] bg-_blueSky rounded-[26px] w-full">
      <Image
        src={`/icon/ic-${icon}.svg`}
        width={80}
        height={80}
        alt="icon-start"
      />
      <h1 className="mt-[30px] font-semibold text-[22px] text-_blue">
        {title}
      </h1>
      <p className="mt-2 text-lg text-_blue">
        {desc1} <br /> {desc2}
      </p>
    </div>
  );
}

export default StepItem;
