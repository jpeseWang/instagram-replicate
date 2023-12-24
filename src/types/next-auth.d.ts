import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface SessionData {
    id: string;
    username: string;
    avatar?: string;
  }
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      avatar?: string;
    } & DefaultSession["user"];
    data?: {
      id: string;
      username: string;
      avatar?: string;
    };
    id: string;
    username: string;
    avatar?: string;
  }
}
