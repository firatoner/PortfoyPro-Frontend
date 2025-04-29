"use client";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { date: "2025-04-15", BTC: 0.09, ETH: 1.2, SOL: 18 },
  { date: "2025-04-16", BTC: 0.11, ETH: 1.4, SOL: 19 },
  { date: "2025-04-17", BTC: 0.12, ETH: 1.6, SOL: 20 },
  { date: "2025-04-18", BTC: 0.13, ETH: 1.7, SOL: 22 },
  { date: "2025-04-19", BTC: 0.14, ETH: 1.9, SOL: 23 },
  { date: "2025-04-20", BTC: 0.15, ETH: 2.0, SOL: 24 },
  { date: "2025-04-21", BTC: 0.16, ETH: 2.2, SOL: 25 },
  { date: "2025-04-22", BTC: 0.17, ETH: 2.3, SOL: 26 },
  { date: "2025-04-23", BTC: 0.18, ETH: 2.1, SOL: 24 },
  { date: "2025-04-24", BTC: 0.17, ETH: 2.0, SOL: 23 },
  { date: "2025-04-25", BTC: 0.19, ETH: 2.4, SOL: 26 },
  { date: "2025-04-26", BTC: 0.2, ETH: 2.5, SOL: 27 },
  { date: "2025-04-27", BTC: 0.21, ETH: 2.6, SOL: 28 },
  { date: "2025-04-28", BTC: 0.22, ETH: 2.8, SOL: 29 },
  { date: "2025-04-29", BTC: 0.23, ETH: 3.0, SOL: 30 },

  { date: "2025-04-30", BTC: 0.24, ETH: 3.2, SOL: 31 },

  { date: "2025-05-01", BTC: 0.25, ETH: 3.4, SOL: 32 },
  { date: "2025-05-02", BTC: 0.26, ETH: 3.6, SOL: 33 },
  { date: "2025-05-03", BTC: 0.27, ETH: 3.8, SOL: 34 },
  { date: "2025-05-04", BTC: 0.28, ETH: 4.0, SOL: 35 },
  { date: "2025-05-05", BTC: 0.29, ETH: 4.2, SOL: 36 },
  { date: "2025-05-06", BTC: 0.3, ETH: 4.4, SOL: 37 },
  { date: "2025-05-07", BTC: 0.31, ETH: 4.6, SOL: 38 },
  { date: "2025-05-08", BTC: 0.32, ETH: 4.8, SOL: 39 },
  { date: "2025-05-09", BTC: 0.33, ETH: 5.0, SOL: 40 },
  { date: "2025-05-10", BTC: 0.34, ETH: 5.2, SOL: 41 },
];

export function PortfolioBreakdownByDate() {
  return (
    <div className="w-full h-[400px] bg-muted rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-foreground mb-2">
        Daily Crypto Breakdown
      </h2>
      <ResponsiveBar
        data={data}
        keys={["BTC", "ETH", "SOL"]}
        indexBy="date"
        margin={{ top: 30, right: 40, bottom: 70, left: 60 }}
        padding={0.3}
        groupMode="stacked"
        colors={{ scheme: "set3" }}
        axisBottom={{ tickRotation: -30 }}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      />
    </div>
  );
}
