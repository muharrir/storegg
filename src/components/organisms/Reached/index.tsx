import React from "react";

function Reached() {
  return (
    <section className="mt-[50px] lg:mt-[100px] flex flex-col lg:flex-row items-center justify-center w-full gap-y-[30px]">
      <div className="justify-center items-center text-center">
        <h2 className="font-bold text-[32px] text-_blue">290M+</h2>
        <p className="text-lg text-_gray1">Players Top Up</p>
      </div>
      <div className="w-[240px] h-[2px] lg:w-[2px] lg:h-20 bg-_gray2 mx-[70px]"></div>
      <div className="justify-center items-center text-center">
        <h2 className="font-bold text-[32px] text-_blue">12.500</h2>
        <p className="text-lg text-_gray1">Games Available</p>
      </div>
      <div className="w-[240px] h-[2px] lg:w-[2px] lg:h-20 bg-_gray2 mx-[70px]"></div>
      <div className="justify-center items-center text-center">
        <h2 className="font-bold text-[32px] text-_blue">99.9%</h2>
        <p className="text-lg text-_gray1">Happy Players</p>
      </div>
      <div className="w-[240px] h-[2px] lg:w-[2px] lg:h-20 bg-_gray2 mx-[70px]"></div>
      <div className="justify-center items-center text-center">
        <h2 className="font-bold text-[32px] text-_blue">4.7</h2>
        <p className="text-lg text-_gray1">Rating Worldwide</p>
      </div>
    </section>
  );
}

export default Reached;
