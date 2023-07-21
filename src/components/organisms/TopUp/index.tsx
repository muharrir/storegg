import TopUpItem from "@/components/molecules/TopUpItem";
import TopUpPayment from "@/components/molecules/TopUpPayment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopUp() {
  return (
    <section className="mt-[50px] mx-4 lg:mt-[100px] lg:mx-[120px]">
      <div>
        <h2 className="font-bold text-[32px] text-_blue">Top Up</h2>
        <p className="mt-[10px] text-lg text-_blue">
          Perkuat akun dan jadilah pemenang
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-[50px] lg:space-x-[50px] w-full">
        <div className="w-auto flex gap-x-5 items-center lg:flex-none lg:items-start ">
          <Image
            src={"/img/thumbnail3.png"}
            alt="image"
            width={280}
            height={380}
            className="rounded-[26px] w-[110px] h-[140px] lg:w-full lg:h-[380px]"
          />
          <div className="lg:hidden block">
            <h2 className="font-bold text-xl text-_blue">
              Mobile Legends: <br /> The New Battle 2021
            </h2>
            <p className="mt-[10px] text-lg text-_gray1">Category: Mobile</p>
          </div>
        </div>

        <div className="w-full">
          <div className="lg:block hidden">
            <h2 className="font-bold text-[32px] text-_blue">
              Mobile Legends: <br /> The New Battle 2021
            </h2>
            <p className="mt-[10px] text-lg text-_gray1">Category: Mobile</p>
          </div>

          <hr className="my-[30px] lg:my-[50px]" />

          <form action="">
            <div className="flex flex-col">
              <label className="font-medium text-lg text-_blue">
                Verify ID
              </label>
              <input
                type="text"
                placeholder="Enter your ID"
                className="lg:w-2/5 mt-[10px] border border-_blue rounded-full py-3 px-[26px] focus:outline-none focus:border-_blue2 focus:ring-1 focus:ring-_blue2 text-_blue"
              />
            </div>
            <div className="mt-[50px]">
              <h2 className="text-lg text-_blue font-medium">Nominal Top Up</h2>
              <div className="mt-[10px] grid grid-rows-1 lg:grid-cols-3 gap-[30px]">
                <TopUpItem amount="125" price="3.250.000" />
                <TopUpItem amount="225" price="3.250.000" />
                <TopUpItem amount="350" price="3.250.000" />
                <TopUpItem amount="550" price="3.250.000" />
                <TopUpItem amount="750" price="3.250.000" />
              </div>
            </div>
            <div className="mt-[50px]">
              <h2 className="text-lg text-_blue font-medium">Payment Method</h2>
              <div className="mt-[10px] grid grid-rows-1 lg:grid-cols-3 gap-[30px]">
                <TopUpPayment method="Transfer" type="Worldwide Available" />
                <TopUpPayment method="VISA" type="Credit Card" />
              </div>
            </div>
            <div className="mt-[50px] flex flex-col">
              <label className="font-medium text-lg text-_blue">
                Bank Account Name
              </label>
              <input
                type="text"
                placeholder="Enter your Bank Account Name"
                className="lg:w-2/5 mt-[10px] border border-_blue rounded-full py-3 px-[26px] focus:outline-none focus:border-_blue2 focus:ring-1 focus:ring-_blue2"
              />
            </div>

            <Link href={"/checkout"} className="w-full">
              <button className="mt-[50px] w-full lg:w-[170px] h-[50px] rounded-full bg-_blue2 text-white font-medium text-lg">
                Continue
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TopUp;
