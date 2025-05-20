import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Image from "next/image";

function Icon({ image, className }: { image?: string; className?: string }) {
  return (
    <>
      {image ? (
        <div>
          <Image
            src={image}
            alt="profile"
            className={` rounded-full  ${className}`}
            width={40}
            height={40}
          />
        </div>
      ) : (
        <IoPersonCircleOutline className="text-9xl" />
      )}
    </>
  );
}

export default Icon;
