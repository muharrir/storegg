import Image from "next/image";
import React from "react";

function Category() {
  const item = [
    {
      id: 1,
      icon: "overview1",
      text1: "Game",
      text2: "Desktop",
      price: "18.000.500",
    },
    {
      id: 2,
      icon: "overview2",
      text1: "Game",
      text2: "Mobile",
      price: "8.455.000",
    },
    {
      id: 3,
      icon: "overview1",
      text1: "Other",
      text2: "Categories",
      price: "5.000.000",
    },
  ];

  return (
    <section>
      <h3 className="mt-[30px] text-xl font-medium text-_blue">
        Top Up Categories
      </h3>
      <div className="mt-[14px]  flex gap-x-[30px]">
        {item.map((v, i) => (
          <div key={i} className="p-[30px] w-[270px]">
            <div className="flex items-center gap-x-3">
              <Image
                src={`/icon/ic-${v.icon}.svg`}
                alt="ic-overview1"
                width={60}
                height={60}
              />
              <h3 className="text-_blue">
                {v.text1} <br /> {v.text2}
              </h3>
            </div>
            <p className="mt-6 text-_gray1 text-sm">Total Spent</p>
            <h2 className="mt-[2px] text-[22px] font-medium text-_blue">
              Rp {v.price}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
