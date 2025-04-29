"use client";

import { useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { PortfolioOverview } from "@/components/dashboard/PortfolioOverview";
import { PortfolioTrendChart } from "@/components/dashboard/PortfolioTrendChart";
import { PortfolioBreakdownByDate } from "@/components/dashboard/PortfolioBreakdownByDate";
import PortfolioChartPage from "@/components/dashboard/portfolio-chart";

export default function DashboardPage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      // kullanıcı yoksa login sayfasına yönlendir
      router.push("/auth/login");
    }
  }, [user]);

  if (user === null) return null;

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PortfolioOverview />
        <PortfolioChartPage />
      </div>

      <PortfolioTrendChart />
      <PortfolioBreakdownByDate />
    </div>
  );
}
