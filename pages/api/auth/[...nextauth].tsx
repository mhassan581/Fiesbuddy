import NextAuth from "next-auth";
import GmailProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../public/utils/MongoDBClient";

export default NextAuth({
  providers: [
    GmailProvider({
      clientId:
        "86107342009-2grs4pg0lqpohnb26iiqd24m0r9kcah9.apps.googleusercontent.com",
      clientSecret: "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",
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
