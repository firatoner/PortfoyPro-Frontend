"use client";

import dynamic from "next/dynamic";

const ResponsivePie = dynamic(
  () => import("@nivo/pie").then((mod) => mod.ResponsivePie),
  { ssr: false }
);

const fakeData = [
  { id: "Crypto", label: "Crypto", value: 4200 },
  { id: "Stocks", label: "Stocks", value: 3100 },
  { id: "Gold", label: "Gold", value: 1600 },
  { id: "Currency", label: "Currency", value: 1000 },
  { id: "ETFs", label: "ETFs", value: 800 },
];

export default function PortfolioDistribution() {
  return (
    <div className="w-full h-[400px] bg-muted rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-foreground mb-2">
        My Portfolio Distribution
      </h2>
      <ResponsivePie
        data={fakeData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
