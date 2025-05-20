import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import type { Metadata } from "next";
import Link from "next/link";
import DealFixed from "@/public/Dealfixed.jpg";
import Money from "@/public/Money.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  const cardData = [
    {
      // imgSrc: "https://randomuser.me/api/portraits/men/31.jpg",  
      name: "Rajesh Kumar",
      description: "Freelance Graphic Designer",
      content:
        "Working with this platform has revolutionized my freelance journey. The vast range of opportunities and seamless hiring process have allowed me to secure more clients and increase my earnings significantly.",
    },
    {
      // imgSrc: "https://randomuser.me/api/portraits/women/44.jpg",  
      name: "Anjali Verma",
      description: "Small Business Owner",
      content:
        "This platform has been a game-changer for my small business. I've hired top-notch freelancers, and the overall experience has been smooth and professional. It's definitely helped grow my business.",
    },
  ];

  return (
    <div className="mx-auto dark:bg-[#16161a] bg-[#FFFCF2]">
      <div className="py-10 px-6 md:py-20 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-[#252422] dark:text-[#FFFFFE]">
              Connect with the best freelance talent
            </h1>

            <p className="text-base lg:text-xl text-left max-w-full mb-6 text-[#605C57] dark:text-[#94a1b2]">
              Our platform makes it easy to find, hire, and work with skilled freelancers for your projects. Unlock your business potential with our curated talent pool.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <Link href="/hire-talent" className="px-8 py-4 bg-[#357D5C] text-[#FFFCF2] rounded-full dark:bg-[#7f5af0] dark:text-white">
                Hire Talent
              </Link>
              <Link href="/sign-in" className="px-10 py-4 bg-[#357D5C] text-[#FFFCF2] rounded-full dark:bg-[#7f5af0] dark:text-white">
                Become Freelancer
              </Link>
            </div>
          </div>

          <div className="w-full h-full">
            <Image
              src={DealFixed}
              className="h-full w-full rounded-lg object-cover"
              alt="deal-fixed"
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-10 dark:bg-[#242629] bg-[#F3EFE4] dark:text-white">
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="text-md md:text-lg px-8 py-3 bg-[#335239] text-[#ffff] rounded-full dark:bg-[#242629] dark:text-[#2cb67d]">
            Our Services
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Unlock your business potential
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-4xl text-[#605C57] dark:text-[#94a1b2] mx-auto">
            Our platform connects you with a diverse pool of talented freelancers across a wide range of services. From design and development to marketing and consulting, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-8 gap-6">
          <div className="col-span-4">
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#252422] dark:text-[#fffffe] mb-2">
                  Design Services
                </h3>
                <p className="text-[#605C57] text-lg md:text-xl mt-2 dark:text-[#94a1b2]">
                  Graphic design, web design, UI/UX, and more.
                </p>
                <a href="#" className="text-md mt-1 hover:underline flex gap-2 items-center dark:text-[#2cb67d] text-[#33312E]">
                  Explore Designs <FaArrowRightLong />
                </a>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#252422] dark:text-[#fffffe] mb-2">
                  Development Services
                </h3>
                <p className="text-[#605C57] text-lg md:text-xl mt-2 dark:text-[#94a1b2]">
                  Web development, mobile app development, and more.
                </p>
                <a href="#" className="text-md mt-1 hover:underline flex gap-2 items-center dark:text-[#2cb67d] text-[#33312E]">
                  Explore Development <FaArrowRightLong />
                </a>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#252422] dark:text-[#fffffe] mb-2">
                  Marketing Services
                </h3>
                <p className="text-[#605C57] text-lg md:text-xl mt-2 dark:text-[#94a1b2]">
                  SEO, social media marketing, content creation, and more.
                </p>
                <a href="#" className="text-md mt-1 hover:underline flex gap-2 items-center dark:text-[#2cb67d] text-[#33312E]">
                  Explore Marketing <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <Image
              src={Money}
              alt="money-image"
              className="w-full h-full lg:h-[80%] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="p-10 mb-8">
        <div className="py-4 flex flex-col items-center text-center space-y-4">
          <div className="px-6 py-3 bg-[#335239] text-[#ffff] rounded-full dark:bg-[#7f5af0] dark:text-[#fffffe]">
            Testimonials
          </div>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-[#fffffe]">
            What our users say
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-[#94a1b2] mx-auto">
            Hear from our satisfied freelancers and clients about their experiences with our platform.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 justify-center">
          {cardData.map((card, index) => (
            <div key={index} className="border bg-[#CCC5B9] dark:bg-[#242629] p-4 rounded-lg shadow-md text-center md:w-[300px]">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div> {/* Placeholder for profile image */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold dark:text-[#fffffe]">
                    {card.name}
                  </h3>
                  <p className="text-[#403D39] dark:text-[#94a1b2] text-sm">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="my-4 h-[1px] dark:bg-[#94a1b2] bg-[#94a1b2]"></div>
              <p className="text-[#33312E] dark:text-[#94a1b2]">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 px-4 md:px-8 lg:px-16 flex justify-between items-center text-center lg:text-left">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-[#fffffe]">
            Ready to get started?
          </h1>
          <p className="text-lg md:text-xl text-[#605C57] dark:text-[#94a1b2] mt-4">
            Join our platform and unlock the power of freelance talent today!
          </p>
        </div>
        <Link href="/get-started" className="bg-[#357D5C] text-[#FFFCF2] dark:bg-[#7f5af0] dark:text-white py-4 px-8 rounded-full">
          Get Started <FaChevronRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
