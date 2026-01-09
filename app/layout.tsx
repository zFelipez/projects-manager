import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { DashboardHeader } from "./_components/dahsboard-header";
import { AccountLinks } from "./_components/account-links";
import { UserContextProvider } from "./contexts/userContext";
import { getCurrentUser } from "@/lib/get-current-user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projects Manager",
  description: "Projects Manager",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserContextProvider user={user}>
          <DashboardHeader title="Projects Manager">
            <AccountLinks />
          </DashboardHeader>
          {children}

          <Toaster position="top-center" />
        </UserContextProvider>
      </body>
    </html>
  );
}
