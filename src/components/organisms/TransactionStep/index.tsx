import StepItem from "@/components/molecules/StepItem";
import React from "react";

function TransactionStep() {
  return (
    <div className="mt-[100px] mx-2 lg:mx-[120px]">
      <div>
        <h1 className="text-_blue font-bold text-[32px] lg:text-2xl text-center">
          It’s Really That <br /> Easy to Win the Game
        </h1>
      </div>
      <div
        className="mt-[30px] grid grid-rows-1 gap-5 lg:grid-cols-3 lg:gap-[50px] "
        data-aos="fade-up"
      >
        <StepItem
          icon="step1"
          title="1. Start"
          desc1="Pilih salah satu game"
          desc2="yang ingin kamu top up"
        />
        <StepItem
          icon="step2"
          title="2. Fill Up"
          desc1="Top up sesuai dengan"
          desc2="nominal yang sudah tersedia"
        />
        <StepItem
          icon="step3"
          title="3. Be a Winner"
          desc1="Siap digunakan untuk"
          desc2="improve permainan kamu"
        />
      </div>
    </div>
  );
}

export default TransactionStep;
