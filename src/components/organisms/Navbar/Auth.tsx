"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Auth {
  isLogin?: boolean;
}

export default function Auth(props: Partial<Auth>) {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  const { isLogin } = props;

  if (isLogin) {
    return (
      <>
        <div className="relative flex gap-10">
          <hr className="h-auto border" />
          <div>
            <Image
              src={"/img/profile.png"}
              width={40}
              height={40}
              alt="profile"
              className="rounded-full cursor-pointer"
              onClick={handleClick}
            />
          </div>
          {isClick && (
            <ul className="absolute z-10 mt-14 right-0 w-52 p-5 bg-white rounded-2xl shadow-[-4px_10px_40px_8px_rgba(0,0,0,0.075)] cursor-pointer text-_gray1 text-lg space-y-4 ">
              <li className="decoration-_blue2 hover:underline hover:text-_blue2">
                <Link href={""}>My Profile</Link>
              </li>
              <li className="decoration-_blue2 hover:underline hover:text-_blue2">
                <Link href={""}>Wallet</Link>
              </li>
              <li className="decoration-_blue2 hover:underline hover:text-_blue2">
                <Link href={""}>Account Setting</Link>
              </li>
              <li className="decoration-_blue2 hover:underline hover:text-_blue2">
                <Link href={""}>Log Out</Link>
              </li>
            </ul>
          )}
        </div>
      </>
    );
  }
  return (
    <Link href={"/sign-in"}>
      <button className="h-[50px] w-[120px] rounded-full bg-_gray2 text-lg text-_blue md:block">
        Sign In
      </button>
    </Link>
  );
}
