import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";
import { auth } from "@/auth";

export default async function Logo() {
    const session = await auth();
    return (
        <Link
            href={session?.user.role ? `/${session?.user.role}/dashboard` : "/"}
        >
            <Image src={logo} alt="logo" className="w-32 md:w-40" />
        </Link>
    );
}
