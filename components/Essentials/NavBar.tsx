import React from "react";
import Link from "next/link";

import { navItems } from "@/data/NavItems";
import Logo from "@/components/Essentials/Logo";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { auth } from "@/auth";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";
import SignOutButton from "@/components/pages/SignOut/SignOutButton";
import { CiSettings } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { FaLifeRing } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import MobileNav from "@/components/Essentials/MobileNav";
import { Input } from "@/components/ui/input";

export default async function NavBar() {
  const session = await auth();
  console.log(session);

  return (
    <div className=" mx-auto flex justify-between py-8 px-4 md:px-20 dark:bg-black dark:text-white bg-[#403D39] text-[#F7EFE5]">
      <div className="flex gap-8 items-center">
        <Logo />
      </div>

      {!session && (
        <nav className="hidden lg:flex gap-6 text-xl items-center">
          {navItems.map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className="hover:underline hover:underline-offset-4"
            >
              {item.text}
            </Link>
          ))}
        </nav>
      )}

      <div className="hidden lg:flex gap-6 items-center">
        <div className="start-1">
          {session?.user.role === "freelancer" && (
            <div className="flex items-center gap-4 text-xl relative">
              <Input
                placeholder="Search Jobs...."
                className="rounded-full w-96 text-black"
              />
              <FcSearch className="absolute right-3" />
            </div>
          )}
          {session?.user.role === "client" && (
            <div className="flex items-center gap-4 text-xl relative">
              <Input
                placeholder="Search talents...."
                className="rounded-full w-96"
              />
              <FcSearch className="absolute right-3" />
            </div>
          )}
        </div>
        {session ? (
          <div className="flex gap-6 items-center flex-row-reverse">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                {session.user.image ? (
                  <Image
                    src={session?.user?.image}
                    className="rounded-full"
                    alt="user-img"
                    height={40}
                    width={40}
                  />
                ) : (
                  <FaRegUserCircle className="text-2xl" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-[#F3EFE4] dark:bg-[#16161a] font-light border border-gray-200 rounded-lg shadow-lg mt-2 w-60 space-y-2 px-4 py-4 z-10"
              >
                <DropdownMenuLabel className="text-gray-800 dark:text-[#FFFCF2] font-light px-4 py-2">
                  Hii, {session.user.name || "User"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border-t border-[#CCC5B9] dark:border-gray-200" />
                <DropdownMenuItem className="text-gray-800 dark:text-[#FFFCF2] hover:outline-none hover:bg-[#E0DACF] dark:hover:bg-[#33312E] rounded-md px-4 py-2 flex items-center gap-2">
                  <Link
                    href={`/${session.user.role}/my-profile`}
                    className="flex items-center gap-2 "
                  >
                    <FaUser className="text-xl" /> My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-800 dark:text-[#FFFCF2] hover:outline-none hover:bg-[#E0DACF]  dark:hover:bg-[#33312E] rounded-md px-4 py-2 flex items-center gap-2">
                  <Link href={`/billing`} className="flex items-center gap-2">
                    <FaCreditCard className="text-xl" /> Billing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-800 dark:text-[#FFFCF2] hover:outline-none hover:bg-[#E0DACF]  dark:hover:bg-[#33312E] rounded-md px-4 py-2 flex items-center gap-2">
                  <Link
                    href={`/${session.user.role}/analytics`}
                    className="flex items-center gap-2"
                  >
                    <FaChartLine className="text-2xl" /> Analytics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-800 dark:text-[#FFFCF2] hover:outline-none hover:bg-[#E0DACF]  dark:hover:bg-[#33312E] rounded-md px-4 py-2 flex items-center gap-2">
                  <Link
                    href={`/${session.user.role}/dashboard`}
                    className="flex items-center gap-2"
                  >
                    <FaHome className="text-2xl" /> Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-800 dark:text-[#FFFCF2] hover:outline-none hover:bg-[#E0DACF]  dark:hover:bg-[#33312E] rounded-md px-4 py-2">
                  <Link
                    href={`/${session.user.role}/settings`}
                    className="flex items-center gap-2"
                  >
                    <CiSettings className="text-2xl" /> Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-800 dark:text-[#FFFCF2] hover:outline-none hover:bg-[#E0DACF]  dark:hover:bg-[#33312E] rounded-md px-4 py-2 flex items-center gap-2">
                  <Link href="/support" className="flex items-center gap-2">
                    <FaLifeRing className="text-xl" /> Support
                  </Link>
                </DropdownMenuItem>

                <div className=" bg-[#2D6A4F] text-[#FFFCF2] dark:text-[#FFFCF2] dark:bg-[#7f5af0] dark:hover:dark:bg-[#8a69ec] rounded-md  px-4 py-2 flex items-center gap-2">
                  <IoMdExit className="text-2xl" /> <SignOutButton />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link
            href="/sign-up"
            className="px-4 py-1.5 bg-white text-black rounded"
          >
            Get Started
          </Link>
        )}
        <DarkModeToggle />
      </div>

      <div className="flex lg:hidden items-center">
        <MobileNav session={session} />
      </div>
    </div>
  );
}
