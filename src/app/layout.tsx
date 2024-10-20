import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/navbar/Navbar";
import { ReduxProvider } from "@/rtk/ReduxProvider";
import "../utils/multiLanguage"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Global Pay Co., Ltd.",
  description: "Global Pay Co., Ltd.",
  icons: "/assets/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between`}
        >
          <Navbar />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
