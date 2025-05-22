"use client";

import { ResponsiveLine } from "@nivo/line";

type DataPoint = { x: string; y: number };
type Serie = { id: string; data: DataPoint[] };

interface Props {
  data: Serie[];
}

export default function TotalWalletChange({ data }: Props) {
  return (
    // container yüksekliğini Tailwind ile ayarlıyoruz
    <div className="h-[400px]">
      <ResponsiveLine
        data={data}
        margin={{ top: 40, right: 80, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: "Tarih",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Değer (₺)",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
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
            itemDirection: "left-to-right",
          },
        ]}
      />
    </div>
  );
}
