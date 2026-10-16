import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Философия в эпоху алгоритмов — карта великих идей",
  description: "Интерактивное путешествие по великим идеям философии. Кто принимает твои решения — ты или алгоритм?",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Философия в эпоху алгоритмов",
    description: "Алгоритм уже знает, что ты выберешь. А ты?",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Философия в эпоху алгоритмов",
    description: "Алгоритм уже знает, что ты выберешь. А ты?",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
