import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className="mt-[100px] bg-_blueSky w-full py-[50px] px-5 lg:py-20 lg:px-[120px]">
      <div className="flex flex-col lg:flex-row lg:w-full">
        <div className="items-center justify-center text-center lg:items-start lg:justify-start lg:text-start lg:w-2/5">
          <div className="flex items-center justify-center w-full lg:justify-start">
            <Image src={"/img/logo.png"} width={60} height={60} alt="logo" />
          </div>
          <h3 className="mt-[30px] text-_blue text-lg">
            StoreGG membantu gamers <br /> untuk menjadi pemenang sejati
          </h3>
          <h3 className="mt-[30px] text-_blue text-lg">
            Copyright 2021. All Rights Reserved.
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:flex lg:justify-around lg:w-full gap-y-[50px] mt-[50px] lg:mt-0">
          <div className="text-_blue text-lg">
            <h2 className="font-semibold">Company</h2>
            <div className="space-y-[6px] mt-3 cursor-pointer hover:underline hover:text-_blue2">
              <h3>About Us</h3>
              <h3>Press Release</h3>
              <h3>Terms of Use</h3>
              <h3>Privacy & Policy</h3>
            </div>
          </div>

          <div className="text-_blue text-lg">
            <h2 className="font-semibold">Support</h2>
            <div className="space-y-[6px] mt-3">
              <h3>Refund Policy</h3>
              <h3>Unlock Rewards</h3>
              <h3>Live Chatting</h3>
            </div>
          </div>

          <div className="text-_blue text-lg col-span-2 lg:col-span-1">
            <h2 className="font-semibold">Connect</h2>
            <div className="space-y-[6px] mt-3">
              <h3>hi@store.gg</h3>
              <h3>team@store.gg</h3>
              <h3>Pasific 12, Jakarta Selatan</h3>
              <h3>021 - 1122 - 9090</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
