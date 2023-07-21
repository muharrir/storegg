import Image from "next/image";
import Link from "next/link";
import React from "react";

function Success() {
  return (
    <section className="h-screen mx-4 lg:mx-0">
      <div className="justify-center items-center h-full w-full flex flex-col text-center text-_blue">
        <Image
          src={"/img/success-upload.png"}
          alt="not-found"
          width={316}
          height={300}
          className="w-[70%] h-[211px] lg:w-[316px] lg:h-[300px]"
        />
        <h2 className="mt-[50px] lg:mt-[70px] font-bold text-[32px]">
          Well Done!
        </h2>
        <p className="mt-[10px] text-lg">
          Kamu sudah bisa melakukan top up <br /> dan menjadi pemenang!
        </p>
        <Link href={"/"} className="w-full">
          <button className="mt-[50px] bg-_blue2 w-full lg:w-[170px] h-[50px] rounded-full text-white font-medium">
            Top Up
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Success;
