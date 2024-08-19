import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olaitan Jr. App",
  description: "My next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
