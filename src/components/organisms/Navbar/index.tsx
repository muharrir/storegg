import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="mx-4 mt-[30px] flex items-center justify-between md:mx-14 md:mt-10 lg:mx-[120px]">
      <Link href={"/"}>
        <Image src={"/icon/logo.svg"} alt={"logo"} width={60} height={60} />
      </Link>
      <div className="flex items-center gap-10">
        <div>
          <ul className="hidden gap-x-10  lg:flex">
            <Menu title="Home" href="/" isActive />
            <Menu title="Games" href="" />
            <Menu title="Rewards" href="" />
            <Menu title="Discover" href="" />
            <Menu title="Global Rank" href="" />
          </ul>
        </div>
        <button className="hidden h-[50px] w-[120px] rounded-full bg-gray2 text-lg text-blue md:block">
          Sign In
        </button>
      </div>
    </div>
  );
}
