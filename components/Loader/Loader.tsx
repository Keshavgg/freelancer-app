"use client";

import React from "react";
import "./loader.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { MdContentPasteSearch } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";

gsap.registerPlugin(useGSAP);
function Loader() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".box", {
      opacity: 0,
    });
    tl.from(".font", {
      y: "22px",
      delay: 0.3,
      stagger: 0.7,
      ease: "circ.inOut",
      opacity: 0,
    });
    tl.to(".font", {
      y: "-22px",
      delay: 0.1,
      stagger: 0.5,
      ease: "circ.inOut",
      opacity: 0,
    });
    tl.to(".box", {
      opacity: 0,
    });
    tl.to(".main", {
      height: 0,
      duration: 0.5,
      ease: "power3.in",
    });
    tl.to(".main", {
      display: "none",
    });
  });

  return (
    <>
      <div className="main fixed h-full w-full bg-[#242424]">
        <div className="fixed h-full w-full flex justify-center items-center z-20">
          <div className="flex flex-col gap-6 text-2xl text-green-200 font-[Playwrite_CU] ">
            <div className="overflow-hidden flex justify-center">
              <div className="font flex flex-row gap-3 items-center">
                <MdOutlineLocalPostOffice className="text-green-300" />
                Job Posted
              </div>
            </div>
            <div className="overflow-hidden flex justify-center">
              <div className="font font flex flex-row gap-3 items-center">
                <MdContentPasteSearch className="text-green-300" />
                Finding posts
              </div>
            </div>
            <div className="overflow-hidden flex justify-center">
              <div className="font font flex flex-row gap-3 items-center">
                <IoIosPersonAdd className="text-green-300" />
                Freelancer Hired
              </div>
            </div>
            <div className="overflow-hidden flex justify-center">
              <div className="font font flex flex-row gap-3 items-center">
                <IoCheckmarkDoneSharp className="text-green-300" />
                Getting Things Ready
              </div>
            </div>
            <div className="overflow-hidden flex justify-center">
              <div className="font font flex flex-row gap-3 items-center">
                <AiOutlineFileDone className="text-green-300" />
                Deal Accepted
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="loader">
            <div className="box">
              <div className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 94 94"
                  className="svg"
                ></svg>
              </div>
            </div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
