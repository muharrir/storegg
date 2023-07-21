import Image from "next/image";
import React from "react";

function Story() {
  return (
    <section className="pt-[100px] mx-4 lg:mx-[100px]">
      <div className="flex items-center justify-center gap-x-[120px]">
        <div className="hidden lg:block" data-aos="zoom-in">
          <Image
            src={"/img/illustration.png"}
            width={612}
            height={452}
            alt="illustration"
          />
        </div>
        <div className="w-full lg:w-[25%]">
          <h2 className="font-bold text-[32px] text-_blue">
            Win the battle.
            <br />
            Be the Champion.
          </h2>
          <p className="mt-[30px] text-lg text-_blue">
            Kami menyediakan jutaan cara untuk membantu players menjadi pemenang
            sejati
          </p>
          <button className="mt-[30px] bg-_gray2 w-full h-[50px] lg:w-[190px]  rounded-full text-_blue text-lg">
            Read Story
          </button>
        </div>
      </div>
    </section>
  );
}

export default Story;
