"use client";
import { ResponsiveSunburst } from "@nivo/sunburst";

const overviewData = {
  name: "portfolio",
  children: [
    {
      name: "Crypto",
      children: [
        { name: "BTC", loc: 2500 },
        { name: "ETH", loc: 1500 },
        { name: "SOL", loc: 500 },
        { name: "ADA", loc: 400 },
        { name: "XRP", loc: 300 },
        { name: "DOGE", loc: 250 },
        { name: "AVAX", loc: 350 },
        { name: "LINK", loc: 200 },
        { name: "MATIC", loc: 300 },
        { name: "DOT", loc: 400 },
        { name: "LTC (Crypto)", loc: 500 },
        { name: "TRX (Crypto)", loc: 600 },
        { name: "XLM", loc: 700 },
        { name: "BCH", loc: 800 },
        { name: "ETC (Crypto)", loc: 900 },
        { name: "FIL", loc: 1000 },
      ],
    },
    {
      name: "Hisse Senetleri",
      children: [
        { name: "AAPL", loc: 2000 },
        { name: "GOOGL", loc: 1500 },
        { name: "AMZN", loc: 1200 },
        { name: "MSFT", loc: 1000 },
        { name: "TSLA", loc: 800 },
        { name: "FB", loc: 600 },
        { name: "NFLX", loc: 500 },
        { name: "NVDA", loc: 400 },
        { name: "AMD", loc: 300 },
        { name: "INTC", loc: 200 },
        { name: "CSCO", loc: 100 },
        { name: "ORCL", loc: 100 },
        { name: "IBM", loc: 100 },
        { name: "ADBE", loc: 100 },
        { name: "CRM", loc: 100 },
      ],
    },
    {
      name: "ETF (Detailed)",
      children: [
        { name: "SPY", loc: 3000 },
        { name: "IVV", loc: 2500 },
        { name: "VOO", loc: 2000 },
        { name: "VTI", loc: 1500 },
        { name: "IWM", loc: 1200 },
        { name: "QQQ", loc: 1000 },
        { name: "XLF", loc: 800 },
        { name: "XLY", loc: 600 },
        { name: "XLC", loc: 500 },
        { name: "XLI", loc: 400 },
      ],
    },
    {
      name: "Altcoin",
      children: [
        { name: "BNB", loc: 2000 },
        { name: "XMR", loc: 1500 },
        { name: "LTC (Altcoin)", loc: 1200 },
        { name: "EOS", loc: 1000 },
        { name: "TRX (Altcoin)", loc: 800 },
        { name: "NEO", loc: 600 },
        { name: "DASH", loc: 500 },
        { name: "ZEC", loc: 400 },
        { name: "ETC (Altcoin)", loc: 300 },
        { name: "BAT", loc: 200 },
      ],
    },
    { name: "Stocks (Other)", loc: 3000 },
    { name: "Gold", loc: 2000 },
    { name: "USD", loc: 1000 },
    { name: "ETF (Other)", loc: 1200 },
    { name: "Real Estate", loc: 800 },
    { name: "Bonds", loc: 600 },
  ],
};

export function PortfolioOverview() {
  return (
    <div className="w-full h-[400px] bg-muted rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-foreground mb-2">
        Portfolio Overview
      </h2>
      <ResponsiveSunburst
        data={overviewData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: "background" }}
        colors={{ scheme: "nivo" }}
        childColor={{ from: "color", modifiers: [["brighter", 0.3]] }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
    </div>
  );
}
