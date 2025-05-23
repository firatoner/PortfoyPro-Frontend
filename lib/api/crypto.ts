// lib/api/crypto.ts

// Desteklemek istediğin coin sembol–ID eşlemesi (en popüler 30 coin)
const SUPPORTED_CRYPTOS: Record<string, string> = {
    BTC: "bitcoin",
    ETH: "ethereum",
    USDT: "tether",
    BNB: "binancecoin",
    USDC: "usd-coin",
    XRP: "ripple",
    ADA: "cardano",
    SOL: "solana",
    DOGE: "dogecoin",
    DOT: "polkadot",
    TRX: "tron",
    AVAX: "avalanche-2",
    SHIB: "shiba-inu",
    DAI: "dai",
    LTC: "litecoin",
    LINK: "chainlink",
    UNI: "uniswap",
    XLM: "stellar",
    ATOM: "cosmos",
    XMR: "monero",
    NEAR: "near",
    APE: "apecoin",
    VET: "vechain",
    FIL: "filecoin",
    EOS: "eos",
    THETA: "theta-token",
    ICP: "internet-computer",
  };
  
  /**
   * CoinGecko'dan TRY cinsinden fiyatları çeker ve
   * sembol -> TRY fiyatı şeklinde bir Record döner.
   */
  export async function getLiveCryptoRates(): Promise<Record<string, number>> {
    const idsParam = Object.values(SUPPORTED_CRYPTOS).join(",");
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${idsParam}&vs_currencies=try`
    );
    if (!res.ok) {
      throw new Error(`Kripto API isteği başarısız: ${res.status}`);
    }
  
    const data = await res.json();
    const rates: Record<string, number> = {};
  
    for (const [symbol, id] of Object.entries(SUPPORTED_CRYPTOS)) {
      const priceTRY = data[id]?.try;
      if (typeof priceTRY !== "number") {
        throw new Error(`${id} için TRY fiyatı bulunamadı`);
      }
      rates[symbol] = priceTRY;
    }
  
    return rates;
  }