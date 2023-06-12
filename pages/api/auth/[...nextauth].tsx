import NextAuth from "next-auth";
import GmailProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../public/utils/MongoDBClient";

export default NextAuth({
  providers: [
    GmailProvider({
      clientId:`${process.env.GOGOLE_AUTH_ID}`,
      clientSecret: `${process.env.GOOGLE_AUTH_SECRET}`,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true,
  },
  jwt: {
    secret: "asdadeegkdjao",
  },
});
