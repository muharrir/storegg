import Image from "next/image";
import React from "react";

export default function Illustration() {
  return (
    <div className="hidden lg:flex relative" data-aos="zoom-in">
      <Image src={"/img/hero.png"} width={490} height={484} alt="hero_image" />
      <div className="absolute top-24 -left-16">
        <div className="rounded-2xl bg-white w-[207px] h-[112px] p-[14px]">
          <div className="flex items-center gap-x-[10px] ">
            <Image
              src={"/img/profile.png"}
              width={40}
              height={40}
              alt="profile"
              className="rounded-full w-[40px] h-[40px]"
            />
            <div>
              <h4 className="text-sm font-semibold text-_blue">Shayna Anne</h4>
              <p className="text-xs font-light text-_gray1">
                Professional Gamer
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-x-1">
            <Image
              src={"/icon/star.svg"}
              width={28}
              height={28}
              alt="icon_star"
            />
            <Image
              src={"/icon/star.svg"}
              width={28}
              height={28}
              alt="icon_star"
            />
            <Image
              src={"/icon/star.svg"}
              width={28}
              height={28}
              alt="icon_star"
            />
            <Image
              src={"/icon/star.svg"}
              width={28}
              height={28}
              alt="icon_star"
            />
            <Image
              src={"/icon/star.svg"}
              width={28}
              height={28}
              alt="icon_star"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-52 -right-12">
        <div className="rounded-2xl bg-white w-[130px] flex flex-col justify-center items-center py-5">
          <div className="relative justify-center items-center">
            <Image
              src={"/img/hero1.png"}
              width={80}
              height={80}
              alt="Lann Knight"
              className="rounded-full w-[80px] h-[80px]"
            />
            <h4 className="absolute -bottom-1 left-[50%] -ml-5 text-[10px] font-medium bg-[#00BAFF] text-white px-2 rounded-md">
              New
            </h4>
          </div>
          <div className="text-center mt-5">
            <h3 className="text-sm font-semibold text-_blue">Lann Knight</h3>
            <p className="text-xs font-light text-_gray1">Dota 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
