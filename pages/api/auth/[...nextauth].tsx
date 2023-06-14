import NextAuth from "next-auth";
import GmailProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/MongoDBClient";
import Credentials from "next-auth/providers/credentials";
import { IUser } from "@/types";

export default NextAuth({
  providers: [
    GmailProvider({
      clientId: `${process.env.GOGOLE_AUTH_ID}`,
      clientSecret: `${process.env.GOOGLE_AUTH_SECRET}`,
    }),
    // Credentials({}),
  ],
  pages: {
    signIn: "/",
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "asdadeegkdjao",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user as IUser;
      session.user = user;
      return session;
    },
  },
});
