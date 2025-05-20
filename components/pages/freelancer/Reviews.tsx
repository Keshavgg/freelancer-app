import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import { CiStar } from "react-icons/ci";

function Review_cards({
  reviews,
  className,
}: {
  reviews: any;
  className: string;
}) {
  const { review, rating, country, time, image } = reviews;

  return (
    <div
      className={`${className} w-60 bg-[#CCC5B9] rounded-md py-6 px-4 flex flex-col`}
    >
      <div className="w-full flex flex-row gap-4">
        <Image
          src={image} // Use the image URL here
          alt="User image" // Provide an alt text
          width={48} // Set the desired width
          height={48} // Set the desired height
          className="rounded-full" // Optional: Add classes for styling
        />
        <div className="flex flex-col gap-1">
          <span className="text-md font-semibold">Apple</span>
          <span className="text-xs text-zinc-500 font-medium">{country}</span>
        </div>
      </div>
      <div className="h-[1px] w-full bg-zinc-400 my-4"></div>
      <div className="flex flex-row gap-4 mb-4">
        <span className="text-xs flex items-center gap-1 font-medium">
          <CiStar />
          {rating}
        </span>
        <span className="text-xs font-medium text-zinc-500">{time}</span>
      </div>
      <p className="text-md">{review}</p>
    </div>
  );
}

export default Review_cards;
