import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Max Spaulding - Architect and Engineering Lead",
    template: "%s | Max Spaulding",
  },
  description:
    "Portfolio and professional profile of Max Spaulding, Architect and Engineering Lead at Life360.",
  keywords: [
    "software engineer",
    "architect",
    "engineering lead",
    "San Francisco",
    "portfolio",
  ],
  authors: [{ name: "Max Spaulding" }],
  creator: "Max Spaulding",
  metadataBase: new URL("https://maxjspaulding.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxjspaulding.com",
    siteName: "Max Spaulding",
    title: "Max Spaulding - Architect and Engineering Lead",
    description:
      "Portfolio and professional profile of Max Spaulding, Architect and Engineering Lead at Life360.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Spaulding - Architect and Engineering Lead",
    description:
      "Portfolio and professional profile of Max Spaulding, Architect and Engineering Lead at Life360.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen flex flex-col bg-background font-sans">
        <Header />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
