import React from "react";
import { Button } from "@/components/ui/button";
import { continueWithEmail } from "@/lib/actions";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
                </div>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <div className="flex justify-between items-center">
                <label>Join Us as</label>
                <Select required name="role">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="client">Client</SelectItem>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button>Sign Up</Button>
        </form>
    );
}
