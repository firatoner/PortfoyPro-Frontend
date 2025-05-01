"use client";

// import { useState } from "react";
// import { addAssetToPortfolio } from "@/lib/api";
// import { toast } from "sonner";

// type Props = {
//   portfolioId: string;
// };

// export default function AssetForm({ portfolioId }: Props) {
//   const [type, setType] = useState("crypto");
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !amount) {
//       toast.error("Lütfen tüm alanları doldurun.");
//       return;
//     }

//     try {
//       await addAssetToPortfolio({
//         portfolioId,
//         type,
//         name,
//         amount: parseFloat(amount),
//       });

//       toast.success("Varlık başarıyla eklendi!");
//       setName("");
//       setAmount("");
//     } catch (err) {
//       console.error(err);
//       toast.error("Varlık eklenirken bir hata oluştu.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-md mt-6">
//       <div>
//         <label className="block mb-1 text-sm font-medium">Yatırım Türü</label>
//         <select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full border px-3 py-2 rounded"
//         >
//           <option value="crypto">Kripto</option>
//           <option value="gold">Altın</option>
//           <option value="currency">Döviz</option>
//           <option value="stock">Hisse Senedi</option>
//           <option value="etf">ETF</option>
//           <option value="bond">Tahvil / Mevduat</option>
//           <option value="other">Diğer</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 text-sm font-medium">Varlık Adı</label>
//         <input
//           type="text"
//           placeholder="Örn: BTC, Altın"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border px-3 py-2 rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 text-sm font-medium">Miktar</label>
//         <input
//           type="number"
//           step="0.0001"
//           placeholder="Örn: 1.5"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full border px-3 py-2 rounded"
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Varlık Ekle
//       </button>
//     </form>
//   );
// }
