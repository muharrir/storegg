import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function TransactionList() {
  const item = [
    {
      id: 1,
      img: "thumbnail3",
      text: "Mobile Legend",
      type: "Desktop",
      item: "200",
      price: "290.000",
      status: "Pending",
    },
    {
      id: 2,
      img: "thumbnail2",
      text: "Call of Duty: Modern",
      type: "Desktop",
      item: "550",
      price: "740.000",
      status: "Success",
    },
    {
      id: 3,
      img: "thumbnail4",
      text: "Clash of CLans",
      type: "Mobile",
      item: "100",
      price: "120.000",
      status: "Failed",
    },
    {
      id: 4,
      img: "thumbnail5",
      text: "Valorant",
      type: "Mobile",
      item: "225",
      price: "200.000",
      status: "Pending",
    },
  ];

  const pathname = usePathname();

  return (
    <>
      {item.map((v, i) => (
        <div
          className={`my-5 grid text-center items-center text-_blue font-medium ${
            pathname === "/member/transaction" ? "grid-cols-6" : "grid-cols-5"
          }`}
          key={i}
        >
          <div className="col-span-2 text-left flex items-center gap-x-4">
            <Image
              src={`/img/${v.img}.png`}
              alt="img-mobile-legend"
              width={120}
              height={120}
              className="w-[80px] h-[60px] rounded-2xl object-center object-cover"
            />
            <div>
              <h2>{v.text}</h2>
              <p className="mt-1 text-xs font-normal text-_gray1">{v.type}</p>
            </div>
          </div>
          <div>
            <h2>{v.item} Gold</h2>
          </div>
          <div>
            <h2>Rp {v.price}</h2>
          </div>
          <div className="ml-12">
            <div className="flex items-center justify-start text-start gap-x-[6px]">
              <div
                className={`w-[6px] h-[6px] rounded-full ${
                  v.status === "Pending"
                    ? "bg-[#FEBD57]"
                    : v.status === "Success"
                    ? "bg-[#1ABC9C]"
                    : "bg-[#FE5761]"
                }`}
              ></div>
              <h4>{v.status}</h4>
            </div>
          </div>
          <Link
            href={"/member/transaction/details"}
            className={`${
              pathname === "/member/transaction" ? "block" : "hidden"
            }`}
          >
            <button className="bg-[#E7EAF5] w-[112px] h-[40px] text-center text-_blue text-sm rounded-full">
              Details
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TransactionList;
