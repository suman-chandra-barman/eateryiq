import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "EateryIQ",
  description: "Revolutionizing Restaurant Management with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
