import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/layout/Header";
import Footer from "@/components/custom/layout/Footer";
import ScrollToTopButton from "@/components/custom/shared/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advance Virtual Staff PH | Build Your Remote Career",
  description:
    "Join Advance Virtual Staff PH — the leading Filipino virtual assistant agency. Discover remote career opportunities, competitive pay, and a supportive community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
