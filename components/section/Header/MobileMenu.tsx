"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/context/language-content";
import { ThemeToggle } from "@/components/important/ThemeToggle";
import LanguageSelector from "@/components/important/LanguageSelector";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* sheet */}
      <div className="relative bg-white dark:bg-gray-900 rounded-t-2xl p-6 space-y-6 shadow-xl">
        <Button asChild size="lg" className="w-full">
          <Link href="/auth/login" onClick={onClose}>
            {t.signIn}
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg" className="w-full">
          <Link href="/auth/register" onClick={onClose}>
            {t.signUp}
          </Link>
        </Button>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
