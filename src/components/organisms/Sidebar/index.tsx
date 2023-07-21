import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

function Sidebar() {
  return (
    <div className="w-[280px] fixed h-full py-[30px] mx-[30px] ">
      <div className="h-full justify-between flex flex-col">
        <div>
          <div className="w-full flex flex-col justify-center items-center text-center">
            <Image
              src={"/img/profile.png"}
              alt="img-profile"
              width={90}
              height={90}
              className="rounded-full"
            />
            <h2 className="mt-5 font-bold text-xl text-_blue">Shayna Anne</h2>
            <p className="mt-[10px] text-_gray1">shayna@anne.com</p>
          </div>
          <MenuItem />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
