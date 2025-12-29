import type { Metadata } from "next";
import { Montserrat_Alternates, Inter } from "next/font/google";
import "./globals.css";
import { TimerProvider } from "@/contexts/TimerContext";
import { Toaster } from "@/components/ui/sonner";

const bbFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bb",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Breaking Bad Pomodoro Timer",
  icons: {
    icon: "/ww.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" dark">
      <body
        className={`font-inter antialiased bb-bg`}
      >
        <TimerProvider>{children}
          <Toaster richColors position="top-right" />
        </TimerProvider>
      </body>
    </html>
  );
}
