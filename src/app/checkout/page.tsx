import CheckoutItem from "@/components/organisms/CheckoutItem";
import CheckoutPayment from "@/components/organisms/CheckoutPayment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Checkout() {
  return (
    <section className="mx-4 lg:mx-[320px] my-[30px] lg:my-[50px]">
      <div className=" w-full lg:items-center lg:justify-center flex">
        <Image src={"/img/logo.png"} alt="logo" width={60} height={60} />
      </div>
      <div className="mt-[50px] lg:mt-[100px] text-_blue">
        <h2 className="font-bold text-[32px]">Checkout</h2>
        <p className="mt-[10px] text-lg">
          Waktunya meningkatkan <br className="block md:hidden" /> cara bermain
        </p>
        <div className="mt-[50px] flex items-center gap-x-5">
          <Image
            src={"/img/thumbnail3.png"}
            alt="image"
            width={200}
            height={130}
            className="rounded-[26px] w-[110px] h-[140px] lg:w-[200px] lg:h-[130px] object-cover object-top "
          />
          <div>
            <h2 className="font-bold text-xl text-_blue">
              Mobile Legends: <br /> The New Battle 2021
            </h2>
            <p className="mt-[10px] text-_gray1">Category: Mobile</p>
          </div>
        </div>
        <hr className="mt-[30px] lg:mt-[50px] w-full" />
      </div>
      <CheckoutItem />
      <CheckoutPayment />
      <div className="mt-[20px] lg:mt-[50px] flex gap-x-[10px] items-center">
        <div className="border border-[#00BAFF] rounded-md w-[22px] h-[22px] flex items-center justify-center">
          <input
            id="check"
            type="checkbox"
            className="appearance-none w-[14px] h-[14px] bg-white border rounded-[4px] checked:bg-[#00BAFF] items-center justify-center flex"
          />
        </div>
        <label
          htmlFor="check"
          className="text-lg text-_blue cursor-pointer select-none"
        >
          I have transferred the money
        </label>
      </div>

      <Link href={"/success"}>
        <button className="mt-[50px] w-[250px] h-[50px] bg-_blue2 text-white text-lg font-medium rounded-full">
          Confirm Payment
        </button>
      </Link>
    </section>
  );
}

export default Checkout;
