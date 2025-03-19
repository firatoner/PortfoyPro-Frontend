'use client';

import { useLanguage } from "@/lib/language-context";

export default function PricingPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Fiyatlandırma",
      description: "PortfoyPro'nun sunduğu hizmetler için uygun fiyatlandırma seçeneklerini keşfedin."
    },
    en: {
      title: "Pricing",
      description: "Discover affordable pricing options for the services offered by PortfoyPro."
    },
    es: {
      title: "Precios",
      description: "Descubra opciones de precios asequibles para los servicios que ofrece PortfoyPro."
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