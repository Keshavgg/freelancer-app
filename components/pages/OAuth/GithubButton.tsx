import React from "react";
import Image from "next/image";
import { continueWithGitHub } from "@/lib/actions";

export default function GithubButton() {
    return (
        <form action={continueWithGitHub}>
            <button className="flex items-center gap-6 text-lg border bg-[#2D6A4F] rounded-full text-[#FFFCF2] hover:bg-[#357d5c] px-10 py-3 font-medium dark:border-[#2cb67d]">
                <Image
                    src="https://authjs.dev/img/providers/github.svg"
                    alt="Github logo"
                    height="24"
                    width="24"
                />
                <span className="dark:text-[#fffffe]">
                    Continue with GitHub
                </span>
            </button>
        </form>
    );
}
