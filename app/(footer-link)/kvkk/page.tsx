"use client";

import { useLanguage } from "@/lib/language-context";

export default function KVKKPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Kişisel Verilerin Korunması Politikası",
      lastUpdated: "Son Güncelleme: 10 Mart 2024",
      sections: [
        {
          title: "Veri Sorumlusu",
          content:
            "PortfoyPro olarak, Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu olarak hareket etmekteyiz.",
        },
        {
          title: "Veri İşleme Amaçları",
          content:
            "Toplanan kişisel verileriniz, hizmetlerimizi sunmak, güvenliğinizi sağlamak ve yasal yükümlülüklerimizi yerine getirmek amacıyla işlenmektedir.",
        },
        {
          title: "Veri Saklama Süresi",
          content:
            "Kişisel verileriniz, ilgili mevzuatta belirtilen süreler boyunca saklanmakta olup, süre sonunda güvenli bir şekilde imha edilmektedir.",
        },
      ],
    },
    en: {
      title: "Personal Data Protection Policy",
      lastUpdated: "Last Updated: March 10, 2024",
      sections: [
        {
          title: "Data Controller",
          content:
            "At PortfoyPro, we act as a data controller under the Personal Data Protection Law.",
        },
        {
          title: "Purposes of Data Processing",
          content:
            "Your collected personal data is processed to provide our services, ensure your security, and fulfill our legal obligations.",
        },
        {
          title: "Data Retention Period",
          content:
            "Your personal data is stored for the periods specified in the relevant regulations and is securely deleted after the retention period ends.",
        },
      ],
    },
    es: {
      title: "Política de Protección de Datos Personales",
      lastUpdated: "Última Actualización: 10 de marzo de 2024",
      sections: [
        {
          title: "Responsable del Tratamiento de Datos",
          content:
            "En PortfoyPro, actuamos como responsables del tratamiento de datos bajo la Ley de Protección de Datos Personales.",
        },
        {
          title: "Propósitos del Tratamiento de Datos",
          content:
            "Sus datos personales recopilados se procesan para brindar nuestros servicios, garantizar su seguridad y cumplir con nuestras obligaciones legales.",
        },
        {
          title: "Periodo de Conservación de Datos",
          content:
            "Sus datos personales se almacenan durante los períodos especificados en las normativas aplicables y se eliminan de forma segura después de finalizar el periodo de retención.",
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
