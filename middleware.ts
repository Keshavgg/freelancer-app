import { auth } from "@/auth";

export const middleware = auth;

export const config = {
  matcher: ["/client", "/freelancer", "/hire-talent", "/jobs"],
};
