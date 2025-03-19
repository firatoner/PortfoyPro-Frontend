"use client";

import { useLanguage } from "@/lib/language-context";

export default function CookiePolicyPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Çerez Politikası",
      lastUpdated: "Son Güncelleme: 10 Mart 2024",
      sections: [
        {
          title: "Çerezlerin Kullanımı",
          content:
            "PortfoyPro olarak, web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz. Çerezler, tercihlerinizi hatırlamamıza ve hizmetlerimizi geliştirmemize yardımcı olur.",
        },
        {
          title: "Çerez Türleri",
          content:
            "Zorunlu çerezler, performans çerezleri, işlevsellik çerezleri ve reklam çerezleri gibi farklı türlerde çerezler kullanılmaktadır.",
        },
        {
          title: "Çerezleri Yönetme",
          content:
            "Tarayıcı ayarlarınızdan çerezleri yönetebilir veya tamamen devre dışı bırakabilirsiniz. Ancak, bazı özellikler çerezler olmadan düzgün çalışmayabilir.",
        },
      ],
    },
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last Updated: March 10, 2024",
      sections: [
        {
          title: "Use of Cookies",
          content:
            "At PortfoyPro, we use cookies on our website to enhance the user experience. Cookies help us remember your preferences and improve our services.",
        },
        {
          title: "Types of Cookies",
          content:
            "Different types of cookies are used, including essential cookies, performance cookies, functionality cookies, and advertising cookies.",
        },
        {
          title: "Managing Cookies",
          content:
            "You can manage or disable cookies from your browser settings. However, some features may not function properly without cookies.",
        },
      ],
    },
    es: {
      title: "Política de Cookies",
      lastUpdated: "Última Actualización: 10 de marzo de 2024",
      sections: [
        {
          title: "Uso de Cookies",
          content:
            "En PortfoyPro, utilizamos cookies en nuestro sitio web para mejorar la experiencia del usuario. Las cookies nos ayudan a recordar sus preferencias y mejorar nuestros servicios.",
        },
        {
          title: "Tipos de Cookies",
          content:
            "Se utilizan diferentes tipos de cookies, incluidas cookies esenciales, cookies de rendimiento, cookies de funcionalidad y cookies publicitarias.",
        },
        {
          title: "Gestión de Cookies",
          content:
            "Puede administrar o deshabilitar las cookies desde la configuración de su navegador. Sin embargo, algunas funciones pueden no funcionar correctamente sin cookies.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">{t.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-12">
          {t.lastUpdated}
        </p>

        <div className="space-y-12">
          {t.sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
