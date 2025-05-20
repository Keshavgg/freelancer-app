import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import DB from "@/DB/index";
import { Role } from "@prisma/client";

// Sign Up Logic
async function signUp(credentials: any) {
  const hashedPass = await bcrypt.hash(credentials.password as string, 10);

  const newUser = await DB.user.create({
    data: {
      email: credentials.email as string,
      password: hashedPass as string,
      role: credentials?.role! as Role,
      isNew: true,
    },
  });

  return newUser;
}

// Sign In Logic
async function signIn(credentials: any, existingUser: any) {
  const isValidPassword = await bcrypt.compare(
    credentials.password as string,
    existingUser.password as string,
  );

  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  await DB.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      isNew: false,
    },
  });

  return existingUser;
}

export const {
  handlers,
  auth,
  signIn: NextSignIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        role: {},
      },
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        const existingUser = await DB.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!existingUser) {
          return signUp(credentials);
        } else {
          return signIn(credentials, existingUser);
        }
      },
    }),
    Google,
    GitHub,
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async session({ session }) {
      const currentUser = await DB.user.findUnique({
        where: { email: session.user.email as string },
      });
      // @ts-ignore
      session.user.id = currentUser.id!;
      session.user.role = currentUser?.role!;
      session.user.isNew = currentUser?.isNew!;
      session.user.username = currentUser?.username!;
      session.user.name = currentUser?.name!;
      session.user.createdAt = currentUser?.createdAt!;
      session.user.skills = currentUser?.skills!;
      session.user.rating = currentUser?.rating!;

      // @ts-ignore
      session.user.profile = currentUser?.profile!;

      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async signIn({ user, account }) {
      try {
        const email = user.email as string;
        const existingUser = await DB.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!existingUser) {
          await DB.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image!,
            },
          });

          return true;
        }

        if (existingUser) {
          await DB.user.update({
            where: {
              id: existingUser.id,
            },
            data: {
              isNew: false,
            },
          });
        }

        return true;
      } catch (e) {
        return false;
      }
    },
  },
  pages: {
    signIn: "/sign-up",
  },
  secret: process.env.AUTH_SECRET,
});
