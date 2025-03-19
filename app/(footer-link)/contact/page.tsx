'use client';

import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "İletişim",
      description: "PortfoyPro ile iletişime geçin ve sorularınızı bize iletin."
    },
    en: {
      title: "Contact",
      description: "Get in touch with PortfoyPro and send us your inquiries."
    },
    es: {
      title: "Contacto",
      description: "Póngase en contacto con PortfoyPro y envíenos sus consultas."
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