import Image from "next/image";
import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <section className="flex lg:w-full h-full lg:h-screen items-center justify-center mx-4 lg:mx-0 my-[30px] lg:my-0">
      <div className="w-full lg:w-[28%] h-full flex items-center justify-start text-_blue">
        <div className="lg:w-full">
          <Image src={"/img/logo.png"} alt="logo" width={60} height={60} />
          <h2 className="mt-[50px] font-bold text-[32px] ">Sign Up</h2>
          <p className="mt-[10px] text-xl">Daftar dan bergabung dengan kami</p>
          <form className="mt-[50px] space-y-[30px] text-_blue">
            <div>
              <label className="font-medium">Fullname</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="mt-[10px] w-full border border-_blue rounded-full py-3 px-[26px]"
              />
            </div>

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

            <Link href={"/sign-up/upload"}>
              <button className="mt-[50px] h-[50px] w-full bg-_blue2 rounded-full text-white font-medium">
                Continue
              </button>
            </Link>

            <Link href={"/sign-in"}>
              <button className="mt-4 h-[50px] w-full bg-_gray2 rounded-full text-_blue font-medium">
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
