import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#403D39] px-8 py-20 dark:bg-black">
      <div className=" grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between px-4 ">
        <div className="flex justify-start  flex-col 0 space-y-2 text-[#F3EFE4] dark:text-white">
          <h4 className="font-bold text-base underline underline-offset-4">
            Company
          </h4>
          <Link href="/about">About Us</Link>
          <Link href="/our-team">Our Team</Link>
        </div>
        <div className=" flex justify-start flex-col text-[#F3EFE4] space-y-2  dark:text-white">
          <h4 className="font-bold text-base underline underline-offset-4">
            Freelancers
          </h4>
          <a href="">Browse Freelancers</a>
          <a href="">Become a Freelancer</a>
          <a href="">Freelancer Profiles</a>
        </div>
        <div className=" flex justify-start flex-col text-[#F3EFE4] space-y-2  dark:text-white">
          <h4 className="font-bold text-base underline underline-offset-4">
            Clients
          </h4>
          <a href="">Post a Project</a>
          <a href="">Hire Freelancers</a>
        </div>
        <div className=" flex justify-start flex-col text-[#F3EFE4] space-y-2  dark:text-white">
          <h4 className="font-bold text-base underline underline-offset-4">
            Legal
          </h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
        <div className=" flex justify-start flex-col text-[#F3EFE4] space-y-2 dark:text-white">
          <h4 className="font-bold text-base underline underline-offset-4">
            Contact
          </h4>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </div>
  );
}
