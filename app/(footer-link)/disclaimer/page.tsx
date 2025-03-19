"use client";

import { useLanguage } from "@/lib/language-context";

export default function DisclaimerPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Yasal Uyarı",
      lastUpdated: "Son Güncelleme: 10 Mart 2024",
      sections: [
        {
          title: "Genel Bilgilendirme",
          content:
            "Bu web sitesi, yalnızca bilgilendirme amaçlıdır ve yatırım tavsiyesi niteliği taşımaz.",
        },
        {
          title: "Sorumluluk Reddi",
          content:
            "PortfoyPro, sağlanan bilgilerin doğruluğunu veya eksiksizliğini garanti etmez ve bu bilgilerin kullanımından doğabilecek herhangi bir kayıptan sorumlu değildir.",
        },
        {
          title: "Üçüncü Taraf Bağlantıları",
          content:
            "Web sitemizde üçüncü taraf bağlantılar bulunabilir. Bu bağlantılar üzerinden erişilen içeriklerden PortfoyPro sorumlu değildir.",
        },
      ],
    },
    en: {
      title: "Legal Disclaimer",
      lastUpdated: "Last Updated: March 10, 2024",
      sections: [
        {
          title: "General Information",
          content:
            "This website is for informational purposes only and does not constitute investment advice.",
        },
        {
          title: "Liability Disclaimer",
          content:
            "PortfoyPro does not guarantee the accuracy or completeness of the provided information and is not responsible for any loss arising from its use.",
        },
        {
          title: "Third-Party Links",
          content:
            "Our website may contain links to third-party websites. PortfoyPro is not responsible for the content accessed through these links.",
        },
      ],
    },
    es: {
      title: "Aviso Legal",
      lastUpdated: "Última Actualización: 10 de marzo de 2024",
      sections: [
        {
          title: "Información General",
          content:
            "Este sitio web es solo para fines informativos y no constituye asesoramiento de inversión.",
        },
        {
          title: "Exención de Responsabilidad",
          content:
            "PortfoyPro no garantiza la precisión o integridad de la información proporcionada y no se hace responsable de ninguna pérdida derivada de su uso.",
        },
        {
          title: "Enlaces de Terceros",
          content:
            "Nuestro sitio web puede contener enlaces a sitios web de terceros. PortfoyPro no es responsable del contenido al que se accede a través de estos enlaces.",
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
