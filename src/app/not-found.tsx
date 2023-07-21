import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="h-screen mx-4 lg:mx-0">
      <div className="justify-center items-center h-full w-full flex flex-col text-center text-_blue">
        <Image
          src={"/img/notfound.png"}
          alt="not-found"
          width={483}
          height={300}
          className="w-4/5 h-[180px] lg:w-[483px] lg:h-[300px]"
        />
        <h2 className="mt-[70px] font-bold text-[32px]">Oops! Not Found</h2>
        <p className="mt-[10px] text-lg">
          Halaman yang anda kunjungi <br /> tidak tersedia pada sistem kami
        </p>
        <Link href={"/"} className="w-full">
          <button className="mt-[50px] bg-_blue2 w-full lg:w-[190px] h-[50px] rounded-full text-white font-medium">
            Home Page
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
