import CheckoutItem from "@/components/organisms/CheckoutItem";
import CheckoutPayment from "@/components/organisms/CheckoutPayment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Details() {
  return (
    <div className="ml-[24%] w-[90%] py-[30px] mx-[50px]">
      <h2 className="text-[32px] text-_blue font-bold">Details #GG001</h2>
      <div className="mt-[30px] p-[30px] w-[80%]">
        <div className="justify-between flex items-center">
          <div className="flex items-center gap-x-5">
            <Image
              src={"/img/thumbnail3.png"}
              alt="img-mobile-legend"
              width={200}
              height={130}
              className="w-[200px] h-[130px] rounded-3xl object-cover object-top"
            />
            <div>
              <h2 className="text-_blue font-bold text-xl">
                Mobile Legends: <br /> The New Battle 2021
              </h2>
              <p className="mt-[10px] text-_gray1">Category: Mobile</p>
            </div>
          </div>
          <div>
            <button className="w-[130px] h-[40px] text-[#FEBD57] rounded-full bg-[#FFEED3] text-center font-medium">
              Pending
            </button>
          </div>
        </div>
        <hr className="mt-[50px]" />
        <CheckoutItem />
        <CheckoutPayment />
        <Link href={"https://wa.me/+6282233445566"} target="_blank">
          <button className="mt-[50px] w-[280px] h-[50px] bg-_blue2 rounded-full text-center text-white text-lg font-medium">
            WhatsApp ke Admin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
