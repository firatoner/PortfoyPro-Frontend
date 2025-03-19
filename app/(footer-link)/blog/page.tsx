'use client';

import { useLanguage } from "@/lib/language-context";

export default function BlogPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Blog",
      description: "PortfoyPro blog yazılarını keşfedin ve finansal dünyadaki en son gelişmeleri takip edin."
    },
    en: {
      title: "Blog",
      description: "Explore PortfoyPro blog posts and stay updated with the latest developments in the financial world."
    },
    es: {
      title: "Blog",
      description: "Explore las publicaciones del blog de PortfoyPro y manténgase actualizado con los últimos desarrollos en el mundo financiero."
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