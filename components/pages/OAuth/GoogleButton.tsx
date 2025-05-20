import React from "react";
import Image from "next/image";
import { continueWithGoogle } from "@/lib/actions";

export default function GoogleButton() {
    return (
        <form action={continueWithGoogle}>
            <button className="flex items-center gap-6 text-lg border bg-[#2D6A4F] text-[#FFFCF2] rounded-full hover:bg-[#357d5c] px-10 py-3 font-medium dark:border-[#2cb67d]  ">
                <Image
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    height="24"
                    width="24"
                />
                <span className=" dark:text-[#fffffe]">
                    Continue with Google
                </span>
            </button>
        </form>
    );
}
