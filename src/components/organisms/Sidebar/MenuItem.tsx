"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface MenuItem {
  id: number;
  text: string;
  icon: string;
}

function MenuItem() {
  const menu = [
    { id: 1, text: "Overview", icon: "overview", href: "/member/overview" },
    {
      id: 2,
      text: "Transactions",
      icon: "transaction",
      href: "/member/transaction",
    },
    { id: 3, text: "Messages", icon: "message", href: "/member/message" },
    { id: 4, text: "Card", icon: "card", href: "/member/card" },
    { id: 5, text: "Rewards", icon: "reward", href: "/member/reward" },
    { id: 6, text: "Settings", icon: "setting", href: "/member/setting" },
    { id: 7, text: "Log Out", icon: "logout", href: "/member/logout" },
  ];

  const pathname = usePathname();

  const isActiveMenus = (href: string) => {
    return pathname.indexOf(href) >= 0;
  };

  return (
    <div className="mt-[50px]">
      {menu.map((v, i) => (
        <Link href={v.href} key={i}>
          <div className="mt-4 flex items-center justify-between cursor-pointer">
            <div className="flex gap-x-4">
              <Image
                src={`/icon/ic-menu-${v.icon}.svg`}
                alt="ic-overview"
                width={24}
                height={24}
              />
              <h2
                className={` font-medium text-lg ${
                  isActiveMenus(v.href)
                    ? "text-_blue hover:text-_gray1"
                    : "text-_gray1 hover:text-_blue"
                }`}
              >
                {v.text}
              </h2>
            </div>
            {isActiveMenus(v.href) ? (
              <div className="w-1 h-[30px] bg-[#00BAFF] rounded-full"></div>
            ) : (
              <div className="h-[30px]"></div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuItem;
