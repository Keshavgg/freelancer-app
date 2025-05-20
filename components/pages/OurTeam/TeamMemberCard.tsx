"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      className="bg-[#F3EFE4] text-[#403D39] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="w-24 h-24 mx-auto mb-6 bg-[#CCC5B9] rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <UserCircle2 size={64} className="text-[#605C57]" />
      </motion.div>
      <motion.h2
        className="text-2xl font-semibold mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
      >
        {member.name}
      </motion.h2>
      <motion.p
        className="text-[#807B74] text-center font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
      >
        {member.role}
      </motion.p>
    </motion.div>
  );
};

export default TeamMemberCard;
