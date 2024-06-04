import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      // You can also make calls to external resources if necessary.
      async profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.login,
          email: profile.email,
          username: profile.login,
          image: profile.avatar_url,
        };
      },
    }),
  ],
});
