import React from "react";
import Link from "next/link";
import SignUpWithEmail from "@/components/pages/SignUp/SignUpWithEmail";
import SignInWithGoogleButton from "@/components/pages/OAuth/GoogleButton";
import SignInWithGithubButton from "@/components/pages/OAuth/GithubButton";

export default function SignUpComponent() {
    return (
        <div className="left flex items-center flex-col md:col-span-3 space-y-4">
            <h1 className="text-4xl font-bold text-center text-[#252422] dark:text-white">
                Get Started
            </h1>
            <span className="text-md text-[#605C57] dark:text-zinc-200 text-center">
                Get started with your account to connect with clients and start
                freelancing.
            </span>

            <SignUpWithEmail />

            <div className="flex w-full items-center justify-between">
                <div className="h-[1px] md:w-1/3 bg-zinc-700 w-full"></div>
                <span className="text-xs text-zinc-400 shrink-0 mx-2">
                    CONTINUE WITH{" "}
                </span>
                <div className="h-[1px] md:w-1/3 bg-zinc-700 w-full"></div>
            </div>
            <div className="flex flex-col gap-4">
                <SignInWithGoogleButton />
                <SignInWithGithubButton />
            </div>

            <div>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        href="/sign-in"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
