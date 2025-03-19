'use client';

import { useLanguage } from "@/lib/language-context";

export default function GuidesPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Rehberler",
      description: "PortfoyPro rehberlerini keşfedin ve yatırım stratejilerinizi geliştirin."
    },
    en: {
      title: "Guides",
      description: "Explore PortfoyPro guides and enhance your investment strategies."
    },
    es: {
      title: "Guías",
      description: "Explore las guías de PortfoyPro y mejore sus estrategias de inversión."
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">{t.title}</h1>
        <p className="text-lg mb-12 text-center text-gray-600 dark:text-gray-400">
          {t.description}
        </p>
      </div>
    </div>
  );
} 