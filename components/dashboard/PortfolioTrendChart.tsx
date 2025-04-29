"use client";
import { ResponsiveLine } from "@nivo/line";

const trendData = [
  {
    id: "Portfolio Value",
    data: [
      { x: "2025-04-15", y: 9000 },
      { x: "2025-04-16", y: 9200 },
      { x: "2025-04-17", y: 9450 },
      { x: "2025-04-18", y: 9700 },
      { x: "2025-04-19", y: 10000 },
      { x: "2025-04-20", y: 10200 },
      { x: "2025-04-21", y: 10450 },
      { x: "2025-04-22", y: 10100 },
      { x: "2025-04-23", y: 9800 },
      { x: "2025-04-24", y: 10200 },
      { x: "2025-04-25", y: 10800 },
      { x: "2025-04-26", y: 11000 },
      { x: "2025-04-27", y: 10750 },
      { x: "2025-04-28", y: 11150 },
        { x: "2025-04-29", y: 11400 },
        { x: "2025-04-30", y: 11500 },
        { x: "2025-05-01", y: 11700 },
        { x: "2025-05-02", y: 11900 },
        { x: "2025-05-03", y: 12100 },
        { x: "2025-05-04", y: 12300 },
        { x: "2025-05-05", y: 12500 },
        { x: "2025-05-06", y: 12700 },
        { x: "2025-05-07", y: 12900 },
        { x: "2025-05-08", y: 13100 },
        { x: "2025-05-09", y: 13300 },
        { x: "2025-05-10", y: 13500 },
    ],
  },
];

export function PortfolioTrendChart() {
  return (
    <div className="w-full h-[450px] bg-muted rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-foreground mb-2">
        Portfolio Trend (15 Days)
      </h2>
      <ResponsiveLine
        data={trendData}
        margin={{ top: 20, right: 40, bottom: 70, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
        axisBottom={{ tickRotation: -30 }}
        colors={{ scheme: "category10" }}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh
      />
    </div>
  );
}
