import { Session } from "next-auth";

interface ExtendedSession extends Session {
  user: {
    id: string;
    fullname: string;
    avatar?: string;
    username?: string;
  };
}

declare module "next-auth" {
  interface Session extends ExtendedSession {}
}
