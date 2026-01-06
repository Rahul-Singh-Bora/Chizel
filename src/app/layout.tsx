import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Chizel | Modern Web Development Agency",
  description: "We build clean, scalable web products. Web • Apps • UI",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "font-sans min-h-screen antialiased selection:bg-white/20"
        )}
      >
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
