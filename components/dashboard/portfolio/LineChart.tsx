// components/FakeLineChart.tsx
"use client";

import { ResponsiveLine } from "@nivo/line";

// Örnek sahte veri: son 12 ayın değeri
const fakeData = [
  {
    id: "Portföy Değeri",
    data: [
      { x: "2024-06", y: 50000 },
      { x: "2024-07", y: 52000 },
      { x: "2024-08", y: 48000 },
      { x: "2024-09", y: 53000 },
      { x: "2024-10", y: 55000 },
      { x: "2024-11", y: 57000 },
      { x: "2024-12", y: 60000 },
      { x: "2025-01", y: 62000 },
      { x: "2025-02", y: 61000 },
      { x: "2025-03", y: 63000 },
      { x: "2025-04", y: 64000 },
      { x: "2025-05", y: 65000 },
    ],
  },
];

export default function LineChart() {
  return (
    <div className="h-[400px] bg-white rounded-lg p-4 shadow">
      <h2 className="text-lg font-semibold mb-4"> Portföy Performansı</h2>
      <div className="h-full">
        <ResponsiveLine
          data={fakeData}
          margin={{ top: 40, right: 60, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
            legend: "Ay",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "TRY",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          lineWidth={3}
          enablePoints={false}
          enableArea={true}
          areaOpacity={0.1}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 50,
              itemWidth: 80,
              itemHeight: 20,
              symbolSize: 12,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    </div>
  );
}
