import Image from "next/image";
import React from "react";

interface GameItemProps {
  title: string;
  category: string;
  thumbnail:
    | "thumbnail1"
    | "thumbnail2"
    | "thumbnail3"
    | "thumbnail4"
    | "thumbnail5";
}

function GameItem(props: GameItemProps) {
  const { title, category, thumbnail } = props;
  return (
    <div className="flex flex-none group rounded-[26px] relative w-[205px] h-[270px] cursor-pointer overflow-hidden hover:border-4 hover:border-[#2B2467] hover:transition-all justify-center items-center">
      <div className="flex group-hover:h-[246px] group-hover:w-[181px] transition-all group-hover:blur-[40px] overflow-hidden">
        <Image
          src={`/img/${thumbnail}.png`}
          fill
          alt="thumbnail"
          className="w-full h-full rounded-[26px]"
        />
      </div>
      <div className="inset-0 opacity-0 group-hover:opacity-100 absolute transition-opacity flex justify-center items-center">
        <div className=" text-white">
          <div className="items-center justify-center flex ">
            <Image
              src={"/icon/ic-play.svg"}
              alt="ic-play"
              width={54}
              height={36}
              className="absolute top-20"
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="font-semibold text-xl">{title}</h1>
              <p className="font-light">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameItem;
