import React, { Suspense } from "react";
import FreelancerCard from "./FreelancerCard";
import Spinner from "@/components/Essentials/Spinner";
import DB from "@/DB";

export default async function MainContent() {
  const freelancers = await DB.user.findMany({
    where: {
      role: "freelancer",
    },
  });
  if (!freelancers.length)
    return (
      <h2 className="text-4xl grid self-center font-bold w-full">
        🚧 Work at Progress 🚧
      </h2>
    );

  return (
    <main className="p-4 md:p-4 grid grid-cols-1 sm:grid-cols-2 grid-flow-row lg:grid-cols-3 gap-4 lg:gap-8">
      <Suspense fallback={<Spinner />}>
        {freelancers.map((freelancer: any, index: number) => (
          <FreelancerCard key={index} freelancer={freelancer} />
        ))}
      </Suspense>
    </main>
  );
}
