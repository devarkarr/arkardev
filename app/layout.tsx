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
  title: "Ar Kar Lin | Full-stack Developer",
  description:
    "Hi, I'm Ar Kar Lin – a passionate full-stack developer specializing in modern web technologies like Next.js, React, and GSAP.",
  applicationName: "Arkarlin Portfolio",
  generator: "Next.js",
  keywords: [
    "Arkarlin",
    "Ar Kar Lin",
    "Full-stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "GSAP",
    "TypeScript",
    "Passionate Developer",
  ],
  authors: [{ name: "Ar Kar Lin", url: "https://devarkarr.vercel.app/" }],
  creator: "Ar Kar Lin",
  publisher: "Ar Kar Lin",
  metadataBase: new URL("https://devarkarr.vercel.app"),
  openGraph: {
    title: "Ar Kar Lin | Full-stack Developer",
    description:
      "Discover Ar Kar Lin's portfolio website featuring web development projects, skills, and contact information.",
    url: "https://devarkarr.vercel.app/",
    siteName: "Arkarlin Portfolio",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/nRtHsFg/Screenshot-2024-12-20-at-3-21-12-PM.png",
        width: 1200,
        height: 630,
        alt: "Ar Kar Lin Portfolio Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ar Kar Lin | Full-stack Developer",
    description:
      "Explore Ar Kar Lin’s projects, developer experience, and portfolio site.",
    images: [
      "https://i.ibb.co/nRtHsFg/Screenshot-2024-12-20-at-3-21-12-PM.png",
    ],
    creator: "@yourTwitterHandle", // optional
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png", // optional
  },
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
