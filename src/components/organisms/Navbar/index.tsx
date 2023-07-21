import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Auth from "./Auth";

export default function Navbar() {
  return (
    <nav className="mx-4 mt-[30px] flex items-center justify-between md:mx-14 md:mt-10 lg:mx-[120px]">
      <Link href={"/"}>
        <Image src={"/icon/logo.svg"} alt={"logo"} width={60} height={60} />
      </Link>
      <div className="flex items-center gap-10">
        <div>
          <ul className="hidden gap-x-10 lg:flex">
            <Menu title="Home" isActive />
            <Menu title="Games" />
            <Menu title="Rewards" />
            <Menu title="Discover" />
            <Menu title="Global Rank" />
          </ul>
        </div>

        <Auth />
      </div>
    </nav>
  );
}
