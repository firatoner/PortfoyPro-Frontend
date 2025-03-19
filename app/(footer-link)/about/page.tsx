'use client';

import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Hakkımızda",
      description: "PortfoyPro, finansal yatırımlarınızı yönetmenize yardımcı olan yenilikçi bir platformdur.",
      mission: "Misyonumuz",
      missionText: "Yatırımcılara portföylerini etkili bir şekilde yönetmeleri için gerekli araçları sağlamak.",
      vision: "Vizyonumuz",
      visionText: "Finansal teknoloji alanında lider ve güvenilir bir platform olmak.",
      team: "Ekibimiz",
      teamText: "Finans ve teknoloji alanında uzman profesyonellerden oluşan ekibimiz, size en iyi hizmeti sunmak için çalışıyor."
    },
    en: {
      title: "About Us",
      description: "PortfoyPro is an innovative platform that helps you manage your financial investments.",
      mission: "Our Mission",
      missionText: "To provide investors with the necessary tools to effectively manage their portfolios.",
      vision: "Our Vision",
      visionText: "To become a leading and trusted platform in financial technology.",
      team: "Our Team",
      teamText: "Our team of professionals, experts in finance and technology, works to provide you with the best service."
    },
    es: {
      title: "Sobre Nosotros",
      description: "PortfoyPro es una plataforma innovadora que te ayuda a gestionar tus inversiones financieras.",
      mission: "Nuestra Misión",
      missionText: "Proporcionar a los inversores las herramientas necesarias para gestionar eficazmente sus carteras.",
      vision: "Nuestra Visión",
      visionText: "Convertirnos en una plataforma líder y confiable en tecnología financiera.",
      team: "Nuestro Equipo",
      teamText: "Nuestro equipo de profesionales, expertos en finanzas y tecnología, trabaja para brindarte el mejor servicio."
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
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{t.mission}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t.missionText}</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{t.vision}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t.visionText}</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">{t.team}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t.teamText}</p>
        </div>
      </div>
    </div>
  );
} 