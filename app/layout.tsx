import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader";
import localFont from "next/font/local";
import NavbarSection from "@/components/sections/navbar-section";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const azonix = localFont({
  src: "../public/fonts/Azonix.otf",
});

export const metadata: Metadata = {
  title: "Ar Kar Lin | Full-stack Developer",
  description: "A Full-stack Developer",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://devarkarr.vercel.app/",
    title: "Ar Kar Lin | Full-stack Developer",
    description: "",
    siteName: "Portfolio website",
    images: [
      {
        url: "https://i.ibb.co/nRtHsFg/Screenshot-2024-12-20-at-3-21-12-PM.png",
      },
    ],
  },
  authors: {
    name: "Ar Kar Lin",
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "GSAP"],
  creator: "Ar Kar Lin",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${azonix.className} `}>
        <Loader />
        <NavbarSection />
        {children}
      </body>
    </html>
  );
}
