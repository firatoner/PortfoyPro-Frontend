'use client';

import { useLanguage } from "@/lib/language-context";

export default function FAQPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Sıkça Sorulan Sorular",
      description: "PortfoyPro hakkında sıkça sorulan soruları ve yanıtlarını keşfedin."
    },
    en: {
      title: "Frequently Asked Questions",
      description: "Discover frequently asked questions and answers about PortfoyPro."
    },
    es: {
      title: "Preguntas Frecuentes",
      description: "Descubra preguntas frecuentes y respuestas sobre PortfoyPro."
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