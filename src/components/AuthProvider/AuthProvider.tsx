"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
interface AuthProviderProps extends AppProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
