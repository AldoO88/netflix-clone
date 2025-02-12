import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  callbacks: {
    async session({ session, token }) {
      if(token.sub && session.user){
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      console.log("Este este es el token dentro de jwt", {token});
      token.customField = "customValue";
      return token;
    }
      
  },
  session: { strategy: "jwt" },
  ...authConfig,
}) 