import React from "react";
import Escrow from "@/public/escrow.jpg";
import { FaLock } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";

import Image from "next/image";


  export default function Payments() {
    return (
      <section className=" py-8 md:py-16 dark:bg-[#16161a] bg-[#FFFCF2] ">
        <div className="w-full container mx-auto grid md:grid-cols-6 items-center px-8 md:gap-10 gap-10">
          <div className="flex justify-center items-center flex-col md:col-span-3 space-y-6"> 
            <span className="bg-[#335239] text-[#FFFCF2] self-center flex justify-center items-center rounded-full py-3 px-4 md:self-start dark:bg-[#7f5af0]  dark:text-[#FFFFFE]">
              Secure Payments
            </span>
            <h3 className="text-4xl text-center md:text-left md:text-6xl tracking-tighter font-bold leading-12 text-[#252422] dark:text-[#fffffe] mt-4">
              Worry-Free Payments and Escrow
            </h3>
            <p className="text-lg md:text-xl text-center md:text-left text-[#605C57] my-2 dark:text-[#94a1b2] ">
              Our platform offers a secure payment system with escrow services,
              ensuring that your funds are protected and released only upon
              successful project completion.
            </p>
            <div className="grid md:grid-cols-2 grid-rows-2 gap-4 text-[#605C57] dark:text-[#fffffe]">
              <div>
                <div className="flex justify-start items-center gap-1">
                  <FaLock className="text-xl text-[#252422] dark:text-white" />
                  <h4 className="font-bold text-xl dark:text-[#2cb67d]">Secure Payments</h4>
                </div>
                <p className="text-lg ml-5">
                  Protect your transactions with our advanced security measures.
                </p>
              </div>
              <div>
                <div className="flex justify-start items-center gap-1">
                  <FaLock className="text-xl dark:text-white" />
                  <h4 className="font-bold text-lg dark:text-[#2cb67d]">Escrow Services</h4>
                </div>
  
                <p className="text-lg ml-5">
                  Ensure project success with our trusted escrow system.
                </p>
              </div>
              <div>
                <div className="flex justify-start items-center gap-1">
                  <MdOutlineVerified className="text-xl dark:text-white" />
                  <h4 className="font-bold text-lg dark:text-[#2cb67d]">Verified Talent</h4>
                </div>
                <p className="text-lg ml-5">
                  Hire pre-screened freelancers with proven track records.
                </p>
              </div>
              <div>
                <div className="flex justify-start items-center gap-1">
                  <RiShutDownLine className="text-xl dark:text-white" />
                  <h4 className="font-bold text-lg dark:text-[#2cb67d]">24/7 Support</h4>
                </div>
                <p className="text-lg ml-5">
                  Get assistance whenever you need it, day or night.
                </p>
              </div>
            </div>
          </div>
  
          <div className="rounded-md md:col-span-3">
            <Image src={Escrow} alt="escrow-img" className="" />
          </div>
        </div>
      </section>
    );
  }
  