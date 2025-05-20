import React from "react";
import Link from "next/link";

export default function JoinCommunity() {
  return (
    <div className="mx-auto px-8 pt-16 rounded-t-3xl flex flex-col items-center -mt-6 dark:bg-[#000000] bg-[#403D39]">
    <div className="justify-evenly items-center grid lg:grid-cols-5 gap-4 lg:gap-4 px-4">
      <div className="flex flex-col md:col-span-3 col-span-5">
        <h1 className="text-3xl font-bold tracking-tighter text-[#FFFCF2] dark:text-[#fffffe]">
          Join Our Thriving Freelance Community
        </h1>
        <p className="text-md text-s-200 dark:text-[#94a1b2] my-1 text-[#CCC5B9]">
          Whether you&apos;re a freelancer looking for new opportunities or a
          client in need of top-notch talent, our platform is here to connect
          you.
        </p>
      </div>
        <div className="left flex flex-col sm:flex-row xl:flex-row items-center gap-3 md:col-span-2 col-span-5">
          <Link
            href="/hire-talent"
            className="px-8 shrink-0 py-4 text-md lg:text-sm text-center   bg-[#2d6a4f] hover:bg-[#357d5c] text-[#FFFCF2] dark:bg-[#7f5af0] dark:text-white rounded-full"
          >
            Hire a Freelancer
          </Link>
          <Link
            href="/sign-in"
            className="px-8 shrink-0 py-4  text-md lg:text-sm text-center  dark:bg-[#7f5af0] bg-[#2d6a4f] hover:bg-[#357d5c] text-[#FFFCF2] dark:text-white rounded-full"
          >
            Become a Freelancer
          </Link>
        </div>
      </div>
      <div className="h-[1px] w-[90%]  bg-[#CCC5B9] mt-14 "></div>
    </div>
  );
}
