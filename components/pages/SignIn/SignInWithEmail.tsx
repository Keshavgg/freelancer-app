import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { continueWithEmail } from "@/lib/actions";

export default function SignInWithEmail() {
    return (
        <form className="flex flex-col gap-4 w-96" action={continueWithEmail}>
            <div className="flex flex-col gap-1">
                <label className="self-start">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex w-full justify-between items-center">
                    <label>Password</label>
                    <Link
                        href="/forget-password"
                        className="underline cursor-pointer"
                    >
                        Forgot password?
                    </Link>
                </div>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>

            <Button>Sign In</Button>
        </form>
    );
}
