import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwaseyi Fagbemi · Frontend Developer",
  description:
    "Portfolio of Oluwaseyi Fagbemi, a Frontend Developer crafting fast, accessible and polished web experiences with React, Next.js and TypeScript.",
  keywords: [
    "Oluwaseyi Fagbemi",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer Nigeria",
  ],
  authors: [{ name: "Oluwaseyi Fagbemi" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Oluwaseyi Fagbemi · Frontend Developer",
    description:
      "Portfolio of Oluwaseyi Fagbemi, a Frontend Developer crafting fast, accessible and polished web experiences.",
    siteName: "Oluwaseyi Fagbemi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
