'use client';

import { useLanguage } from "@/lib/language-context";

export default function SupportPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Destek",
      description: "PortfoyPro destek ekibi ile iletişime geçin ve yardım alın."
    },
    en: {
      title: "Support",
      description: "Contact the PortfoyPro support team and get assistance."
    },
    es: {
      title: "Soporte",
      description: "Póngase en contacto con el equipo de soporte de PortfoyPro y obtenga asistencia."
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