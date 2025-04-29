"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/context/language-content";

export default function VerifyEmailPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[600px] shadow-lg border border-black dark:border-white p-6 sm:p-10 rounded-xl bg-white dark:bg-black text-center">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            {t.verifyEmailTitle}
          </CardTitle>
          <CardDescription className="text-base text-gray-600 dark:text-gray-300">
            {t.verifyEmailInstruction}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {t.verifyEmailNote}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
