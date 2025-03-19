'use client';

import { useLanguage } from "@/lib/language-context";

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Kullanım Şartları",
      lastUpdated: "Son Güncelleme: 10 Mart 2024",
      sections: [
        {
          title: "Hizmet Kullanımı",
          content: "PortfoyPro hizmetlerini kullanarak, bu şartları kabul etmiş olursunuz. Hizmetlerimizi yasalara uygun ve etik kurallar çerçevesinde kullanmanız gerekmektedir."
        },
        {
          title: "Hesap Güvenliği",
          content: "Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi kimseyle paylaşmayın ve güvenli bir şekilde saklayın."
        },
        {
          title: "Sorumluluk Reddi",
          content: "PortfoyPro, yatırım tavsiyesi vermemektedir. Tüm yatırım kararları kullanıcının kendi sorumluluğundadır."
        }
      ]
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last Updated: March 10, 2024",
      sections: [
        {
          title: "Service Usage",
          content: "By using PortfoyPro services, you agree to these terms. You must use our services in accordance with laws and ethical rules."
        },
        {
          title: "Account Security",
          content: "You are responsible for your account security. Do not share your password with anyone and keep it secure."
        },
        {
          title: "Disclaimer",
          content: "PortfoyPro does not provide investment advice. All investment decisions are the user's own responsibility."
        }
      ]
    },
    es: {
      title: "Términos de Uso",
      lastUpdated: "Última Actualización: 10 de marzo de 2024",
      sections: [
        {
          title: "Uso del Servicio",
          content: "Al utilizar los servicios de PortfoyPro, acepta estos términos. Debe utilizar nuestros servicios de acuerdo con las leyes y reglas éticas."
        },
        {
          title: "Seguridad de la Cuenta",
          content: "Usted es responsable de la seguridad de su cuenta. No comparta su contraseña con nadie y manténgala segura."
        },
        {
          title: "Descargo de Responsabilidad",
          content: "PortfoyPro no proporciona asesoramiento de inversión. Todas las decisiones de inversión son responsabilidad del usuario."
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