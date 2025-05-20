"use client";

import React, { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Essentials/Spinner";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      const publicPaths = [
        "/sign-up",
        "/sign-in",
        "/forgot-password",
        "/about",
        "/pricing",
      ];
      const isPublicPath = publicPaths.includes(window.location.pathname);

      if (session && isPublicPath) {
        const redirectPath =
          session.user.isNew || !session.user.username
            ? "/welcome"
            : `/${session.user.role}/dashboard`;

        if (window.location.pathname !== redirectPath) {
          router.push(redirectPath);
        }
      }
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <Spinner />;
  }

  return <>{children}</>;
};

export default AuthProvider;
