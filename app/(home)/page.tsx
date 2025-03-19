"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Area,
  AreaChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Search,
  Moon,
  Globe,
  LogIn,
  UserPlus,
  LineChart as ChartIcon,
  Shield,
  BrainCircuit,
  Check,
  Sun,
  Menu,
  X as XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

const chartData = [
  { name: "2 May", value: 0 },
  { name: "4 May", value: 35000 },
  { name: "6 May", value: 70000 },
  { name: "8 May", value: 105000 },
  { name: "10 May", value: 120000 },
  { name: "12 May", value: 140000 },
];

const pieData = [
  { name: "Hisse Senetleri", value: 45, color: "#4F46E5" },
  { name: "Kripto", value: 25, color: "#22C55E" },
  { name: "Tahvil/Bono", value: 15, color: "#F59E0B" },
  { name: "Altın", value: 10, color: "#EC4899" },
  { name: "Nakit", value: 5, color: "#8B5CF6" },
];

const transactions = [
  { asset: "THYAO", type: "Alış", amount: "₺5.250", date: "12 Mayıs 2025" },
  {
    asset: "Bitcoin",
    type: "Satış",
    amount: "₺12.430,5",
    date: "10 Mayıs 2025",
  },
  { asset: "EREGL", type: "Alış", amount: "₺3.120,25", date: "5 Mayıs 2025" },
];

{
  /*dil icerikleri */
}
const content = {
  tr: {
    welcome: "Hoş Geldiniz, Kullanıcı",
    portfolioValue: "Portföy Değeri",
    manageFinancialFuture: "Finansal Geleceğinizi Yönetin",
    trackInvestments:
      "PortfoyPro ile yatırımlarınızı takip edin, analiz edin ve finansal hedeflerinize ulaşın.",
    portfolioSummary: "Portföy Özeti",
    assetDistribution: "Varlık Dağılımı",
    recentTransactions: "Son İşlemler",
    asset: "Varlık",
    transaction: "İşlem",
    amount: "Miktar",
    date: "Tarih",
    whyPortfoyPro: "Neden PortfoyPro?",
    realTimeTracking: "Gerçek Zamanlı Takip",
    realTimeTrackingDesc:
      "Tüm yatırımlarınızı tek bir platformda gerçek zamanlı olarak takip edin. Hisse senetleri, kripto paralar, fonlar ve daha fazlası.",
    smartPortfolioAnalysis: "Akıllı Portföy Analizi",
    smartPortfolioAnalysisDesc:
      "Gelişmiş analiz araçlarıyla portföyünüzün performansını değerlendirin, risk analizini görün ve daha bilinçli yatırım kararları alın.",
    secureAndPrivate: "Güvenli ve Özel",
    secureAndPrivateDesc:
      "Verileriniz en yüksek güvenlik standartlarıyla korunur. Hesap bilgileriniz ve finansal verileriniz her zaman güvende kalır.",
    shapeFinancialFuture: "Finansal Geleceğinizi Bugün Şekillendirin",
    startManagingInvestments:
      "PortfoyPro ile yatırımlarınızı yönetmeye hemen başlayın ve finansal hedeflerinize daha hızlı ulaşın.",
    startFree: "Hemen Ücretsiz Başlayın",
    signIn: "Giriş Yap",
    signUp: "Kayıt Ol",
    quickLinks: "Hızlı Bağlantılar",
    resources: "Kaynaklar",
    legal: "Yasal",
    about: "Hakkımızda",
    buy: "Alış",
    sell: "Satış",

    stocks: "Hisse Senetleri",
    crypto: "Kripto",
    bonds: "Tahvil/Bono",
    gold: "Altın",
    cash: "Nakit",
    features: "Özellikler",
    pricing: "Fiyatlandırma",
    contact: "İletişim",
    blog: "Blog",
    guides: "Rehberler",
    faq: "SSS",
    support: "Destek",
    privacyPolicy: "Gizlilik Politikası",
    termsOfUse: "Kullanım Şartları",
    cookiePolicy: "Çerez Politikası",
    kvkk: "KVKK",
    disclaimer: "Yasal Uyarılar",
    signUpDescription: "E-posta ile kayıt olun veya Google ile devam edin.",
    signInDescription: "E-posta ile giriş yapın veya Google ile devam edin.",
    footerText: "2024 PortfoyPro. Tüm hakları saklıdır.",
  },
  en: {
    welcome: "Welcome, User",
    portfolioValue: "Portfolio Value",
    manageFinancialFuture: "Manage Your Financial Future",
    trackInvestments:
      "Track, analyze, and achieve your financial goals with PortfoyPro.",
    portfolioSummary: "Portfolio Summary",
    assetDistribution: "Asset Distribution",
    recentTransactions: "Recent Transactions",
    asset: "Asset",
    transaction: "Transaction",
    buy: "Buy",
    sell: "Sell",

    amount: "Amount",
    date: "Date",
    stocks: "Stocks",
    crypto: "Crypto",
    bonds: "Bonds",
    gold: "Gold",
    cash: "Cash",

    whyPortfoyPro: "Why PortfoyPro?",
    realTimeTracking: "Real-Time Tracking",
    realTimeTrackingDesc:
      "Track all your investments in real-time on a single platform. Stocks, cryptocurrencies, funds, and more.",
    smartPortfolioAnalysis: "Smart Portfolio Analysis",
    smartPortfolioAnalysisDesc:
      "Evaluate your portfolio's performance with advanced analysis tools, see risk analysis, and make more informed investment decisions.",
    secureAndPrivate: "Secure and Private",
    secureAndPrivateDesc:
      "Your data is protected with the highest security standards. Your account information and financial data are always safe.",
    shapeFinancialFuture: "Shape Your Financial Future Today",
    startManagingInvestments:
      "Start managing your investments with PortfoyPro today and reach your financial goals faster.",
    startFree: "Start Free Now",
    signIn: "Sign In",
    signUp: "Sign Up",
    quickLinks: "Quick Links",
    resources: "Resources",
    legal: "Legal",
    about: "About",
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    blog: "Blog",
    guides: "Guides",
    faq: "FAQ",
    support: "Support",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    cookiePolicy: "Cookie Policy",
    kvkk: "KVKK",
    disclaimer: "Disclaimer",
    signUpDescription: "Sign up with email or continue with Google.",
    signInDescription: "Sign in with email or continue with Google.",
    footerText: "2024 PortfoyPro. All rights reserved.",
  },
};

type Investment = {
  id: string;
  name: string;
  amount: number;
};

type PieDataType = {
  name: string;
  value: number;
  color: string;
};

type TransactionType = {
  asset: string;
  type: string;
  amount: string;
  date: string;
};

export default function Home() {
  // Başlangıçta boş state
  const [pieData, setPieData] = useState<PieDataType[]>([]);
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const { language, setLanguage } = useLanguage(); // Dili alıyoruz
  const t = content[language];
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [portfolio, setPortfolio] = useState<Investment[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  useEffect(() => {
    setPieData([
      { name: t["stocks"], value: 45, color: "#4F46E5" },
      { name: t["crypto"], value: 25, color: "#22C55E" },
      { name: t["bonds"], value: 15, color: "#F59E0B" },
      { name: t["gold"], value: 10, color: "#EC4899" },
      { name: t["cash"], value: 5, color: "#8B5CF6" },
    ]);

    setTransactions([
      {
        asset: "THYAO",
        type: t["buy"],
        amount: "₺5.250",
        date: "12 Mayıs 2025",
      },
      {
        asset: "Bitcoin",
        type: t["sell"],
        amount: "₺12.430,5",
        date: "10 Mayıs 2025",
      },
      {
        asset: "EREGL",
        type: t["buy"],
        amount: "₺3.120,25",
        date: "5 Mayıs 2025",
      },
    ]);
  }, [language]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.querySelectorAll("button").forEach((button) => {
        if (
          button.textContent &&
          (button.textContent.includes("Giriş Yap") ||
            button.textContent.includes("Sign In"))
        ) {
          button.textContent = t.signIn;
        }
        if (
          button.textContent &&
          (button.textContent.includes("Kayıt Ol") ||
            button.textContent.includes("Sign Up"))
        ) {
          button.textContent = t.signUp;
        }
      });
    }
  }, [language]);

  const handleLogin = () => {
    router.push("/dashboard");
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="text-sm font-medium">Portföy Değeri</p>
          <p className="text-lg font-bold">
            ₺{payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  // Add email and password validation
  const validateEmail = (email: string) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const addInvestment = (investment: Investment) => {
    setPortfolio((prevPortfolio) => [...prevPortfolio, investment]);
  };

  const removeInvestment = (investmentId: string) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((inv) => inv.id !== investmentId)
    );
  };

  const updateInvestment = (
    investmentId: string,
    updatedInvestment: Investment
  ) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((inv) =>
        inv.id === investmentId ? updatedInvestment : inv
      )
    );
  };

  // Add functionality to edit portfolio names
  const editPortfolioName = (portfolioId: string, newName: string) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((portfolio) =>
        portfolio.id === portfolioId
          ? { ...portfolio, name: newName }
          : portfolio
      )
    );
  };

  const addToPortfolio = (item: {
    id: string;
    name: string;
    type: "stock" | "coin";
  }) => {
    setPortfolio((prevPortfolio) => [
      ...prevPortfolio,
      { id: item.id, name: item.name, amount: 0 },
    ]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex justify-between items-center h-16 px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Sol Taraf: Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-white"
            >
              PortfoyPro
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Sağ Taraf: Dil, Tema, Giriş Butonları */}
          <div
            className={`
            md:flex items-center space-x-4 ml-auto
            ${
              isMenuOpen
                ? "flex flex-col space-y-4 absolute top-16 right-0 bg-white dark:bg-gray-900 p-4 shadow-lg rounded-bl-lg w-64 z-50"
                : "hidden"
            }
          `}
          >
            {/* Dil Seçici */}
            <Select
              value={language}
              onValueChange={(value: "tr" | "en") => setLanguage(value)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue>
                  {language === "tr" ? "Türkçe" : "English"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">Türkçe</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>

            {/* Tema Butonu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              <Moon
                className={`h-5 w-5 transition-all ${
                  theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                }`}
              />
              <Sun
                className={`absolute h-5 w-5 transition-all ${
                  theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
              />
            </Button>

            {/* Giriş Butonları */}
            <div
              className={`flex ${
                isMenuOpen ? "flex-col space-y-2 w-full" : "space-x-4"
              }`}
            >
              <Button
                variant="outline"
                onClick={() => setShowSignIn(true)}
                className={isMenuOpen ? "w-full" : ""}
              >
                {t.signIn}
              </Button>
              <Button
                className="bg-black text-white"
                onClick={() => setShowSignUp(true)}
                className={isMenuOpen ? "w-full" : ""}
              >
                {t.signUp}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.manageFinancialFuture}
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.trackInvestments}
        </motion.p>

        {/* Dashboard Preview with Monitor Frame */}
        <motion.div
          className="relative max-w-4xl mx-auto "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Monitor Frame */}
          <div
            className="
      relative 
      bg-white 
      rounded-xl 
      shadow-2xl 
      overflow-hidden 
      border 
      border-gray-300
     dark:bg-black
      p-3
    "
            style={{ maxWidth: "1200px" }} // Çerçeve boyutunu daha dengeli hale getiriyoruz
          >
            {/* Window Controls (Red, Yellow, Green) - Daha İçerde */}

            {/* Dashboard Content */}

            <div className="p-6 bg-white  dark:text-black  dark:bg-black ">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6">
                  {/* Dashboard Header */}

                  <div className="flex justify-between items-center mb-6 ">
                    <div className="absolute top-3 left-4 flex space-x-2 dark:bg-black">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <h2 className="text-lg text-black  font-semibold ">
                      {t.welcome}
                    </h2>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm dark:text-blue-800">
                      {t.portfolioValue}: ₺125.430,75
                    </div>
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div>
                      <h3 className="font-medium dark:text-black">
                        {t.portfolioSummary}
                      </h3>
                      <div className="h-64 bg-gradient-to-b from-blue-50 ">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData} className="bg-white ">
                            <defs>
                              <linearGradient
                                id="colorValue"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#4F46E5"
                                  stopOpacity={0.3}
                                />
                                <stop
                                  offset="95%"
                                  stopColor="#4F46E5"
                                  stopOpacity={0.05}
                                />
                              </linearGradient>
                            </defs>
                            <XAxis
                              dataKey="name"
                              stroke="#94A3B8"
                              tickLine={false}
                              axisLine={false}
                            />
                            <YAxis
                              stroke="#94A3B8"
                              tickLine={false}
                              axisLine={false}
                              tickFormatter={(value) => `₺${value / 1000}K`}
                            />
                            <CartesianGrid vertical={false} stroke="#E2E8F0" />
                            <Tooltip content={CustomTooltip} />
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              fill="url(#colorValue)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="mt-8 md:mt-0">
                      <h3 className="font-medium  dark:text-black">
                        {t.assetDistribution}
                      </h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart className="bg-white ">
                            <Pie
                              data={pieData}
                              innerRadius={0}
                              outerRadius={
                                windowWidth && windowWidth < 768 ? 65 : 85
                              }
                              paddingAngle={3}
                              dataKey="value"
                              startAngle={90}
                              endAngle={450}
                              cornerRadius={4}
                            >
                              {pieData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={entry.color}
                                  stroke="none"
                                />
                              ))}
                            </Pie>
                            <Tooltip
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-white p-3 shadow-lg rounded-lg border">
                                      <p className="text-sm text-gray-600">
                                        {payload[0].payload.name}
                                      </p>
                                      <p className="text-lg font-bold">
                                        %{payload[0].payload.value}
                                      </p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Legend
                              verticalAlign={
                                window.innerWidth < 768 ? "bottom" : "middle"
                              }
                              align={
                                window.innerWidth < 768 ? "center" : "right"
                              }
                              layout={
                                window.innerWidth < 768
                                  ? "horizontal"
                                  : "vertical"
                              }
                              iconType="circle"
                              iconSize={8}
                              wrapperStyle={
                                window.innerWidth < 768
                                  ? { paddingTop: "24px" }
                                  : { paddingLeft: "24px" }
                              }
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* Transactions Table */}
                  <div className="mt-8">
                    <h3 className="font-medium mb-8">{t.recentTransactions}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-sm text-gray-500">
                            <th className="pb-3 text-center">{t.asset}</th>
                            <th className="pb-3 text-center">
                              {t.transaction}
                            </th>
                            <th className="pb-3 text-center">{t.amount}</th>
                            <th className="pb-3 text-center">{t.date}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map((transaction, index) => (
                            <tr key={index} className="border-t">
                              <td className="py-3 text-center">
                                {transaction.asset}
                              </td>
                              <td
                                className={`py-3 text-center ${
                                  transaction.type === t["buy"]
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                {transaction.type}
                              </td>
                              <td className="py-3 text-center">
                                {transaction.amount}
                              </td>
                              <td className="py-3 text-center">
                                {transaction.date}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor Stand - Boyun ve Stand Base */}
          <div className="relative flex flex-col items-center ">
            {/* Stand Boyun Kısmı */}
            <div className="w-14 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded rounded-lg"></div>

            {/* Stand Base */}
            <div className="h-3 w-48 bg-gradient-to-b from-gray-300 to-gray-500 rounded "></div>

            <div className="h-1 w-56 bg-gray-600 rounded-lg mt-1"></div>
          </div>
        </motion.div>
      </section>
      <br />
      <br />
      <br />
      {/* Features Section */}
      <section className="py-16 bg-gray-300 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            {t.whyPortfoyPro}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartIcon className="h-6 w-6 text-[#4F46E5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {t.realTimeTracking}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.realTimeTrackingDesc}
              </p>
            </motion.div>
            <motion.div
              className="text-center "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {t.smartPortfolioAnalysis}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.smartPortfolioAnalysisDesc}
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {t.secureAndPrivate}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.secureAndPrivateDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4F46E5] text-white text-center ">
        <h2 className="text-3xl font-bold mb-4">{t.shapeFinancialFuture}</h2>
        <p className="mb-8">{t.startManagingInvestments}</p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => setShowSignUp(true)}
        >
          {t.startFree}
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.features}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.guides}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.faq}
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.support}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.termsOfUse}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.cookiePolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/kvkk"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.kvkk}
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.disclaimer}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          {t.footerText}
        </div>
      </footer>

      {/* Sign Up Dialog */}
      <Dialog open={showSignUp} onOpenChange={setShowSignUp}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {t.signUp}
            </DialogTitle>
            <DialogDescription className="text-center">
              {t.signUpDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => {
                // Google sign-in logic would go here
                console.log("Google sign-in clicked");
              }}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Google ile devam et
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Veya e-posta ile kayıt ol
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Ad Soyad</Label>
              <Input id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-posta</Label>
              <Input id="email" type="email" placeholder="ornek@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" type="password" placeholder="••••••••" />
              <p className="text-xs text-gray-500">
                En az 8 karakter, bir büyük harf ve bir rakam içermelidir
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) =>
                  setAcceptTerms(checked as boolean)
                }
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span className="text-gray-700">
                  <a href="#" className="text-[#4F46E5] hover:underline">
                    Kullanım şartlarını
                  </a>{" "}
                  ve{" "}
                  <a href="#" className="text-[#4F46E5] hover:underline">
                    gizlilik politikasını
                  </a>{" "}
                  kabul ediyorum
                </span>
              </label>
            </div>
          </div>
          <Button
            className="w-full h-11 bg-[#4F46E5] hover:bg-[#4338CA]"
            disabled={!acceptTerms}
          >
            Hesap Oluştur
          </Button>
          <div className="text-center text-sm text-gray-500 mt-4">
            Hesabınız var mı?{" "}
            <button
              className="text-[#4F46E5] hover:underline font-medium"
              onClick={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
            >
              Giriş yapın
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Sign In Dialog */}
      <Dialog open={showSignIn} onOpenChange={setShowSignIn}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {t.signIn}
            </DialogTitle>
            <DialogDescription className="text-center">
              {t.signInDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => setShowSignIn(true)}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Google ile giriş yap
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Veya e-posta ile giriş yap
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signin-email">E-posta</Label>
              <Input
                id="signin-email"
                type="email"
                placeholder="ornek@email.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signin-password">Şifre</Label>
              <Input
                id="signin-password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none"
                >
                  Beni hatırla
                </label>
              </div>
              <button className="text-sm text-[#4F46E5] hover:underline">
                Şifremi unuttum
              </button>
            </div>
          </div>
          <Button
            className="w-full h-11 bg-[#4F46E5] hover:bg-[#4338CA]"
            onClick={handleLogin}
          >
            {t.signIn}
          </Button>
          <div className="text-center text-sm text-gray-500 mt-4">
            Hesabınız yok mu?{" "}
            <button
              className="text-[#4F46E5] hover:underline font-medium"
              onClick={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
            >
              Kayıt olun
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
