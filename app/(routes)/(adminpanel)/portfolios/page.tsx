"use client";

import { useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PortfoliosPage = () => {
  const user = useUser();
  const [showModal, setShowModal] = useState(false);
  const [portfolioName, setPortfolioName] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(setLoading)

  const handleCreatePortfolio = async () => {
    if (!user) return; 

    const response = await fetch("http://localhost:3000/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: portfolioName,
        user_id: user.id,
      }),
    });

    if (response.ok) {
      alert("Portföy oluşturuldu!");
      setShowModal(false);
    } else {
      const error = await response.json();
      alert("Hata: " + error.message);
    }
  };

  return (
    <div className="relative p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Portföyler</h1>
        <Button onClick={() => setShowModal(true)}>Portföy Ekle</Button>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          {/* Background Blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md border border-gray-300 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Yeni Portföy Ekle</h2>
              <Input
                placeholder="Portföy adı girin"
                value={portfolioName}
                onChange={(e) => setPortfolioName(e.target.value)}
              />
              <div className="flex justify-end mt-4 gap-2">
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  İptal
                </Button>
                <Button onClick={handleCreatePortfolio} disabled={loading}>
                  {loading ? "Oluşturuluyor..." : "Oluştur"}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Placeholder Liste */}
      <div className="text-muted">Henüz bir portföy oluşturulmadı.</div>
    </div>
  );
};

export default PortfoliosPage;
