import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FreelancerCardProps {
  freelancer?: {
    id: string;
    skills: string[];
    username: string;
    reviews: number;
    image: string;
    rate: string;
    name: string;
    rating: number;
    description: string;
  };
}

export default function Component({ freelancer }: FreelancerCardProps) {
  return (
    <Card className="w-full bg-[#252422] shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="p-4 bg-[#33312E]">
        <div className="flex items-center space-x-4">
          {freelancer?.image && (
            <Image
              src={freelancer?.image || ""}
              width={60}
              height={60}
              alt="freelancer-img"
              className="rounded-full border-4 border-white w-20 h-20 object-cover"
            />
          )}

          <div>
            <h2 className="text-2xl font-bold text-[#FFFCF2]">
              {freelancer?.name && freelancer?.name}
            </h2>
            <p className="text-[#CCC5B9] text-xs">
              @
              {freelancer?.username
                ? freelancer?.username.toLocaleLowerCase()
                : "New User"}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-8">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-[#CCC5B9] mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {freelancer?.skills &&
              freelancer?.skills.map((skill, index) => (
                <Badge variant="secondary" key={index} className="capitalize">
                  {skill}
                </Badge>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            {freelancer?.rating ? (
              <>
                <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold text-[#FFFCF2]">
                  {freelancer?.rating}
                </span>
              </>
            ) : (
              <span className="text-xs text-[#FFFCF2]">Rising Talent 💫</span>
            )}
          </div>
          <Link
            href={`/freelancer/profile/${freelancer?.id}`}
            className="px-3 py-2 bg-[#2d6a4f] hover:bg-[#36805e]  text-[#fffffe] rounded-full text-sm"
          >
            Visit Profile
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
