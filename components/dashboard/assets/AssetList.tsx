// "use client";

// import { useEffect, useState } from "react";
// import { getAssetsByPortfolio } from "@/lib/api";
// import { toast } from "sonner";

// type Asset = {
//   id: string;
//   name: string;
//   type: string;
//   amount: number;
//   createdAt?: string;
// };

// export default function AssetList({ portfolioId }: { portfolioId: string }) {
//   const [assets, setAssets] = useState<Asset[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchAssets = async () => {
//     try {
//       setLoading(true);
//       const data = await getAssetsByPortfolio(portfolioId);
//       setAssets(data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Varlıklar alınamadı.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAssets();
//   }, [portfolioId]);

//   if (loading) return <p>Yükleniyor...</p>;

//   if (assets.length === 0) return <p>Bu portföyde henüz varlık yok.</p>;

//   return (
//     <div className="mt-8 space-y-4">
//       <h2 className="text-xl font-semibold">Varlıklar</h2>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {assets.map((asset) => (
//           <li
//             key={asset.id}
//             className="border rounded p-4 shadow-sm hover:shadow-md transition"
//           >
//             <div className="text-sm text-gray-500">{asset.type}</div>
//             <div className="text-lg font-semibold">{asset.name}</div>
//             <div className="text-sm text-gray-700">Miktar: {asset.amount}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
