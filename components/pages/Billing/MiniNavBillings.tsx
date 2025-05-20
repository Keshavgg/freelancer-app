import React from "react";
import Link from "next/link";

export default function MiniNavBillings() {
  return (
    <div className="flex flex-row items-center justify-center gap-2  sm:gap-4 py-8 bg-[#FFFCF2] dark:bg-[#242629]">
      <Link
        href="/billing/history"
        className="bg-[#2d6a4f] hover:bg-[#36805e] dark:bg-[#7f5af0] dark:hover:bg-[#8760fd] text-[#FFFCF2] text-xs sm:text-sm py-4 px-2 md:px-6 rounded-full"
      >
        Billing history
      </Link>
      <Link
        href="/billing/information"
        className="bg-[#2d6a4f] hover:bg-[#36805e] dark:bg-[#7f5af0] dark:hover:bg-[#8760fd] text-[#FFFCF2] text-xs sm:text-sm py-4 px-2 md:px-6 rounded-full"
      >
        Billing information
      </Link>
      <Link
        href="/billing"
        className="bg-[#2d6a4f] hover:bg-[#36805e] dark:bg-[#7f5af0] dark:hover:bg-[#8760fd] text-[#FFFCF2] text-xs sm:text-sm py-4 px-2 md:px-6 rounded-full"
      >
        Payment methods
      </Link>
    </div>
  );
}
