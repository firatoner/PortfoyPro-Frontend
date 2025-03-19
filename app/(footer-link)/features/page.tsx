'use client';

import { useLanguage } from "@/lib/language-context";

export default function FeaturesPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Özellikler",
      description: "PortfoyPro'nun sunduğu özellikler ile yatırımlarınızı daha etkili bir şekilde yönetin."
    },
    en: {
      title: "Features",
      description: "Manage your investments more effectively with the features offered by PortfoyPro."
    },
    es: {
      title: "Características",
      description: "Gestione sus inversiones de manera más efectiva con las características que ofrece PortfoyPro."
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