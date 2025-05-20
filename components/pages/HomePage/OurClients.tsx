import React from "react";
import Card from "@/components/pages/HomePage/Card";

const cardData = [
  {
    imgSrc: "https://image.pngaaa.com/823/2127823-middle.png",
    name: "Amit Kumar",
    description: "Marketing Manager, Infosys",
    content:
      "I've been using this platform for years, and the\n quality of work from the freelancers has been\n consistently excellent.",
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/90/d1/ac/90d1ac48711f63c6a290238c8382632f.jpg",
    name: "Neha Sharma",
    description: "CEO, Reliance Digital",
    content:
      "The platform's secure payment system and escrow\n services give me peace of mind when working with\n freelancers.",
  },
  {
    imgSrc:
      "https://i.pinimg.com/originals/90/d1/ac/90d1ac48711f63c6a290238c8382632f.jpg",
    name: "Rajesh Iyer",
    description: "Founder, Tech Innovations",
    content:
      "The freelancers on this platform are top-notch. I've\n been able to find the perfect talent for all my\n projects.",
  },
];

export default function OurClients() {
  return (
    <div className="bg-[#F3EFE4] pt-10 pb-12 dark:bg-[#242629]">
      <div className="container mx-auto p-4">
        <div className="text-center mb-6 font-sans">
          <h5 className="font-semibold mb-2 text-[#335239] dark:text-[#2cb67d] ">
            Trusted by Clients
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter sm:text-5xl text-[#252422] dark:text-[#fffffe]">
            What Our Clients Say
          </h2>
        </div>
        <p className="text-center mb-10 text-[#605C57] dark:text-[#94a1b2]">
          This is a paragraph element that will adjust its lines and be centered
          by default. The text will wrap naturally when needed.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6 ">
          {cardData.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              description={card.description}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
