import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader";
import localFont from "next/font/local";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const azonix = localFont({
  src: "../public/fonts/Azonix.otf",
});

export const metadata: Metadata = {
  title: "Ar Kar",
  description: "A Full-stack Developer",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://devarkarr.vercel.app/",
    title: "Ar Kar",
    description: "",
    siteName: "Portfolio website",
    images: [
      {
        url: "https://i.ibb.co/m5bYtw6/responsive-showcase.png",
      },
    ],
  },
  authors: {
    name: "Ar Kar",
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "GSAP"],
  creator: "Ar Kar",
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
        {children}
      </body>
    </html>
  );
}
