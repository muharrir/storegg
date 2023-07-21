import Image from "next/image";
import Link from "next/link";
import React from "react";

function SignIn() {
  return (
    <section className="h-screen flex">
      <div className="w-full mx-4 lg:mx-0 lg:w-[50%] h-full flex items-center justify-center">
        <div className="w-full lg:w-[60%] items-center justify-center">
          <Image src={"/img/logo.png"} alt="logo" width={60} height={60} />
          <h1 className="mt-[50px] font-bold text-[32px] text-_blue">
            Sign In
          </h1>
          <p className="mt-[10px] text-lg text-_blue">
            Masuk untuk melakukan proses top up
          </p>
          <form className="mt-[50px] space-y-[30px] text-_blue">
            <div>
              <label className="font-medium">Email Address</label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="mt-[10px] w-full border border-_blue rounded-full py-3 px-[26px]"
              />
            </div>

            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-[10px] w-full border border-_blue rounded-full py-3 px-[26px]"
              />
            </div>

            <Link href={"/"}>
              <button className="mt-[50px] h-[50px] w-full bg-_blue2 rounded-full text-white font-medium">
                Continue to Sign In
              </button>
            </Link>

            <Link href={"/sign-up"}>
              <button className="mt-4 h-[50px] w-full bg-_gray2 rounded-full text-_blue font-medium">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="w-[50%] bg-[#1A1640] h-full text-center hidden lg:flex flex-col items-center justify-center ">
        <Image
          src={"/img/illustration.png"}
          alt="illustration"
          width={502}
          height={391}
        />
        <h3 className="mt-[50px] text-white text-[32px] font-bold">
          Win the battle. <br /> Be the Champion.
        </h3>
        <p className="mt-[30px] text-white text-lg">
          Kami menyediakan jutaan cara untuk <br /> membantu players menjadi{" "}
          <br /> pemenang sejati
        </p>
      </div>
    </section>
  );
}

export default SignIn;
