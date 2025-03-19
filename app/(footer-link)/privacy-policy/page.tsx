'use client';

import { useLanguage } from "@/lib/language-context";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 10 Mart 2024",
      sections: [
        {
          title: "Veri Toplama",
          content: "PortfoyPro olarak, hizmetlerimizi sunmak için gerekli olan kişisel verilerinizi toplamaktayız. Bu veriler arasında ad-soyad, e-posta adresi ve finansal tercihleriniz bulunmaktadır."
        },
        {
          title: "Veri Kullanımı",
          content: "Toplanan veriler, size daha iyi hizmet sunmak, güvenliğinizi sağlamak ve yasal yükümlülüklerimizi yerine getirmek için kullanılmaktadır."
        },
        {
          title: "Veri Güvenliği",
          content: "Verilerinizin güvenliği bizim için önceliklidir. En güncel güvenlik önlemleriyle verilerinizi korumaktayız."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 10, 2024",
      sections: [
        {
          title: "Data Collection",
          content: "At PortfoyPro, we collect personal data necessary to provide our services. This includes your name, email address, and financial preferences."
        },
        {
          title: "Data Usage",
          content: "The collected data is used to provide better service, ensure your security, and fulfill our legal obligations."
        },
        {
          title: "Data Security",
          content: "Your data security is our priority. We protect your data with the most up-to-date security measures."
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización: 10 de marzo de 2024",
      sections: [
        {
          title: "Recopilación de Datos",
          content: "En PortfoyPro, recopilamos datos personales necesarios para proporcionar nuestros servicios. Esto incluye su nombre, dirección de correo electrónico y preferencias financieras."
        },
        {
          title: "Uso de Datos",
          content: "Los datos recopilados se utilizan para brindar un mejor servicio, garantizar su seguridad y cumplir con nuestras obligaciones legales."
        },
        {
          title: "Seguridad de Datos",
          content: "La seguridad de sus datos es nuestra prioridad. Protegemos sus datos con las medidas de seguridad más actualizadas."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">{t.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-12">{t.lastUpdated}</p>
        
        <div className="space-y-12">
          {t.sections.map((section, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 