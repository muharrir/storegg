import GameItem from "@/components/molecules/GameItem";
import React from "react";

function FeaturedGame() {
  return (
    <section className="mt-[100px] mx-4 lg:mx-[120px]">
      <div>
        <h1 className="text-_blue font-bold text-[32px]">
          Our Featured <br />
          Games This Year
        </h1>
      </div>
      <div
        className="mt-[30px] flex gap-x-[44px] lg:justify-between overflow-x-auto"
        data-aos="fade-up"
      >
        <GameItem
          title="Super Mechs"
          category="Mobile"
          thumbnail="thumbnail1"
        />
        <GameItem
          title="Call of Duty: Modern"
          category="Mobile"
          thumbnail="thumbnail2"
        />
        <GameItem
          title="Mobile Legends"
          category="Mobile"
          thumbnail="thumbnail3"
        />
        <GameItem
          title="Clash of Clans"
          category="Mobile"
          thumbnail="thumbnail4"
        />
        <GameItem title="Valorant" category="Mobile" thumbnail="thumbnail5" />
      </div>
    </section>
  );
}

export default FeaturedGame;
