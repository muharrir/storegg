import Image from "next/image";
import Link from "next/link";
import React from "react";

function Success() {
  return (
    <section className="h-screen mx-4 lg:mx-0">
      <div className="justify-center items-center h-full w-full flex flex-col text-center text-_blue">
        <Image
          src={"/img/success.png"}
          alt="not-found"
          width={323}
          height={300}
          className="w-3/4 h-[200px] lg:w-[323px] lg:h-[300px]"
        />
        <h2 className="mt-[50px] lg:mt-[70px] font-bold text-[32px]">
          Checkout <br className="md:hidden" /> Completed
        </h2>
        <p className="mt-[10px] text-lg">
          Kami akan periksa pembayaran Anda <br /> dan menghubungi via WhatsApp
        </p>
        <Link href={"/"} className="w-full">
          <button className="mt-[50px] bg-_blue2 w-full lg:w-[240px] h-[50px] rounded-full text-white font-medium">
            My Dashboard
          </button>
        </Link>
        <Link href={"/"} className="w-full">
          <button className="mt-4 bg-_gray2 w-full lg:w-[240px] h-[50px] rounded-full text-_blue font-medium">
            Whatsapp Admin
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Success;
