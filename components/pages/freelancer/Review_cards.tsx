import React from "react";
import Icon from "@/components/Essentials/Icons";
import { CiStar } from "react-icons/ci";

function Review_cards({
  reviews,
  className,
}: {
  reviews: any;
  className?: string;
}) {
  const { reviewer, review, rating, country, time } = reviews;
  return (
    <>
      <div
        className={`${className} w-60 min-h-[28vw] ] rounded-md py-6 px-4 flex flex-col items-center text-center gap-4 `}
      >
        <div className="w-full flex flex-col items-center space-y-1">
          <Icon image={undefined} className={undefined} />
          <span className="text-md text-center font-semibold">{reviewer}</span>
          <div className="w-full flex gap-2 justify-center">
            <span className="text-xs flex items-center gap-1">
              <CiStar />
              {rating}
            </span>
            <span className="text-xs">{country}</span>
            <span className="text-xs">{time}</span>
          </div>
        </div>
        <p className="text-md ">{review}</p>
      </div>
    </>
  );
}

export default Review_cards;
