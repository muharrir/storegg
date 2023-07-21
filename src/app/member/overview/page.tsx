import Category from "@/components/organisms/Overview/Category";
import TransactionHistory from "@/components/organisms/Overview/TransactionHistory";
import React from "react";

function Overview() {
  return (
    <div className="ml-[24%] w-[90%] py-[30px] mx-[50px]">
      <h2 className="text-[32px] text-_blue font-bold">Overview</h2>
      <Category />
      <TransactionHistory />
    </div>
  );
}

export default Overview;
