import Image from "next/image";
import React from "react";

function Setting() {
  return (
    <div className="ml-[24%] w-[30%] py-[30px] mx-[50px]">
      <h2 className="text-[32px] text-_blue font-bold">Settings</h2>

      <div className="mt-[30px] p-[30px]">
        <div className="flex gap-x-5">
          <div className=" flex relative group w-[90px] h-[90px] items-center justify-center cursor-pointer">
            <Image
              src={"/img/profile.png"}
              alt="img-profile"
              width={90}
              height={90}
              className="rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-_blue opacity-0 group-hover:opacity-50 transition-opacity "></div>
            <Image
              src={"/icon/ic-trash.svg"}
              alt="ic-trash"
              width={24}
              height={24}
              className="absolute  flex opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="bg-_gray2 w-[90px] h-[90px] rounded-full flex justify-center items-center cursor-pointer relative">
            <Image
              src={"/icon/ic-upload.svg"}
              alt="ic-upload"
              width={27}
              height={27}
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <form className="mt-[30px] space-y-[30px]">
          <div className="flex flex-col gap-y-[10px]">
            <label className="text-_blue font-medium text-lg">Full Name</label>
            <input
              type="text"
              className="py-3 px-[26px] border border-_blue rounded-full text-_blue text-lg"
              placeholder="Enter your Full Name"
            />
          </div>

          <div className="flex flex-col gap-y-[10px]">
            <label className="text-_blue font-medium text-lg">
              Email Address
            </label>
            <input
              type="text"
              className="py-3 px-[26px] border border-_blue rounded-full text-_blue text-lg"
              placeholder="Enter your Email Address"
            />
          </div>

          <div className="flex flex-col gap-y-[10px]">
            <label className="text-_blue font-medium text-lg">Phone</label>
            <input
              type="number"
              className="py-3 px-[26px] border border-_blue rounded-full text-_blue text-lg"
              placeholder="Enter your Phone"
            />
          </div>
        </form>

        <div className="mt-[50px]">
          <button className=" bg-_blue2 rounded-full h-[50px] w-full text-white text-lg font-medium">
            Save My Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
