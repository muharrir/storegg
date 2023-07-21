import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-_blueSky rounded-2xl p-5">
      <div className="flex items-center gap-4">
        <Image
          src={"/icon/ic-step3.svg"}
          alt="ic-step-3"
          width={50}
          height={50}
        />
        <h2 className="font-medium text-_blue">
          Top Up & <br /> Be The Winner
        </h2>
      </div>
      <Link href={"/"}>
        <button className="mt-5 h-[30px] text-white text-xs font-medium bg-_blue2 rounded-full w-full">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Footer;
