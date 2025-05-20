import React from "react";

type CardProps = {
  name: string;
  description: string;
  content: string;
};

const Card = ({ name, description, content }: CardProps) => {
  return (
    <div className="border bg-[#CCC5B9] text-[#252422] px-8 py-6 rounded-lg shadow-md  dark:bg-[#16161a] dark:text-[#fffffe] border-[1xp] border-[#807B74] dark:border-[#72757e] ">
      <div className="flex items-center gap-4 mb-4">
       <div className="h-12 w-12 bg-[#33312E] rounded-full"></div>
       <div>
         <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-[#403D39] text-sm dark:text-[#94a1b2]">{description}</p>
       </div>
      </div>
      <div>
      <hr className="my-4 border-[#807B74] dark:border-[#72757e]" />
      <p className="text-[#33312E] text-center dark:text-[#94a1b2]">{content}</p>
      </div>
    </div>
  );
};

export default Card;
