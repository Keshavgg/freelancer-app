import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: number;
      name?: string;
      email?: string;
      image?: string;
      isNew?: boolean;
      username?: string;
      skills?: string[];
      profile?: {
        bio?: string;
        location?: string;
        languages?: string[];
        collegeName?: string;
      };
      projects_clientId: string[];
      rating?: number;
      createdAt?: Date;
    } & DefaultSession["user"];
  }

  interface User {
    id?: number;
    role?: string;
    projects_clientId: string[];
    profile?: {
      bio?: string;
      location?: string;
      languages?: string[];
      collegeName?: string;
    };
    createdAt?: Date;
  }
}
