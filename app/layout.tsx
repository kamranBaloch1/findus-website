import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   icons: {
    icon: '/logo_green.svg',
  },
  title: "FindUs — Hire Trusted Workers Across Pakistan",
  description:
    "FindUs helps you hire verified workers for home services, events, repairs, and more. Record your problem, receive offers from trusted professionals, compare prices, and get the job done with safety and reliability.",
  keywords: [
    "FindUs",
    "home services Pakistan",
    "hire workers Pakistan",
    "trusted professionals",
    "plumber electrician carpenter Pakistan",
    "event services Pakistan",
    "on-demand services",
    "book workers online",
  ],
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
