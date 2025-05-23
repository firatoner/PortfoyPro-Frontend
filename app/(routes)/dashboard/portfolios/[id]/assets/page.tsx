"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getAssetsByPortfolioId,
  deleteAsset,
  updateAsset,
} from "@/lib/api/assets";
import { getLiveExchangeRates } from "@/lib/api/exchange";
import { updateOrCreateAsset } from "@/lib/api/assets";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { Pencil } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/context/language-content";
import { getLiveCryptoRates } from "@/lib/api/crypto";

type Asset = {
  id: number;
  symbol: string;
  type: string;
  amount: number;
  buyPrice: number | string;
  portfolioId: number;
};

export default function AssetsPage() {
  const { id: portfolioId } = useParams();
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);
  const [editAmount, setEditAmount] = useState<number>(0);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<any>(null);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const [amounts, setAmounts] = useState<{ [key: string]: number }>({});
  const { language } = useLanguage();
  const t = content[language];

  // portfolios/[id]/assets/page.tsx
  const SUPPORTED_CURRENCIES = [
    "USD",
    "EUR",
    "TRY",
    "GBP",
    "JPY",
    "CAD",
    "AUD",
    // İleride gerekiyorsa buraya başka kodlar da ekleyebilirsin
  ];
  const [cryptoRates, setCryptoRates] = useState<Record<string, number> | null>(
    null
  );
  const [cryptoSelected, setCryptoSelected] = useState<Record<string, boolean>>(
    {}
  );
  const [cryptoAmounts, setCryptoAmounts] = useState<Record<string, number>>(
    {}
  );
  const [cryptoDialogOpen, setCryptoDialogOpen] = useState(false);

  const handleCryptoModalOpen = async () => {
    const rates = await getLiveCryptoRates();
    setCryptoRates(rates);
    setCryptoDialogOpen(true);
  };

  const handleCreateSelectedCryptos = async () => {
    try {
      const entries = Object.entries(cryptoSelected).filter(([_, v]) => v);
      const existing = await getAssetsByPortfolioId(portfolioId);

      for (const [symbol] of entries) {
        // Burada name ekliyoruz
        await updateOrCreateAsset(
          {
            symbol,
            type: "crypto",
            amount: cryptoAmounts[symbol] || 1,
            buyPrice: cryptoRates![symbol],
            currency: "TRY",
            note: "",
            portfolioId: Number(portfolioId),
            name: symbol, // ← EKLENDİ
          },
          existing
        );
      }

      const updated = await getAssetsByPortfolioId(portfolioId);
      setAssets(updated);
      setCryptoDialogOpen(false);
      setCryptoSelected({});
      setCryptoAmounts({});
    } catch (err) {
      console.error("Varlık oluşturma hatası:", err);
      setError("Seçilen kripto eklenemedi.");
    }
  };

  useEffect(() => {
    if (!portfolioId) return;

    getAssetsByPortfolioId(portfolioId)
      .then(setAssets)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [portfolioId]);

  const handleLiveAssetModalOpen = async () => {
    try {
      const rates = await getLiveExchangeRates();
      setExchangeRates(rates);
      setDialogOpen(true);
    } catch (err) {
      console.error(err);
      setError("Kur verileri alınırken hata oluştu.");
    }
  };

  const handleCreateSelectedAssets = async () => {
    try {
      const entries = Object.entries(selected).filter(([_, v]) => v);
      const existing = await getAssetsByPortfolioId(portfolioId);

      const getBuyPrice = (code: string) =>
        code === "TRY" ? 1 : exchangeRates!.TRY / exchangeRates![code];

      for (const [code] of entries) {
        await updateOrCreateAsset(
          {
            symbol: code,
            type: "currency",
            amount: amounts[code] || 1,
            buyPrice: getBuyPrice(code),
            currency: "TRY",
            note: "",
            portfolioId: Number(portfolioId),
            name: code, // ← BURAYA DA EKLEYİN
          },
          existing
        );
      }

      const updated = await getAssetsByPortfolioId(portfolioId);
      setAssets(updated);
      setDialogOpen(false);
      setSelected({});
      setAmounts({});
    } catch (err) {
      console.error("Varlık oluşturma hatası:", err);
      setError("Seçilen varlıklar eklenemedi.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAsset(id);
      const updated = await getAssetsByPortfolioId(Number(portfolioId));
      setAssets(updated);
    } catch (err) {
      console.error(err);
      setError("Varlık silinemedi.");
    }
  };

  const handleEdit = (asset: Asset) => {
    setEditingAsset(asset);
    setEditAmount(asset.amount);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const rates = await getLiveExchangeRates();
        setExchangeRates(rates);
      } catch (err) {
        console.error("Kur verisi alınamadı", err);
      }
    };

    fetchRates();
  }, []);

  function convertToTRY(asset: Asset, rates: any): number {
    const amount = Number(asset.amount);
    const buyPrice = Number(asset.buyPrice);

    if (!rates) return 0;

    switch (asset.currency) {
      case "TRY":
        return amount * buyPrice;
      case "USD":
        return amount * buyPrice * rates.TRY;
      case "EUR":
        return amount * buyPrice * rates.TRY;
      default:
        return 0;
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t.assets}</h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <p>{t.loading}</p>
      ) : (
        <>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleLiveAssetModalOpen}>
                {" "}
                {t.addCurrency}{" "}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.wantToAdd}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {SUPPORTED_CURRENCIES.map((code) => (
                  <div key={code} className="flex items-center gap-4">
                    <Checkbox
                      id={code}
                      checked={selected[code] || false}
                      onCheckedChange={(c) =>
                        setSelected((p) => ({ ...p, [code]: !!c }))
                      }
                    />
                    <label htmlFor={code} className="w-12">
                      {code}
                    </label>
                    <span className="text-sm text-gray-500">
                      {(code === "TRY"
                        ? 1
                        : exchangeRates?.TRY / exchangeRates?.[code]
                      )?.toLocaleString("tr-TR", {
                        style: "currency",
                        currency: "TRY",
                      })}
                    </span>
                    <Input
                      type="number"
                      placeholder={t.amount}
                      className="w-24"
                      value={amounts[code] || ""}
                      onChange={(e) =>
                        setAmounts((p) => ({
                          ...p,
                          [code]: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                ))}
                <Button
                  className="w-full mt-2"
                  onClick={handleCreateSelectedAssets}
                >
                  {t.addWantCurrency}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={cryptoDialogOpen} onOpenChange={setCryptoDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" onClick={handleCryptoModalOpen}>
                {t.addCrypto}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[70vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{t.addWantCrypto}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-4">
                {cryptoRates ? (
                  Object.entries(cryptoRates).map(([symbol, price]) => (
                    <div key={symbol} className="flex items-center gap-4">
                      <Checkbox
                        id={`c-${symbol}`}
                        checked={cryptoSelected[symbol] || false}
                        onCheckedChange={(c) =>
                          setCryptoSelected((p) => ({ ...p, [symbol]: !!c }))
                        }
                      />
                      <label htmlFor={`c-${symbol}`} className="w-12">
                        {symbol}
                      </label>
                      <span className="text-sm text-gray-500">
                        {price.toLocaleString("tr-TR", {
                          style: "currency",
                          currency: "TRY",
                        })}
                      </span>
                      <Input
                        type="number"
                        placeholder={t.amount}
                        className="w-24"
                        value={cryptoAmounts[symbol] || ""}
                        onChange={(e) =>
                          setCryptoAmounts((p) => ({
                            ...p,
                            [symbol]: Number(e.target.value),
                          }))
                        }
                      />
                    </div>
                  ))
                ) : (
                  <p>Yükleniyor…</p>
                )}
              </div>

              <Button
                className="w-full mt-4"
                onClick={handleCreateSelectedCryptos}
              >
                {t.addCrypto}
              </Button>
            </DialogContent>
          </Dialog>

          {assets.length === 0 ? (
            <p>{t.thereNoAssets}</p>
          ) : (
            <ul className="space-y-2">
              {assets.map((a) => (
                <li
                  key={a.id}
                  className="p-2 border rounded flex justify-between items-center"
                >
                  <div>
                    <div className="font-semibold">{a.symbol}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      {/* 1) Orijinal varlığın miktarını, sembolü ve pozisyonunu doğru formatla */}
                      <span>
                        {a.symbol === "USD" && /* USD’de sembol başa */ "$"}
                        {a.symbol === "EUR" && /* EUR’da sembol başa */ "€"}
                        {a.symbol !== "USD" &&
                        a.symbol !==
                          "EUR" /* diğer (crypto/GBP…) için miktar-sonra sembol */
                          ? `${Number(a.amount).toLocaleString("tr-TR", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            })} ${a.symbol}`
                          : /* USD/EUR sonrası miktar */
                            Number(a.amount).toLocaleString("tr-TR", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            })}
                        {a.symbol ===
                          "USD" /* USD’de miktardan sonra sembol değil ama burada sonradan ekleme yapılmaması için boş bırakılıyor */ &&
                          ""}
                        {a.symbol === "EUR" && ""}
                      </span>

                      <span>=</span>

                      {/* 2) TRY karşılığını göster */}
                      <span>
                        {convertToTRY(a, exchangeRates).toLocaleString(
                          "tr-TR",
                          {
                            style: "currency",
                            currency: "TRY",
                          }
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(a)}
                    >
                      <Pencil />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <FaTrash />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>{t.deleteAsset}</AlertDialogTitle>
                          <AlertDialogDescription>
                            {t.deleteAssetDescription}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(a.id)}>
                            {t.yesDelete}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Düzenleme Modalı */}
          <Dialog
            open={!!editingAsset}
            onOpenChange={() => setEditingAsset(null)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.editAsset}</DialogTitle>
              </DialogHeader>

              {editingAsset && (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {editingAsset.symbol} – {editingAsset.type}
                    </p>
                  </div>

                  <Input
                    type="number"
                    value={editAmount}
                    onChange={(e) => setEditAmount(Number(e.target.value))}
                  />

                  <Button
                    onClick={async () => {
                      try {
                        await updateAsset(editingAsset.id, {
                          amount: editAmount,
                        });
                        const updated = await getAssetsByPortfolioId(
                          portfolioId
                        );
                        setAssets(updated);
                        setEditingAsset(null);
                      } catch (err) {
                        console.error(err);
                        setError("Güncelleme başarısız.");
                      }
                    }}
                  >
                    {t.save}
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
