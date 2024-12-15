import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
 
export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub],
});
