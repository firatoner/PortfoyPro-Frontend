"use client";
import Navbar from "@/components/section/Header/Navbar";
import Footer from "@/components/section/Footer/page";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/context/language-content";

import { Area, AreaChart, Legend, XAxis, YAxis } from "recharts";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";
import { BrainCircuit, ChartBarIcon, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];
  const chartData = [
    { name: "2 May", value: 0 },
    { name: "4 May", value: 35000 },
    { name: "6 May", value: 70000 },
    { name: "8 May", value: 105000 },
    { name: "10 May", value: 120000 },
    { name: "12 May", value: 140000 },
  ];
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
  const pieData = [
    { name: t.crypto, value: 25, color: "#22C55E" },

    { name: t.currency2, value: 10, color: "#EC4899" },
    { name: t.cash, value: 5, color: "#8B5CF6" },
  ];

  const transactions = [
    {
      asset: "Euro",
      type: t.buy,
      amount: "₺5.250",
      date: `12 ${t.may} 2025`,
    },
    {
      asset: "Bitcoin",
      type: t.sell,
      amount: "$97.568",
      date: `10 ${t.may} 2025`,
    },
    {
      asset: "Atom",
      type: t.buy,
      amount: "₺40.120",
      date: `5 ${t.may} 2025`,
    },
  ];
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <section className="py-16 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t.manageFinancialFuture}
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.trackInvestments}
          </motion.p>

          {/* Dashboard Preview */}
          <motion.div
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="relative bg-white dark:bg-black rounded-xl shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-700 p-3 transition-colors"
              style={{ maxWidth: "1400px" }}
            >
              <div className="p-6">
                <div className="bg-white dark:bg-black rounded-lg shadow-xl overflow-hidden transition-colors">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="absolute top-3 left-4 flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <h2 className="text-lg font-semibold">{t.welcome}</h2>
                      <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm transition-colors">
                        {t.portfolioValue}: ₺125.430,75
                      </div>
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-medium mb-2">
                          {t.portfolioSummary}
                        </h3>
                        <div className="h-64 bg-gradient-to-b from-blue-50 dark:from-gray-800 rounded-lg">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
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
                              <CartesianGrid
                                vertical={false}
                                stroke="#E2E8F0"
                              />
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

                      <div>
                        <h3 className="font-medium mb-2">
                          {t.assetDistribution}
                        </h3>
                        <div className="h-64 bg-white dark:bg-black rounded-lg transition-colors">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={pieData}
                                innerRadius={0}
                                outerRadius={85}
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
                              <Legend
                                verticalAlign="middle"
                                align="right"
                                layout="vertical"
                                iconType="circle"
                                iconSize={8}
                                wrapperStyle={{ paddingLeft: "24px" }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    {/* Transactions Table */}
                    <div className="mt-8">
                      <h3 className="font-medium mb-8">
                        {t.recentTransactions}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-black dark:text-white transition-colors">
                          <thead>
                            <tr className="text-sm text-gray-500 dark:text-gray-400">
                              <th className="pb-3 text-center">{t.asset}</th>
                              <th className="pb-3 text-center">
                                {t.transaction}
                              </th>
                              <th className="pb-3 text-center">{t.amount}</th>
                              <th className="pb-3 text-center">{t.date}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {transactions.map((transaction, idx) => (
                              <tr
                                key={idx}
                                className="border-t border-gray-200 dark:border-gray-700"
                              >
                                <td className="py-3 text-center">
                                  {transaction.asset}
                                </td>
                                <td
                                  className={`py-3 text-center ${
                                    transaction.type === t.buy
                                      ? "text-green-600"
                                      : "text-red-600"
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

            {/* Monitor Stand */}
            <div className="relative flex flex-col items-center mt-4">
              <div className="w-14 h-8 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-xl transition-colors" />
              <div className="h-3 w-48 bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 rounded transition-colors" />
              <div className="h-1 w-56 bg-gray-600 dark:bg-gray-400 rounded-lg mt-1 transition-colors" />
            </div>
          </motion.div>
        </section>

        {/* Why Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white transition-colors">
              {t.whyPortfoyPro}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Cards */}
              {[
                {
                  icon: <ChartBarIcon className="h-6 w-6 text-[#4F46E5]" />,
                  title: t.realTimeTracking,
                  desc: t.realTimeTrackingDesc,
                  bg: "bg-blue-100",
                  darkBg: "dark:bg-blue-900",
                },
                {
                  icon: <BrainCircuit className="h-6 w-6 text-green-600" />,
                  title: t.smartPortfolioAnalysis,
                  desc: t.smartPortfolioAnalysisDesc,
                  bg: "bg-green-100",
                  darkBg: "dark:bg-green-900",
                },
                {
                  icon: <Shield className="h-6 w-6 text-purple-600" />,
                  title: t.secureAndPrivate,
                  desc: t.secureAndPrivateDesc,
                  bg: "bg-purple-100",
                  darkBg: "dark:bg-purple-900",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`text-center p-6 rounded-lg transition-colors ${item.bg} ${item.darkBg}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#4F46E5] text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t.shapeFinancialFuture}</h2>
          <p className="mb-8">{t.startManagingInvestments}</p>
          <Button size="lg" variant="secondary">
            <Link href="/auth/register">{t.startFree}</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </>
  );
}
