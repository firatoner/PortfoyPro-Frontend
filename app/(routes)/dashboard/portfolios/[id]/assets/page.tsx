// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { getPortfolioById} from "@/lib/api";

// import AssetForm from "@/components/dashboard/assets/AssetForm";
// import AssetList from    "@/components/dashboard/assets/AssetList";

// export default function PortfolioAssetsPage() {
//   const { id } = useParams();
//   const [portfolio, setPortfolio] = useState(null);

//   useEffect(() => {
//     if (id) {
//       getPortfolioById(id).then(setPortfolio);
//     }
//   }, [id]);

//   if (!portfolio) return <div>Yükleniyor...</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{portfolio.name} Portföyü</h1>
//       <AssetForm portfolioId={id as string} />
//       <AssetList portfolioId={id as string} />
//     </div>
//   );
// }
