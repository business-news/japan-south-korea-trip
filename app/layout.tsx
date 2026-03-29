import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Noto_Sans_JP, Noto_Sans_KR, Geist_Mono } from "next/font/google";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Japan × South Korea — Travel Planner",
  description:
    "Your personal travel companion for navigating Japan and South Korea. Itineraries, bookings, budgets, and maps in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} ${notoSansJP.variable} ${notoSansKR.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <TopNav />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
