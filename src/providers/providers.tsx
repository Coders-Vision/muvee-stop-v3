"use client";

import * as React from "react";
import { ThemeProvider } from "./theme-provider";
import ReactQuery from "./react-query";
// import ModalProvider from "./modal-provider";

interface ProviderProps {
  children: React.ReactNode;
}

export function Providers({ children, ...props }: ProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {/* <ModalProvider> */}
      <ReactQuery>{children}</ReactQuery>
      {/* </ModalProvider> */}
    </ThemeProvider>
  );
}
