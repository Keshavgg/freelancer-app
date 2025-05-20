import React from "react";

import { BsPeople } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { PiSuitcaseLight } from "react-icons/pi";

export default function UiComponent() {
  return (
    <div className="right flex items-center flex-col md:col-span-3 space-y-6">
      <h3 className="text-3xl font-bold text-center text-[#252422] dark:text-[#FFFFFE]">
        Unlock your freelancing potential
      </h3>
      <span className="text-md text-[#605C57] text-center dark:text-[#94a1b2]">
        Our platform connects you with a vast pool of talented freelancers,
        secure payment processing, and powerful project management tools.
      </span>
      <div className="grid grid-rows-2 grid-cols-2 w-full h-full gap-5 ">
        <div className=" p-4 rounded-md flex items-center justify-center flex-col py-6  text-center bg-[#403D39] dark:bg-[#16161a] dark:text-[#FFFFFE] text-[#FFFCF2]">
          <BsPeople className="text-xl" />
          Talented freelancers
        </div>
        <div className="bg-[#403D39] text-[#FFFCF2] p-4 rounded-md flex justify-center items-center flex-col py-6 text-center text-#674188] dark:bg-[#16161a] dark:text-[#FFFFFE]">
          <AiOutlineLock className="text-xl" />
          Secure payments
        </div>
        <div className="bg-[#403D39] text-[#FFFCF2] p-4 rounded-md flex justify-center items-center flex-col py-6 text-center dark:bg-[#16161a] dark:text-[#FFFFFE]">
          <SlCalender className="text-xl" />
          Project management
        </div>
        <div className="bg-[#403D39] text-[#FFFCF2] p-4 rounded-md flex items-center justify-center flex-col py-6 text-center dark:bg-[#16161a] dark:text-[#FFFFFE]">
          <PiSuitcaseLight className="text-xl" />
          Freelance opportunities
        </div>
      </div>
    </div>
  );
}
