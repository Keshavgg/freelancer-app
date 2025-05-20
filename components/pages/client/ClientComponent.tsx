"use client";

import React, { useState } from "react";
import Todo from "@/components/pages/client/Todo";
import { Button } from "@/components/ui/button";

export default function ClientComponent() {
  const [includeTodo, setIncludeTodo] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeTodo(event.target.checked);
  };

  return (
    <form className="flex flex-col gap-4 container mx-auto md:px-10 sm:w-[70vw] lg:w-[40vw] justify-center  pb-12 text-black dark:text-white ">
      <input
        type="text"
        placeholder="Project Title..."
        className=" px-2 py-4 bg-[#403D39] text-[#FFFCF2] dark:bg-[#16161a] rounded-lg focus:outline-none placeholder:text-[#CCC5B9] dark:placeholder:text-[#CCC5B9]"
      />
      <textarea
        placeholder="Project Description..."
        className="px-2 py-4 bg-[#403D39] text-[#FFFCF2] dark:bg-[#16161a] rounded-lg focus:outline-none placeholder:text-[#CCC5B9] dark:placeholder:text-[#CCC5B9]"
      />
      <input
        type="text"
        placeholder="Skills Required..."
        className="px-2 py-4 bg-[#403D39] text-[#FFFCF2] dark:bg-[#16161a] rounded-lg focus:outline-none placeholder:text-[#CCC5B9] dark:placeholder:text-[#CCC5B9]"
      />
      <input
        type="number"
        placeholder="Budget..."
        className="px-2 py-4 bg-[#403D39] text-[#FFFCF2] dark:bg-[#16161a] rounded-lg focus:outline-none placeholder:text-[#CCC5B9] dark:placeholder:text-[#CCC5B9]"
      />
      <div className="flex items-center mt-4 space-x-2">
        <input
          type="checkbox"
          id="includeTodo"
          checked={includeTodo}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-[#403D39] dark:text-[#403D39] focus:outline-none"
        />
        <label htmlFor="includeTodo" className="text-[#807B74] dark:text-white">
          Add a to-do list for this project
        </label>
      </div>
      {includeTodo && <Todo />}
      <div>
        <Button
          color="black"
          className="px-2 py-6 rounded-full w-full  bg-[#2cb67d] dark:bg-[#7f5af0]  focus:outline-none"
        >Post Project</Button>
      </div>
    </form>
  );
}
