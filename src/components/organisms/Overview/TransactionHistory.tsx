"use client";
import TransactionList from "@/components/molecules/TransactionList";
import React from "react";
import { usePathname } from "next/navigation";

function TransactionHistory() {
  const pathname = usePathname();

  return (
    <div className="my-[30px] overflow-y-auto">
      <div>
        <h2
          className={`text-_blue font-medium text-xl ${
            pathname === "/member/transaction" ? "hidden" : "block"
          }`}
        >
          Latest Transactions
        </h2>
        <div
          className={`mt-[14px] py-5 px-[30px] ${
            pathname === "/member/transaction" ? "w-full" : "w-[80%]"
          }`}
        >
          {/* Head */}
          <div
            className={`grid text-center text-_blue ${
              pathname === "/member/transaction" ? "grid-cols-6" : "grid-cols-5"
            }`}
          >
            <div className="col-span-2 text-left">
              <h2>Game</h2>
            </div>
            <div>
              <h2>Item</h2>
            </div>
            <div>
              <h2>Price</h2>
            </div>
            <div>
              <h2>Status</h2>
            </div>
            <div
              className={`${
                pathname === "/member/transaction" ? "block" : "hidden"
              }`}
            >
              <h2>Action</h2>
            </div>
          </div>

          {/* Body */}
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
