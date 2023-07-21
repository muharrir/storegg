"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface Category {
  id: number;
  text: string;
}

function Photo() {
  const [isClick, setIsClick] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const category: Category[] = [
    { id: 1, text: "First Person Shoter" },
    { id: 2, text: "Role Playing Game" },
    { id: 3, text: "Arcade" },
    { id: 4, text: "Sport" },
  ];

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleCategorySelect = (category: string) => {
    setSelected(category);
    setIsClick(false);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedImageUrl(file ? URL.createObjectURL(file) : null);
    setSelectedImage(file || null);
  };

  const menuRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (
        e.target !== menuRef.current &&
        e.target !== selectRef.current &&
        isClick
      ) {
        setIsClick(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("click", handleWindowClick);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("click", handleWindowClick);
      };
    }
  }, [isClick]);

  return (
    <section className="h-screen lg:w-full select-none mx-4 lg:mx-0">
      <div className="py-[50px] lg:py-0 h-full w-full flex flex-col lg:justify-center items-center justify-between">
        <div className="items-center w-full flex flex-col">
          <div className="relative">
            <div className="w-[120px] h-[120px] bg-_gray2 rounded-full flex justify-center items-center cursor-pointer">
              {selectedImageUrl ? (
                <Image
                  src={selectedImageUrl}
                  alt="ic-upload"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] rounded-full bg-cover"
                />
              ) : (
                <Image
                  src={"/icon/ic-upload.svg"}
                  alt="ic-upload"
                  width={36}
                  height={36}
                />
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageSelect}
            />
          </div>
          <div className="mt-5 text-_blue text-center">
            <h2 className="font-bold text-xl">Shayna Anne</h2>
            <h4 className="text-lg">shayna@anne.com</h4>
          </div>
          <div className="flex relative flex-col mt-[70px] lg:mt-[50px] w-full lg:w-[437px]">
            <h2 className="text-_blue font-medium text-lg">Favorite Game</h2>
            <div
              className="mt-[10px] py-3 px-[26px] rounded-full border border-_blue flex justify-between cursor-pointer"
              ref={selectRef}
              onClick={handleClick}
            >
              <h2 className="text-_blue text-lg">
                {selected ? selected : "Select Category"}
              </h2>
              <Image
                src={"/icon/ic-arrow.svg"}
                alt="ic-arrow"
                width={24}
                height={24}
              />
            </div>
            {isClick && (
              <ul
                className="bg-white z-10 top-[91px] w-full absolute border border-_blue shadow-xl shadow-gray-500 rounded-2xl py-3 space-y-1 text-lg text-_blue"
                ref={menuRef}
              >
                {category.map((v, i) => (
                  <li
                    className="hover:bg-blue-500 hover:text-white w-full px-[26px]"
                    key={i}
                    onClick={() => handleCategorySelect(v.text)}
                  >
                    {v.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="w-full lg:w-[437px]">
          <Link href={"/sign-up/upload/success"}>
            <button className="mt-[50px] w-full h-[50px] rounded-full bg-_blue2 text-white text-lg font-medium ">
              Create My Account
            </button>
          </Link>
          <Link href={"/"}>
            <h2 className="mt-[30px] text-lg text-_blue text-center underline">
              Terms & Conditions
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Photo;
