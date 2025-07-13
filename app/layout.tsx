import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader";
import localFont from "next/font/local";
import NavbarSection from "@/components/sections/navbar-section";
// import { ThemeProvider } from "@/components/theme-provider";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const azonix = localFont({
  src: "../public/fonts/Azonix.otf",
});

export const metadata: Metadata = {
  title: {
    template: "Ar Kar Lin | %s",
    default: "Ar Kar Lin",
  },
  description:
    "Hi, I'm Ar Kar Lin – a passionate full-stack developer specializing in modern web technologies like Next.js, React, and GSAP.",
  keywords:
    "Arkarlin,devarkar,arkarlin,frontend developer,Ar Kar Lin,Full-stack Developer,Next.js,React,Portfolio,GSAP,TypeScript,Passionate Developer",
  metadataBase: new URL("https://devarkarr.vercel.app"),
  authors: [{ name: "arkarlin", url: "https://devarkarr.vercel.app" }],
  openGraph: {
    title: "Ar Kar Lin | Passinate Developer",
    description:
      "Discover Ar Kar Lin's portfolio website featuring web development projects, skills, and contact information.",
    url: "https://devarkarr.vercel.app",
    siteName: "arkarlin",
    images: [
      {
        url: "https://i.ibb.co/nRtHsFg/Screenshot-2024-12-20-at-3-21-12-PM.png",
        width: 1200,
        height: 630,
        alt: "Ar Kar Lin Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ar Kar Lin | Passinate Developer",
    description:
      "Explore Ar Kar Lin’s projects, developer experience, and portfolio site.",
    creator: "@arkarlin",
    images: [
      "https://i.ibb.co/nRtHsFg/Screenshot-2024-12-20-at-3-21-12-PM.png",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg" },
      new URL("/favicon.svg", "https://devarkarr.vercel.app"),
    ],
  },
  manifest: "https://devarkarr.vercel.app/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${azonix.className}`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <Loader />
        <NavbarSection />
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
