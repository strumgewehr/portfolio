import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garv Sethi — AI Engineering & Cybersecurity",
  description:
    "Garv Sethi builds intelligent systems for cybersecurity, automation, and AI — from prompt-engineered forensic analysis pipelines to production backend architecture.",
  keywords: [
    "Garv Sethi",
    "AI Engineer",
    "Cybersecurity Researcher",
    "Digital Forensics",
    "Prompt Engineering",
    "Backend Engineer",
    "Redoubt Ops",
  ],
  authors: [{ name: "Garv Sethi" }],
  openGraph: {
    title: "Garv Sethi — AI Engineering & Cybersecurity",
    description:
      "Building intelligent systems for cybersecurity, automation, and AI.",
    siteName: "Garv Sethi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garv Sethi — AI Engineering & Cybersecurity",
    description:
      "Building intelligent systems for cybersecurity, automation, and AI.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased grain">{children}</body>
    </html>
  );
}
