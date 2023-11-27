import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactQueryProvider } from "@/components/providers/trpc-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRPC App Router",
  description: "Implement TRPC on the new next app router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactQueryProvider>{children}</TRPCReactQueryProvider>
      </body>
    </html>
  );
}
