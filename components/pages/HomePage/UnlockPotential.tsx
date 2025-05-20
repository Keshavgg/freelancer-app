import React from "react";
import innovation from "@/public/innovation.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function UnlockPotential() {
  return (
    <main className="w-full mx-auto py-12 sm:py-12 bg-[#FFFCF2] dark:bg-[#16161a]">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 md:gap-10 px-10 sm:px-16">
        {/* Container 1 */}
        <div className="flex flex-col justify-center col-span-4 gap-1">
          <h2 className="font-bold text-4xl sm:text-5xl tracking-tighter lg:text-7xl text-[#252422] dark:text-[#fffffe]">
            Unlock Your Potential With Our Freelance Platform
          </h2>
          <div className="mt-1 text-lg sm:text-xl">
            <h3 className="text-[#605C57] dark:text-[#94a1b2] font-medium">
              Connect with top-tier freelancers and build your dream projects.
              Our platform offers a seamless experience for finding, hiring, and
              managing remote talent.
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4">
            <Input
              placeholder="Search any talent..."
              className="border-[1px] text-md dark:border-[#72757e] py-6 rounded-full px-6 border-none bg-[#403D39] text-[#FFFCF2] placeholder:text-[#FFFCF2]"
            />
            <div className="flex flex-col w-full md:flex-row gap-4">
              <Link
                href="/hire-talent"
                className="px-8 py-4 sm:py-6 w-full lg:py-3 text-sm sm:text-md lg:text-sm text-center dark:bg-[#7f5af0] bg-[#2d6a4f] hover:bg-[#357d5c] text-[#FFFCF2] dark:text-white rounded-full"
              >
                Find Freelancers
              </Link>
              <Link
                href="/post-projects"
                className="px-8 py-4 sm:py-6 w-full lg:py-3 text-sm sm:text-md lg:text-sm text-center dark:bg-[#7f5af0] bg-[#2d6a4f] hover:bg-[#357d5c] text-[#FFFCF2] dark:text-white rounded-full"
              >
                Post a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Container 2 */}
        <div className="col-span-4 md:col-span-2">
          <Image
            src={innovation}
            alt="innovation image"
            className="bg-cover rounded-md"
          />
        </div>
      </div>
    </main>
  );
}
