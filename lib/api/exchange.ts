// exchange.ts

// 1) Başta, destekleyeceğin tüm kodları listele:
const SUPPORTED_CURRENCIES = [
  "EUR",
  "TRY",
  "GBP",
  "JPY",
  "CAD",
  "AUD",
  // İleride eklemek istediğin başka kodlar da buraya
];

export async function getLiveExchangeRates() {
  const apiKey = process.env.NEXT_PUBLIC_OPENEXCHANGE_KEY!;
  if (!apiKey) {
    throw new Error("API anahtarınız (NEXT_PUBLIC_OPENEXCHANGE_KEY) tanımlı değil");
  }

  // 2) URL'e symbols parametresi ekleyerek sadece gerekli kurları çek:
  const symbolsParam = SUPPORTED_CURRENCIES.join(",");
  const res = await fetch(
    `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&symbols=${symbolsParam}`
  );
  if (!res.ok) {
    throw new Error(`Kur API isteği başarısız: ${res.status}`);
  }

  const data = await res.json();

  if (!data?.rates) {
    throw new Error("Kur verisi alınamadı");
  }

  // 3) rates objesini dinamik oluştur:
  const rates: Record<string, number> = {
    USD: 1, // OpenExchange base’i USD'dir
  };

  for (const code of SUPPORTED_CURRENCIES) {
    const rate = data.rates[code];
    if (typeof rate !== "number") {
      throw new Error(`Beklenen ${code} kuru bulunamadı`);
    }
    rates[code] = rate;
  }

  return rates;
}

