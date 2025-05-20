import React from "react";
import { FaBrush } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaKeyboard } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import serviceImg from "@/public/services.jpg";
import Image from "next/image";

const services = [
  {
    icon: <FaBrush className="text-2xl" />,
    text: "Design",
    description: "Graphic design, UI/UX, and more",
  },
  {
    icon: <IoIosPeople className="text-2xl" />,
    text: "Consulting",
    description: "SEO, social media, and content creation",
  },
  {
    icon: <FaKeyboard className="text-2xl" />,
    text: "Development",
    description: "Web, mobile, and software development",
  },
  {
    icon: <HiOutlineSpeakerphone className="text-2xl" />,
    text: "Marketing",
    description: "SEO, social media, and content creation",
  },
];

export default function WideRangeOfService() {
  return (
    <section className=" dark:bg-[#242629] bg-[#F3EFE4] py-8 md:py-16">
      <div className="container mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-7 md:gap-8 items-center px-8">
        <div className="md:col-span-3 flex items-center flex-col">
          <div className="space-y-8 text-center md:text-left">
            <span className="rounded-full  text-[#FFFCF2] dark:bg-[#7f5af0]  bg-[#335239] dark:text-white px-4 py-3">
              Wide Range of Services
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#252422] dark:text-[#fffffe]">
              Find the Perfect Freelancer for Any Task
            </h1>
            <p className="text-base md:text-2xl lg:text-xl text-[#605C57] dark:text-[#94a1b2]">
              Our platform connects you with a diverse pool of freelancers,
              offering a wide range of services from design and development to
              marketing and consulting.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-row-2 md:grid-cols-2 gap-8 mt-4 dark:text-[#fffffe]">
            {services.map((items, index) => (
              <div key={index}>
                <div className="flex gap-2 items-center">
                  {items.icon}
                  <h4 className="font-semibold text-lg text-[#2cb67d]">{items.text}</h4>
                </div>
                <p className=" text-[#72757e]">{items.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 bg-zinc-200 rounded-lg">
          <Image
            src={serviceImg}
            alt="service-img"
            quality={80}
            className="rounded-md bg-cover h-96 md:h-fit object-cover"
          />
        </div>
      </div>
    </section>
  );
}