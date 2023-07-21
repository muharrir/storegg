import Link from "next/link";
import React, { useEffect } from "react";
import Illustration from "./illustration";

export default function MainBanner() {
  return (
    <section className="mx-4 mt-[50px] lg:mt-[100px]  lg:mx-[100px]">
      <div className="flex justify-around items-center">
        <div>
          <h4 className="text-lg text-_gray1">Halo gamers,</h4>
          <div className="relative">
            <h1 className="text-[42px] font-bold text-_blue">
              Topup & Get a New <br className="hidden md:block" /> Experience in
              Gaming
            </h1>
            <div className="hidden md:block absolute top-[42px] right-[92px] -z-10 w-24 h-2 bg-[#00BAFF]"></div>
            <div className="hidden md:block absolute top-[106px] left-0 -z-10 w-60 h-2 bg-[#00BAFF]"></div>
          </div>

          <p className="text-xl text-_blue mt-[30px]">
            Kami menyediakan jutaan cara untuk membantu{" "}
            <br className="hidden lg:block" /> players menjadi pemenang sejati
          </p>

          {/* button getstarted & learn more */}
          <div className="mt-10 flex flex-col lg:flex-row items-center gap-5 ">
            <Link href={""} className="w-full md:w-auto">
              <button className="w-full md:w-auto px-12 py-3 bg-[#4D17E2] text-white rounded-full">
                Get Started
              </button>
            </Link>
            <Link href={""}>
              <button className="underline decoration-_blue text-_blue text-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <Illustration />
      </div>
    </section>
  );
}
