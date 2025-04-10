import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Матрешка",
  description: "Матрешка - Российский мессенджер",
  other: {
    "google-site-verification": "bUEydAiFLW0HQfUw6xS7oFr2sIVQtEYUo1R0MMcz3p8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " flex flex-col h-full justify-between"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
