"use client";
import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";
import { UserProvider } from "@/lib/user-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark:bg-gray-900 bg-white">
      <body className={inter.className}>
        <ThemeProvider >
          <LanguageProvider>
            <UserProvider>{children}</UserProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
