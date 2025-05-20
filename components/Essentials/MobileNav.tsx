"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose, IoMdExit } from "react-icons/io";
import Link from "next/link";
import SignOutButton from "@/components/pages/SignOut/SignOutButton";
import { FaHome, FaLifeRing } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";

// @ts-ignore
export default function MobileNav({ session }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen ? (
                <div className="bg-black absolute z-10 top-0 right-0 w-2/3 px-4 py-4 flex flex-col gap-8 h-full">
                    <IoMdClose
                        className="text-2xl cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />

                    {session != null && (
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <Image
                                    src={session?.user?.image!}
                                    alt="user-img"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <span>Hii, {session?.user?.name!}</span>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <Link
                                    href={`/${session?.user?.role}/dashboard`}
                                    className="px-4 py-2 flex items-center gap-2"
                                >
                                    <FaHome className="text-2xl" /> Dashboard
                                </Link>
                                <Link
                                    href={`/${session?.user?.role}/settings`}
                                    className="px-4 py-2 flex items-center gap-2"
                                >
                                    <CiSettings className="text-2xl" /> Settings
                                </Link>
                                <Link
                                    href="/support"
                                    className="px-4 py-2 flex items-center gap-2"
                                >
                                    <FaLifeRing className="text-xl" /> Support
                                </Link>

                                <div className="px-4 py-2 flex items-center gap-2">
                                    <IoMdExit className="text-2xl" />{" "}
                                    <SignOutButton />
                                </div>
                            </div>
                        </div>
                    )}

                    {session == null && (
                        <div className="flex flex-col gap-8 justify-start items-start">
                            <Link href="/pricing">Our Pricing</Link>
                            <Link href="/about">About Us</Link>
                            <Link
                                href="/sign-in"
                                className="px-2 py-1 bg-white text-black rounded"
                            >
                                Get Started
                            </Link>
                        </div>
                    )}
                </div>
            ) : (
                <button onClick={() => setIsOpen(!isOpen)}>
                    <RxHamburgerMenu className="text-2xl" />
                </button>
            )}
        </>
    );
}
