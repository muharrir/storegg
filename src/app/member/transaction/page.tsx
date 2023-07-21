import TransactionTab from "@/components/molecules/TransactionTab";
import TransactionHistory from "@/components/organisms/Overview/TransactionHistory";
import React from "react";

function Transaction() {
  return (
    <div className="ml-[24%] w-[80%] py-[30px] mx-[50px]">
      <h2 className="text-[32px] text-_blue font-bold">My Transactions</h2>
      <p className="mt-[30px] text-lg text-_gray1">You’ve spent</p>
      <h1 className="mt-1 text-_blue text-[42px] font-medium ">
        Rp 4.518.000.500
      </h1>
      <TransactionTab />
      <TransactionHistory />
    </div>
  );
}

export default Transaction;
